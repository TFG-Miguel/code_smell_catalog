const {
  SYMBOLS_DESCRIPTION,
  sortFn,
  RULES,
  TABLE_ENTRIES,
} = require("./utils/markdown_utils");

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

function genMarkdownRepoTable(
  data,
  total = false,
  noEntryMessage = "The project pass linting"
) {
  const array = Object.entries(data);
  return (
    (array.length
      ? genMarkdownTable(
          array.sort(sortFn),
          ...(total
            ? TABLE_ENTRIES.filter(({ name }) => !/.*<br>.*<br>.*/.test(name))
            : TABLE_ENTRIES)
        )
      : `\n> [!WARNING]\n\n> ${noEntryMessage}`) + "\n\n"
  );
}

/**
 *
 * @param {*} data
 * @param {'repo'|'total'} mode
 */
function genMarkdownReport(data, mode) {
  // Modo repo
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
        "\t".repeat(2) + `- [Total](#-${entry}${count ? `-${count}` : ""})\n`;
      recount[entry] = count;
      markdown +=
        `#### 🧮 Total\n\n` + genMarkdownRepoTable(data.total, true) + "\n\n";

      markdown += repos
        .map(([projectName, project]) => {
          index +=
            "\t".repeat(2) +
            `- [${projectName}](#-${projectName
              .replace(" ", "-")
              .toLocaleLowerCase()})\n`;
          return `#### 💻 ${projectName}\n\n` + genMarkdownRepoTable(project);
        })
        .join("");
    } else {
      markdown += genMarkdownRepoTable(data.total);
    }
  } else if (mode == "total") {
    markdown += genMarkdownRepoTable(data.total, true) + "\n\n";
    markdown += "### Which projects has rules\n";
    Object.entries(data.projects_with_rules).forEach(([rule, files]) => {
      markdown += `<details>\n<summary>${rule}</summary>\n\n`;
      files.forEach(({project, warnings, errors}) => {
        markdown += `- ${project.join(" -> ")} \\[W:${warnings} E:${errors}]\n`;
      });
      markdown += "</details>\n\n";
    });
  }
  markdown += "\n\n";
  return markdown;
}

exports.genMarkdownReport = function (report) {
  recount = {};
  index =
    "## Index\n<details><summary>Index</summary>\n\n- [Global](#global)\n";
  markdown = `## Symbols\n\n${SYMBOLS_DESCRIPTION}\n\n## Global\n\n`;
  markdown += genMarkdownReport(report, "total");
  index += "- [Repositories Report](#repositories-report)\n";
  markdown += "## Repositories Report\n\n";
  markdown += Object.entries(report.repos)
    .map(([repoName, repo]) => {
      index +=
        "\t".repeat(1) +
        `- [${repoName}](#-${repoName
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
        `\t- **Date**: ${repo.HEAD.date}\n\n` +
        genMarkdownReport(repo, "repo")
      );
    })
    .join("");
  markdown =
    "# 📑 Angular ESLint RULES Analysis Report \n\n" +
    index +
    "</details>\n\n" +
    markdown;

  return markdown;
};
