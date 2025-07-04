const path = require("path");

// Consts definitions
exports.OUTPUT_NAME = "automatic.report.analyze";
exports.ADVICES = ["warnings", "errors"];
/**
 *
 * @param {number} severity
 * @returns {"warnings"|"errors"}
 */
exports.getSeverityRuleMeaning = (severity) => this.ADVICES[severity - 1];
exports.MODES = ["recommended", "all"];
exports.getModesWithResources = (recommended, all) => {
  return [
    [this.MODES[0], recommended],
    [this.MODES[1], all],
  ];
};

exports.FIXABLE_PREFIX = "fixable";
exports.SUGGESTION_SUFFIX = "with-suggestions";
exports.REPORT_ENTRIES = this.ADVICES.map((advice) =>
  ["", `^${this.FIXABLE_PREFIX}`, `$${this.SUGGESTION_SUFFIX}`].map((config) =>
    config.startsWith("^")
      ? `${config.slice(1)}-${advice}`
      : config.startsWith("$")
      ? `${advice}-${config.slice(1)}`
      : advice
  )
).flat();

exports.getDefaultRuleRecount = () => ({
  ...this.MODES.reduce((acc, mode) => {
    acc[mode] = {
      ...this.REPORT_ENTRIES.reduce((innerAcc, key) => {
        innerAcc[key] = 0;
        return innerAcc;
      }, {}),
    };
    return acc;
  }, {}),
});

// ! HERE very important

/*
Estructura de ${repo}.lint.txt
HEAD:${HEAD}
url:${url}
recommended
project:${project}
${report}
all
${all}
*/
exports.trateParams = function (argv) {
  const repoReports = [];
  let RESULT_DIR = path.resolve(__dirname);

  for (let i = 2; i < argv.length; i++) {
    switch (argv[i]) {
      case "-h":
      case "--help":
        printUsage();
        break;
      case "-r":
      case "--result":
        RESULT_DIR = argv[++i];
        break;
      default:
        if (argv[i].startsWith("-")) {
          printUsage();
        }
        repoReports.push(argv[i]);
        break;
    }
  }
  return { RESULT_DIR, REPORTS: repoReports };
};

function printUsage() {
  console.log(
    `Use: ${path.basename(process.argv[0])} ${path.basename(
      process.argv[1]
    )} [ -r | --result <result_dir> ] ...repo_linter_results`
  );
  console.log("\nOptions:");
  console.log(
    "  -r, --result <result_dir>       Specify the directory in which will be saved the final reports (json and md)"
  );
  console.log(
    "                                  By default is the current dir"
  );
  console.log(
    "  repo_linter_results             A list of linter execution result for repositories, these files must have been created through the command analyze_repos "
  );
  console.log("\n\n");
  process.exit(1);
}

/**
 *
 * @param {{recommended: {warnings:number, errors:number}, all: {warnings:number, errors:number}}}} rule
 */
exports.getValue = ({ all: { warnings: w2, errors: e2 } }) => {
  return w2 + e2;
};
