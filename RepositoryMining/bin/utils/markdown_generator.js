const utils = require("./markdown_utils");
const { getValue } = require("./utils");

/**
 * Generate a markdown table from a data array, which contains objects, the field items define how and what show in the table like the way to obtain the value to show
 * @param {any[]|{data:any[],message:string}} data Array de objetos con los datos a mostrar
 * @param  {...{name:string, align?: 'l'|'c'|'r', fn: (value) => any}} fields Un objeto donde cada campo define las propiedades y la transformación a aplicar
 * @returns {string} Una cadena de texto con la tabla en formato Markdown
 */
function genMarkdownTable(data, ...fields) {
  let noEntryMessage = "No data";
  if (!Array.isArray(data)) {
    data = data.data;
    noEntryMessage = data.message;
  }
  if (!data.length) return `\n> [!WARNING]\n> ${noEntryMessage}\n\n`;
  const aligns = { c: ":--:", r: "--:" };
  let markdown = ["", ...fields.map((i) => ` ${i.name} `), ""].join("|") + "\n";
  markdown +=
    ["", ...fields.map((i) => ` ${aligns[i.align] ?? "---"} `), ""].join("|") +
    "\n";
  for (const item of data) {
    markdown +=
      ["", ...fields.map((i) => ` ${i.fn(item) ?? ""} `), ""].join("|") + "\n";
  }
  return markdown + "\n";
}

