const { rules } = require("./es-lint-rules");

let index = "";
let recount = {};

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

function genMarkdownBeforeAfterTables(
  data,
  deep = 5,
  noEntryMessage = "The project pass linting"
) {
  let entry = "before";
  let count = (recount[entry] ?? -1) + 1;
  index +=
    "\t".repeat(deep - 2) +
    `- [Before](#${
      count > 1 ? `f09f938a-${entry}-${count}` : `📊-${entry}`
    })\n`;
  recount[entry] = count;
  let markdown = "#".repeat(deep) + " 📊 Before \n\n";

  const beforeData = Object.entries(data.before);
  markdown +=
    (beforeData.length
      ? genMarkdownTable(
          beforeData.sort(sortFn),
          {
            name: "📏 Rule",
            fn: ([rule, _]) => {
              const dataRule = rules[rule.split("/").pop()];
              return (
                (dataRule
                  ? `[📄](${dataRule.docs}) [⌨️](${dataRule.code})`
                  : "❌ ❌") + ` \`${rule}\``
              );
            },
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
            name: "Fixable",
            align: "c",
            fn: ([rule]) => {
              const dataRule = rules[rule.split("/").pop()];
              return dataRule ? (dataRule.fixable ? "🔧" : "") : "❌";
            },
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
              return dataRule ? (dataRule.has_suggestions ? "💡" : "") : "❌";
            },
          }
        )
      : `> ⚠️ ${noEntryMessage}`) + "\n\n";
  markdown += "#".repeat(deep) + " 📊 After \n\n";

  entry = "after";
  count = (recount[entry] ?? -1) + 1;
  index +=
    "\t".repeat(deep - 2) +
    `- [After](#${count ? `f09f938a-${entry}-${count}` : `📊-${entry}`})\n`;
  recount[entry] = count;
  const afterData = Object.entries(data.after);
  markdown +=
    (afterData.length
      ? genMarkdownTable(
          afterData.sort(sortFn).filter(([rule, data]) => {
            const dataRule = rules[rule.split("/").pop()];
            return dataRule && !dataRule.fixable;
          }),
          {
            name: "📏 Rule",
            fn: ([rule, _]) => {
              const dataRule = rules[rule.split("/").pop()];
              return (
                (dataRule
                  ? `[📄](${dataRule.docs}) [⌨️](${dataRule.code})`
                  : "❌ ❌") + ` \`${rule}\``
              );
            },
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
              return dataRule ? (dataRule.has_suggestions ? "💡" : "") : "❌";
            },
          }
        )
      : `> ⚠️ ${noEntryMessage}`) + "\n\n";
  return markdown;
}

/**
 *
 * @param {*} data
 * @param {'repo'|'total'} mode
 */
function genMarkdownReport(data, mode) {
  // Modo repop
  // Introduce datos del proyecto como nombre, last commit
  // Comprueba si hay varios proyectos
  // Si los hay llama a a esta función primero en modo total, luego en modo project con cada proyecto
  // en caso de no ser así llama solo a modo total
  // con after y before en cada punto
  let markdown = "";
  if (mode == "repo") {
    const repos = Object.entries(data.projects);
    if (repos.length > 1) {
      const entry = "total";
      const count = (recount[entry] ?? -1) + 1;
      index +=
        "\t".repeat(2) +
        `- [Total](#${count ? `f09fa7ae-${entry}-${count}` : `🧮-${entry}`})\n`;
      recount[entry] = count;
      markdown +=
        `#### 🧮 Total\n\n` + genMarkdownBeforeAfterTables(data.total) + "\n\n";

      markdown += repos
        .map(([projectName, project]) => {
          index +=
            "\t".repeat(2) +
            `- [${projectName}](#💻-${projectName
              .replace(" ", "-")
              .toLocaleLowerCase()})\n`;
          return (
            `#### 💻 ${projectName}\n\n` + genMarkdownBeforeAfterTables(project)
          );
        })
        .join("");
    } else {
      markdown += genMarkdownBeforeAfterTables(data.total, 4);
    }
  } else if (mode == "total") {
    markdown += genMarkdownBeforeAfterTables(data, 3);
  }
  markdown += "\n\n";
  return markdown;
}

exports.genMarkdownReport = function (report) {
  recount = {};
  index = "## Index\n\n- [Global](#global)\n";
  markdown = "## Global\n\n";
  markdown += genMarkdownReport(report.total, "total");
  index += "- [Repositories Report](#repositories-report)\n";
  markdown += "## Repositories Report\n\n";
  markdown += Object.entries(report.repos)
    .map(([repoName, repo]) => {
      index +=
        "\t".repeat(1) +
        `- [${repoName}](#🖊️-${repoName
          .replace(" ", "-")
          .toLocaleLowerCase()})\n`;
      return (
        `### 🖊️ ${repoName}\n\n` +
        "**Info from repo**:\n" +
        `- **URL**: <${repo.url}>\n` +
        "- **LastCommit**:\n" +
        `\t- **Hash**: ${repo.HEAD.commit}\n` +
        `\t- **Author**: ${repo.HEAD.author}\n` +
        `\t- **Message**: ${repo.HEAD.message}\n` +
        `\t- **Date**: ${repo.HEAD.date}\n` +
        genMarkdownReport(repo, "repo")
      );
    })
    .join("");
  markdown =
    "# 📑 Angular ESLint Rules Analysis Report \n\n" +
    index +
    "\n\n" +
    markdown;

  return markdown;
};
