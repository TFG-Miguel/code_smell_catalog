const fs = require("fs");
const { genMarkdownReport } = require("./utils/markdown");
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
            ruleReport[mode][type]++;
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
  const repo = { projects: {}, total: {}, ...data.repo };
  ["before", "after"].forEach((when) => {
    Object.entries(data[when]).forEach(([name, project]) => {
      if (!repo.projects[name]) repo.projects[name] = {};
      repo.projects[name][when] = getProjectReport(project);
    });
    const total = {};
    Object.values(repo.projects).forEach((project) => {
      Object.entries(project[when]).forEach((rule) => updateTotal(rule, total));
    });
    repo.total[when] = total;
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
    ["before", "after"].forEach((when) => {
      if (!result[when]) result[when] = {};
      Object.entries(repo.total[when]).forEach((rule) => {
        result[when] = updateTotal(rule, result[when] ?? {});
      });
    });
  });
  return result;
}

const SOURCE = process.argv[2] ?? "./report.json";
const OUTPUT_DIR = process.argv[3] ?? path.dirname(SOURCE);
const OUTPUT_NAME = "automatic.report.analyze";

const result = { repos: {} };
Object.entries(require(SOURCE)).forEach(
  ([nameRepo, repo]) => (result.repos[nameRepo] = genRepoReport(repo))
);
result.total = getTotalReport(result.repos);
fs.writeFileSync(
  path.join(OUTPUT_DIR, OUTPUT_NAME + ".json"),
  JSON.stringify(result, null, 2)
);

let m = genMarkdownReport(result);
const DEST_FILE = path.join(OUTPUT_DIR, OUTPUT_NAME + ".md");
fs.writeFileSync(DEST_FILE, m);
console.log(`✅ Saved in file ${DEST_FILE}`);