function genIndexMarkdown(md) {
  const counter = {};
  const index = md
    .split("\n")
    .filter((line) => line.startsWith("#"))
    .map((titleMd) => {
      const titleRegex = /^(#+)\s*(.*)/gm;
      const match = titleRegex.exec(titleMd);
      const level = match[1].length;
      const title = match[2];
      let entry = title.replaceAll(" ", "-").toLocaleLowerCase();
      if (counter[title] == undefined) counter[title] = 1;
      else
        entry = `${entry}-${++counter[title]}`
          .replace("🖊️", "%EF%B8%8F")
          .replace("💻", "")
          .replace("🧮", "");
      return { level, title, entry };
    });
  const minimumLevel = Math.min(...index.map((item) => item.level));

  return (
    "<details>\n" +
    "\t<summary>Index</summary>\n\n" +
    index
      .map(
        ({ level, entry, title }) =>
          "\t".repeat(level - minimumLevel) + `- [${title}](#${entry})`
      )
      .join("\n") +
    "\n</details>"
  );
}

/**
 *
 * @param {*} data
 * @param {'all_entries'|'resume'|'repo'|'project'} mode
 * @param {string} noEntryMessage
 * @returns
 */
function genMarkdownRepoTable(
  data,
  mode = "all_entries",
  filterFn = (_) => true,
  noEntryMessage = "The project pass linting"
) {
  const array = Object.entries(data)
    .sort(utils.sortFn)
    .filter((value) => mode !== "resume" || filterFn(value[0]));
  return genMarkdownTable(
    { data: array, message: noEntryMessage },
    ...utils.TABLE_ENTRIES[mode.toLocaleUpperCase()]
  );
}

/**
 *
 * @param {*} report
 */
exports.genMarkdownRepoReport = function (repo) {
  const level = 1;
  const projects = Object.entries(repo.projects);

  if (repo.name === "ng-apexcharts") debugger;

  return (
    "#".repeat(level) +
    ` 🖊️ ${repo.name}\n\n` +
    "**Info from repo**:\n" +
    `- **URL**: <${repo.url}>\n` +
    "- **LastCommit**:\n" +
    `\t- **Hash**: ${repo.HEAD.commit}\n` +
    `\t- **Author**: ${repo.HEAD.author}\n` +
    `\t- **Message**: ${repo.HEAD.message}\n` +
    `\t- **Date**: ${repo.HEAD.date}\n\n` +
    (projects.length > 1
      ? "#".repeat(level + 1) +
        ` 🧮 Total\n\n` +
        genMarkdownRepoTable(repo.total, "resume") +
        "\n\n" +
        projects
          .map(
            ([projectName, project]) =>
              "#".repeat(level + 1) +
              ` 💻 ${projectName}\n\n` +
              genMarkdownRepoTable(project, "project")
          )
          .join("")
      : "#".repeat(level + 1) +
        ` All\n\n` +
        `${genMarkdownRepoTable(repo.total, "all_entries")}\n\n` +
        "#".repeat(level + 1) +
        ` Important to us\n\n` +
        `${genMarkdownRepoTable(repo.total, "resume")}\n\n`)
  );
};

function getMRef(repo, project) {
  const file = `repositories/report.${repo}.md`;
  return [repo, project]
    .map((item, i) => [item, `${i ? "" : "%EF%B8%8F"}-${item}`])
    .map(([item, ref]) => `[${item}](${file}#${ref})`)
    .join(" | ");
}

const calculate = (array) => array.reduce((a, c) => a + getValue(c), 0);

function genRulesInProject(rules) {
  let markdown = "";
  Object.entries(rules)
    .sort(([_1, f1], [_2, f2]) => calculate(f2) - calculate(f1))
    .forEach(([rule, files]) => {
      const symbolInfo = utils.ESLINT_RULE_DATA_ENTRY.map(({ fn }) =>
        fn([rule])
      )
        .join(" ")
        .trim();
      let matches = 0;
      const table = files
        .sort(
          ({ all: a1 }, { all: a2 }) =>
            a2.warnings + a2.errors - (a1.warnings + a1.errors)
        )
        .map(({ project: [repo, project], recommended: rec, all }) => {
          const refMarkdown = getMRef(repo, project);
          matches += rec.warnings + rec.errors + all.warnings + all.errors;
          return `| ${refMarkdown} | ${rec.warnings} | ${rec.errors} | ${all.warnings} | ${all.errors} |`;
        })
        .join("\n");

      markdown += `<details>\n<summary>${rule} (projects: ${files.length}, matches: ${matches}) ${symbolInfo}</summary>\n\n`;
      markdown += `| Repository | Project | Recommended<br>${utils.SYMBOLS.warnings} Warnings | Recommended<br>${utils.SYMBOLS.errors} Errors | All<br>${utils.SYMBOLS.warnings} Warnings | All<br>${utils.SYMBOLS.errors} Errors |\n`;
      markdown += "|---|---|:--:|:--:|:--:|:--:|\n";
      markdown += table + "\n\n";
      markdown += "</details>\n\n";
    });
  return markdown;
}

function genCatalog(rules) {
  const header = "| Rule | Repository | Project | Count |\n|---|---|---|:--:|";
  const rows = Object.entries(rules)
    .map(([rule, projects]) => {
      return projects
        .map(({ project, _, all }, i) => {
          return (
            "|" +
            [
              i === 0 ? rule : "",
              getMRef(project[0], project[1]),
              all.warnings + all.errors,
            ].join(" | ") +
            " |"
          );
        })
        .join("\n");
    })
    .join("\n");
  return header + "\n" + rows;
}

function genMarkdownRepoIndex(repo, analysisDir) {
  return Object.keys(repo)
    .map((repo) => `- [${repo}](${analysisDir}/report.${repo}.md)`)
    .join("\n");
}

exports.genMarkdownResumeReport = function (report, analysisDir) {
  const intro =
    "# 📑 `@angular-eslint@19.3.0` Rules Analysis Report\n\n" +
    "## Symbols\n\n" +
    `${utils.SYMBOLS_DESCRIPTION}\n\n`;

  const markdown =
    "## Repositories Navigation Index\n\n" +
    `${genMarkdownRepoIndex(report.repos, analysisDir)}\n\n` +
    "## Global Summary\n\n" +
    "### All Rules\n\n" +
    `${genMarkdownRepoTable(report.total, "resume")}\n\n` +
    "### Rules Important to us\n\n" +
    `${genMarkdownRepoTable(
      report.total,
      "resume",
      utils.isNotAFixableOrSuggestRule
    )}\n\n` +
    "## Rules by Repository\n\n" +
    "### Detailed Rules\n\n" +
    `${genRulesInProject(report.rules)}\n\n` +
    "### Catalog\n\n" +
    `${genCatalog(report.rules)}\n\n`;

  return (
    intro + "## Index\n\n" + `${genIndexMarkdown(markdown)}\n\n` + `${markdown}`
  );
};

if (require.main === module) {
  const report = require("../../result/automatic.report.json");
  const fs = require("fs");
  const path = require("path");

  const catalog = this.genMarkdownResumeReport(
    report,
    path.join(__dirname, "..", "result")
  );
  fs.writeFileSync(path.join(__dirname, "report.md"), catalog);
  console.log(
    "✅",
    "Catalog saved in",
    `"${path.join(__dirname, "report.md")}"`
  );
}
