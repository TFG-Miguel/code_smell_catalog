const fs = require("fs");
const { genMarkdownReport } = require("./markdown");
const path = require("path");
const report = require("./report.json");

/**
 * Genera un reporte para un proyecto con sus modos recomendado y todos
 * @param {{recommended: any[], all:any[]}} project
 * @param {(item:any)=>boolean} filterFn
 */
function getProjectReport(project, filterFn = (_) => true) {
  const result = {};
  Object.entries(project)
    .filter(filterFn)
    .forEach(([mode, matches]) => {
      matches.forEach((match) => {
        match.messages.forEach((message) => {
          const { ruleId, severity, suggestions, fix } = message;
          if (ruleId && /^@angular-eslint\/[^/]+$/.test(ruleId)) {
            const ruleName = ruleId.split("/").pop();
            const type =
              // 1: warning, 2: error
              severity == 1 ? "warnings" : severity == 2 ? "errors" : "unknown";
            const has_suggestions = !!suggestions?.length;
            const fixable = !!fix;

            if (!result[ruleName]) {
              result[ruleName] = {
                recommended: {
                  warnings: 0,
                  errors: 0,
                  "fixable-warnings": 0,
                  "fixable-errors": 0,
                  "warnings-with-suggestions": 0,
                  "errors-with-suggestions": 0,
                },
                all: {
                  warnings: 0,
                  errors: 0,
                  "fixable-warnings": 0,
                  "fixable-errors": 0,
                  "warnings-with-suggestions": 0,
                  "errors-with-suggestions": 0,
                },
              };
            }

            const ruleReport = result[ruleName][mode];
            ruleReport[type]++;
            fixable && ruleReport[`fixable-${type}`]++;
            has_suggestions && ruleReport[`${type}-with-suggestions`]++;
          }
        });
      });
    });
  return result;
}

/**
 *
 * @param {{report: {[project:string]: any}}} data
 * @returns
 */
function genRepoReport(data) {
  const repo = { projects: {}, total: {}, ...data.repo };
  Object.entries(data.report).forEach(([name, project]) => {
    if (!repo.projects[name]) repo.projects[name] = {};
    repo.projects[name] = getProjectReport(project);
  });
  const total = {};
  Object.values(repo.projects).forEach((project) => {
    Object.entries(project).forEach((rule) => updateTotal(rule, total));
  });
  repo.total = total;
  return repo;
}

function updateTotal([ruleName, { recommended, all }], result) {
  if (!result[ruleName])
    result[ruleName] = {
      recommended: {
        warnings: 0,
        errors: 0,
        "fixable-warnings": 0,
        "fixable-errors": 0,
        "warnings-with-suggestions": 0,
        "errors-with-suggestions": 0,
      },
      all: {
        warnings: 0,
        errors: 0,
        "fixable-warnings": 0,
        "fixable-errors": 0,
        "warnings-with-suggestions": 0,
        "errors-with-suggestions": 0,
      },
    };
  const rule = result[ruleName];
  ["", "^fixable", "$with-suggestions"].forEach((config) => {
    const [errorType, warningType] = ["warnings", "errors"].map((advice) =>
      config.startsWith("^")
        ? `${config.slice(1)}-${advice}`
        : config.startsWith("$")
        ? `${advice}-${config.slice(1)}`
        : advice
    );
    [
      ["recommended", recommended],
      ["all", all],
    ].forEach(([mode, resource]) => {
      rule[mode][errorType] += resource[errorType];
      rule[mode][warningType] += resource[warningType];
    });
  });
  return result;
}

function getTotalReport(report) {
  const result = {};
  Object.values(report).forEach((repo) => {
    Object.entries(repo.total).forEach((rule) => {
      updateTotal(rule, result);
    });
  });
  return result;
}

/**
 *
 * @param {string} source
 * @param {{dir:string, name:string}} output
 */
function analyze_report(source, { name, dir }) {
  // Load the report
  const data = require(source);
  // Analyze the report
  const result = { repos: {} };
  Object.entries(data).forEach(
    ([nameRepo, repo]) => (result.repos[nameRepo] = genRepoReport(repo))
  );
  result.total = getTotalReport(result.repos);
  result.projects_with_rules = {};
  // Analyze for each rule which projects has reported that rule
  Object.entries(result.repos).forEach(([nameRepo, repo]) => {
    Object.entries(repo.projects).forEach(([projectName, project]) => {
      Object.entries(project).forEach(([ruleName, { all }]) => {
        if (all.errors > 0 || all.warnings > 0) {
          if (!result.projects_with_rules[ruleName]) {
            result.projects_with_rules[ruleName] = [];
          }
          result.projects_with_rules[ruleName].push({
            project: [nameRepo, projectName],
            warnings: all.warnings,
            errors: all.errors,
          });
        }
      });
    });
  });
  // Save in a json the analysis
  fs.writeFileSync(
    path.join(path.dirname(source), name + ".json"),
    JSON.stringify(result, null, 2)
  );
  // Generate and save the visual report (markdown)
  let markdown_report = genMarkdownReport(result);
  const destFile = path.join(dir, name, "README.md");
  const destDir = path.dirname(destFile);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir);
  }
  fs.writeFileSync(destFile, markdown_report);
  console.log(`✅ Saved in file ${destFile}`);
}

const SOURCE = process.argv[2] ?? "./report.json";
const OUTPUT_DIR = process.argv[3] ?? path.dirname(SOURCE);
const OUTPUT_NAME = "automatic_report";

analyze_report(SOURCE, { name: OUTPUT_NAME, dir: OUTPUT_DIR });
