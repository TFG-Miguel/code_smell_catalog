const fs = require("fs");
const utils = require("./utils/utils");
const mdGen = require("./utils/markdown_generator");
const { rules } = require("./utils/es-lint-rules");

/**
 *
 * @param {string} repoLintReportFile
 */
function load(repoLintReportFile) {
  const repoName = repoLintReportFile.split("/").pop().split(".")[0];
  let [HEAD, url, ...data] = fs
    .readFileSync(repoLintReportFile, "utf-8")
    .split("\n");
  HEAD = JSON.parse(HEAD.split(":").slice(1).join(":"));
  url = url.split(":").slice(1).join(":");
  const result = { name: repoName, HEAD, url, recommended: {}, all: {} };

  let mode = undefined;
  let project = undefined;
  for (let i = 0; i < data.length; i++) {
    const line = data[i];
    if (line.startsWith("mode:")) {
      mode = line.split(":").slice(1).join(":");
    } else if (line.startsWith("project:")) {
      project = line.split(":").slice(1).join(":");
      result[mode][project] = JSON.parse(data[++i]);
    }
  }

  return result;
}

function analyzeMatches(mode, project, matches, report) {
  matches.forEach((match) =>
    match.messages.forEach(({ ruleId, severity, fix, suggestions }) => {
      if (
        ruleId &&
        ruleId.startsWith("@angular-eslint/") &&
        !ruleId.startsWith("@angular-eslint/template")
      ) {
        const ruleName = ruleId.split("/").pop();
        if (rules[ruleName]) {
          const type = utils.getSeverityRuleMeaning(severity);
          const fixable = !!fix;
          const has_suggestions = suggestions && suggestions.length > 0;

          if (!report.projects[project][ruleName])
            report.projects[project][ruleName] = utils.getDefaultRuleRecount();
          if (!report.total[ruleName])
            report.total[ruleName] = utils.getDefaultRuleRecount();
          [report.projects[project], report.total].forEach((dest) => {
            const ruleReport = dest[ruleName][mode];
            ruleReport[type]++;
            fixable && ruleReport[`${utils.FIXABLE_PREFIX}-${type}`]++;
            has_suggestions &&
              ruleReport[`${type}-${utils.SUGGESTION_SUFFIX}`]++;
          });
        }
      }
    })
  );
}

/**
 *
 * @param {{recommended:any, all:any}} lintReport
 * @param {{repos:{[repo:string]: any}, total:any, rules:{[rule:string]:string[]}}} finalReport
 */
function analyzeRepo({ name, recommended, all, ...data }, finalReport) {
  const report = { name, ...data, projects: {}, total: {} };
  if (name === "ng-apexcharts") debugger;
  utils.getModesWithResources(recommended, all).forEach(([mode, resource]) => {
    Object.entries(resource).forEach(([projectName, matches]) => {
      if (!report.projects[projectName]) report.projects[projectName] = {};
      analyzeMatches(mode, projectName, matches, report);
    });
  });
  Object.entries(report.projects).forEach(([projectName, rules]) =>
    Object.entries(rules).forEach(([ruleName, rule]) => {
      const rules = finalReport.rules;
      if (!rules[ruleName]) rules[ruleName] = [];
      rules[ruleName].push({
        project: [name, projectName],
        ...rule,
      });
    })
  );
  return report;
}

/**
 *
 * @param {*} report
 * @param {string} resultDir
 */
function generateRepositoryReport(report, resultDir) {
  const md = mdGen.genMarkdownRepoReport(report);
  report.md = md;
  const dir = `${resultDir}/repositories`;
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  const [jsonFile, mdFile] = ["json", "md"].map(
    (ext) => `${dir}/report.${report.name}.${ext}`
  );

  fs.writeFileSync(jsonFile, JSON.stringify(report, null, 2));
  console.log(`✅ Report json for repo saved in "${jsonFile}"`);
  fs.writeFileSync(mdFile, md);
  console.log(`✅ Report for repo saved in "${mdFile}"`);
}

/**
 *
 * @param {*} report
 * @param {string} analysisDir
 */
function generateResumeReport(report, analysisDir) {
  const md = mdGen.genMarkdownResumeReport(report, analysisDir);
  const [jsonFile, mdFile] = ["json", "md"].map(
    (ext) => `${analysisDir}/automatic.report.${ext}`
  );

  fs.writeFileSync(jsonFile, JSON.stringify(report, null, 2));
  console.log("✅", `Report json saved in "${jsonFile}"`);
  fs.writeFileSync(mdFile, md);
  console.log("✅", "Resume report saved in", `"${mdFile}"`);
}

/**
 *
 * @param {{total: {[rule:string]: any}}} repo
 * @param {{total: {[rule:string]: any}}} report
 */
function addRepoToReport(repo, report) {
  Object.entries(repo.total).forEach(([ruleName, rule]) => {
    if (!report.total[ruleName])
      report.total[ruleName] = utils.getDefaultRuleRecount();

    Object.entries(report.total[ruleName]).forEach(([mode, data]) => {
      Object.keys(data).forEach((type) => {
        report.total[ruleName][mode][type] += rule[mode][type];
      });
    });
  });
  report.repos[repo.name] = repo;
}

const ARGS = utils.trateParams(process.argv);
const report = { repos: {}, total: {}, rules: {} };
ARGS.REPORTS.forEach((lintFileReport) => {
  const lintReport = load(lintFileReport);
  const repo = analyzeRepo(lintReport, report);
  repo.name = lintReport.name;
  generateRepositoryReport(repo, ARGS.RESULT_DIR);
  addRepoToReport(repo, report);
});
generateResumeReport(report, ARGS.RESULT_DIR);
