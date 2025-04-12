const utils = require("./markdown_utils");

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
	noEntryMessage = "The project pass linting"
) {
	const array = Object.entries(data)
		.sort(utils.sortFn)
		.filter((value) => mode !== "resume" || utils.isNotAFixableRule(value[0]));
	return genMarkdownTable(
		{ data: array, message: noEntryMessage },
		...utils.TABLE_ENTRIES[mode.toLocaleUpperCase()]
	);
}

function formatNumber(number, digits = 0, fillString = "0") {
	return `${number}`.padStart(digits, fillString);
}

/**
 *
 * @param {*} report
 * @param {boolean} intermediate
 */
exports.genMarkdownRepoReport = function (repo, intermediate = false) {
	const level = intermediate ? 1 : 3;
	const projects = Object.entries(repo.projects);

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
			: genMarkdownRepoTable(repo.total, "resume"))
	);
};

function getMRef(repo, project, intermediate) {
	const file = `report.${repo}.md`;
	return [repo, project]
		.map((item, i) => [
			item,
			`${i ? "" : ""}-${item}`,
			// item
			// 	.replaceAll(" ", "-")
			// 	.toLocaleLowerCase()
			// 	.replace("🖊️", "%EF%B8%8F")
			// 	.replace("💻", "")
			// 	.replace("🧮", ""),
		])
		.map(([item, ref]) => (intermediate ? `[${item}](${file}#${ref})` : item))
		.join("-->");
}

function genRulesInProject(rules, intermediate) {
	let markdown = "";
	Object.entries(rules).forEach(([rule, files]) => {
		markdown += `<details>\n<summary>${rule}</summary>\n\n`;
		const max = files.reduce((acc, { all, recommended }) => {
			Object.entries({ all, recommended }).forEach(
				([mode, { warnings, errors }]) => {
					Object.entries({ warnings, errors }).forEach(([type, value]) => {
						if (!acc[mode]) acc[mode] = {};
						if (!acc[mode][type]) acc[mode][type] = 0;
						acc[mode][type] = Math.max(acc[mode][type], `${value}`.length);
					});
				}
			);
			return acc;
		}, {});
		files
			.sort(
				({ recommended: r1, all: a1 }, { recommended: r2, all: a2 }) =>
					r2.warnings +
					r2.errors +
					a2.warnings +
					a2.errors -
					(r1.warnings + r1.errors + a1.warnings + a1.errors)
			)
			.forEach(({ project: [repo, project], recommended: rec, all }) => {
				const refMarkdown = getMRef(repo, project, intermediate);
				markdown += `- RECOMMENDED: \\[${utils.SYMBOLS.warnings} ${formatNumber(
					rec.warnings,
					max.recommended.warnings
				)} ${utils.SYMBOLS.errors} ${formatNumber(
					rec.errors,
					max.recommended.errors
				)}] ALL: \\[${utils.SYMBOLS.warnings} ${formatNumber(
					all.warnings,
					max.all.warnings
				)} ${utils.SYMBOLS.errors} ${formatNumber(
					all.errors,
					max.all.errors
				)}] ${refMarkdown}\n\n`;
			});
		markdown += "</details>\n\n";
	});
	return markdown;
}

exports.genMarkdownResumeReport = function (report, intermediate) {
	const intro =
		"# 📑 Angular ESLint RULES Analysis Report\n\n" +
		"## Symbols\n\n" +
		`${utils.SYMBOLS_DESCRIPTION}\n\n`;

	const markdown =
		"## Resume\n\n" +
		"### All\n\n" +
		`${genMarkdownRepoTable(report.total, "all_entries")}\n\n` +
		"### Important to us project\n\n" +
		`${genMarkdownRepoTable(report.total, "resume")}\n\n` +
		"### Which projects has rules\n\n" +
		`${genRulesInProject(report.rules, intermediate)}\n\n` +
		(!intermediate
			? "## Repositories Report\n\n" +
			  `${Object.values(report.repos)
					.map((repo) => repo.md)
					.join("\n\n")}\n\n`
			: "");

	return (
		intro + "## Index\n\n" + `${genIndexMarkdown(markdown)}\n\n` + `${markdown}`
	);
};
