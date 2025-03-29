const { rules } = require("./es-lint-rules");
const data = require("./report.tmp.verify.v1.json");
/**
 * Generate a markdown table from a data array, which contains objects, the field items define how and what show in the table like the way to obtain the value to show
 * @param {any[]} data Array de objetos con los datos a mostrar
 * @param  {...{name:string, align?: 'l'|'c'|'r', fn: (value) => any}} fields Un objeto donde cada campo define las propiedades y la transformación a aplicar
 * @returns {string} Una cadena de texto con la tabla en formato Markdown
 */
function genMarkdownTable(data, ...fields) {
  const aligns = { c: ":--:", r: "--:" };
  let markdown = ["", ...fields.map((i) => ` ${i.name} `), ""].join("|") + "\n";
  markdown +=
    ["", ...fields.map((i) => ` ${aligns[i.align] ?? "---"} `), ""].join("|") +
    "\n";
  for (const item of data) {
    markdown +=
      ["", ...fields.map((i) => ` ${i.fn(item) ?? ""} `), ""].join("|") + "\n";
  }
  return markdown;
}

const sortFn = (item1, item2) =>
  item2[1].all.warnings +
  item2[1].all.errors -
  (item1[1].all.warnings + item1[1].all.errors);

/**
 *
 * @param {*} repo
 * @param {'projects'|'total'} mode
 */
function genMarkdownReportRepo(repo, mode) {
  const deep = mode == "projects" ? 4 : 3;

  markdown = "#".repeat(deep) + " 📊 Before \n\n";
  if (mode == "projects") {
    markdown += Object.entries(repo.before.projects).map((project) => {});
  } else {
    markdown += genMarkdownTable(
      Object.entries(repo.before).sort(sortFn),
      {
        name: "📏 Rule",
        fn: ([rule, _]) => `\`${rule}\``,
      },
      {
        name: "Recommended<br>⚠️ Warnings",
        align: "c",
        fn: ([_, value]) => value.recommended.warnings,
      },
      {
        name: "Recommended<br>❌ Errors",
        align: "c",
        fn: ([_, value]) => value.recommended.errors,
      },
      {
        name: "All<br>⚠️ Warnings",
        align: "c",
        fn: ([_, value]) => value.all.warnings,
      },
      {
        name: "All<br>❌ Errors",
        align: "c",
        fn: ([_, value]) => value.all.errors,
      },
      {
        name: "Recommended",
        align: "c",
        fn: ([rule]) => {
          const dataRule = rules[rule.split("/").pop()];
          return dataRule ? (dataRule.recommended ? "✅" : "") : "❌";
        },
      },
      {
        name: "Fixable",
        align: "c",
        fn: ([rule]) => {
          const dataRule = rules[rule.split("/").pop()];
          return dataRule ? (dataRule.fixable ? "🔧" : "") : "❌";
        },
      },
      {
        name: "Has suggestions",
        align: "c",
        fn: ([rule]) => {
          const dataRule = rules[rule.split("/").pop()];
          return dataRule ? (dataRule.has_suggestion ? "💡" : "") : "❌";
        },
      }
    );
  }
  markdown += "\n\n";
  markdown += "#".repeat(deep) + " 📊 After \n\n";
  markdown += genMarkdownTable(
    Object.entries(repo.after)
      .sort(
        (item1, item2) =>
          item2[1].all.warnings +
          item2[1].all.errors -
          (item1[1].all.warnings + item1[1].all.errors)
      )
      .filter(([rule, data]) => {
        const dataRule = rules[rule.split("/").pop()];
        return dataRule && !dataRule.fixable;
      }),
    {
      name: "📏 Rule",
      fn: ([rule, _]) => `\`${rule}\``,
    },
    {
      name: "Recommended<br>⚠️ Warnings",
      align: "c",
      fn: ([_, value]) => value.recommended.warnings,
    },
    {
      name: "Recommended<br>❌ Errors",
      align: "c",
      fn: ([_, value]) => value.recommended.errors,
    },
    {
      name: "All<br>⚠️ Warnings",
      align: "c",
      fn: ([_, value]) => value.all.warnings,
    },
    {
      name: "All<br>❌ Errors",
      align: "c",
      fn: ([_, value]) => value.all.errors,
    },
    {
      name: "Recommended",
      align: "c",
      fn: ([rule]) => {
        const dataRule = rules[rule.split("/").pop()];
        return dataRule ? (dataRule.recommended ? "✅" : "") : "❌";
      },
    },
    {
      name: "Has suggestions",
      align: "c",
      fn: ([rule]) => {
        const dataRule = rules[rule.split("/").pop()];
        return dataRule ? (dataRule.has_suggestion ? "💡" : "") : "❌";
      },
    }
  );
  markdown += "\n\n";
  return markdown;
}
data.exports.genMarkdownReport = function (repos) {
  let markdown = "# Angular ESLint Rules Analysis Report \n\n";
  markdown += "## Global\n\n";
  markdown += genMarkdownReportRepo(repos, "total");
  return markdown;
};
