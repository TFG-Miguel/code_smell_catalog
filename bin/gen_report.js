const mock = require("./report.json");
const fs = require("fs");
const { genMarkdownReport } = require("./markdown");
const path = require("path");

/**
 * Genera un reporte para un proyecto con sus modos recomendado y todos
 * @param {{recommended: any[], all:any[]}} project
 * @param {(item:any)=>boolean} filterFn
 */
function getProjectReport(project, filterFn = (item) => true) {
  const result = {};
  Object.entries(project)
    .filter(filterFn)
    .forEach(([mode, matches]) => {
      matches.forEach((match) => {
        match.messages.forEach((message) => {
          const { ruleId, severity, suggestions, fix } = message;
          if (ruleId && /^@angular-eslint\/[^/]+$/.test(ruleId)) {
            // 1: warning, 2: error
            const type =
              severity == 1 ? "warnings" : severity == 2 ? "errors" : "unknown";
            const ruleReport = result[ruleId] ?? {
              recommended: {
                warnings: 0,
                errors: 0,
              },
              all: {
                warnings: 0,
                errors: 0,
              },
              fixable: !!fix,
              has_suggestion: suggestions?.length > 0,
            };
            ruleReport[mode][type] += 1;
            result[ruleId] = ruleReport;
          }
        });
      });
    });
  return result;
}

/**
 *
 * @param {data:{before: {[project:string]: any}, after: {[project:string]: any}}} data
 * @returns
 */
function genRepoReport(data) {
  const repo = {};
  Object.entries(data).forEach(([when, projects]) => {
    repo[when] = { projects: {} };
    Object.entries(projects).forEach(([name, project]) => {
      repo[when].projects[name] = getProjectReport(project);
    });
    const total = {};
    Object.values(repo[when].projects).forEach((project) => {
      Object.entries(project).forEach((rule) => updateTotal(rule, total));
    });
    repo[when].total = total;
  });
  return repo;
}

function updateTotal(
  [ruleName, { recommended, all, fixable, has_suggestion }],
  result
) {
  const rule = result[ruleName] ?? {
    recommended: {
      warnings: 0,
      errors: 0,
    },
    all: {
      warnings: 0,
      errors: 0,
    },
    fixable,
    has_suggestion,
  };
  rule.recommended.warnings += recommended.warnings;
  rule.recommended.errors += recommended.errors;
  rule.all.warnings += all.warnings;
  rule.all.errors += all.errors;
  result[ruleName] = rule;
  return result;
}

function getTotalReport(report) {
  const result = {};
  Object.entries(report).forEach(([repoName, repo]) => {
    Object.entries(repo).forEach(([when, report]) => {
      if (!result[when]) result[when] = {};
      Object.entries(report.total).forEach((rule) => {
        result[when] = updateTotal(rule, result[when] ?? {});
      });
    });
  });
  return result;
}

const SOURCE = process.argv[2] ?? "./report.json";
const OUTPUT_NAME = "report.tmp.verify.v1";
const OUTPUT_DIR = path.dirname(SOURCE);

const result = {projects:{}};
Object.entries(require(SOURCE)).forEach(
  ([nameRepo, repo]) => (result.projects[nameRepo] = genRepoReport(repo))
);
result.total = getTotalReport(result);
fs.writeFileSync(
  path.join(OUTPUT_DIR, OUTPUT_NAME + ".json"),
  JSON.stringify(result, null, 2)
);

let m = genMarkdownReport(result);
fs.writeFileSync(path.join(OUTPUT_DIR, OUTPUT_NAME + ".md"), m);
