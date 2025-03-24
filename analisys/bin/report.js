const fs = require("fs");
const path = require("path");
const rules = require("./es-lint-rules.json")

const DIRECTORY = "../repos"; 
const OUTPUT_FILE = path.join(DIRECTORY, "report.md");

function parseLintFile(filePath) {
	let name = filePath.split("/").pop();
	let key = "";
	const result = {};

	fs.readFileSync(filePath, "utf8")
		.split("\n")
		.map((line) => line.trim())
		.filter((l) => l)
		.forEach((line) => {
			if (line.startsWith("Lint")) {
				key = line.split('"')[1];
				if (key.includes("demo")) {
					key = name + "-" + key;
				}
			} else if (line.startsWith("[")) {
				try {
					result[key] = JSON.parse(line);
				} catch (err) {
					console.error(`Error al parsear JSON en ${filePath}:`, err);
				}
			}
		});

	return result;
}

function processLintResults(files) {
	const globalReport = {
		rules: { rec: {}, all: {} },
		projects: {},
	};

	files.forEach((file) => {
		const match = file.split(".");
		if (!match) return;

		const [repoName, mode] = match;

		const filePath = path.join(DIRECTORY, file);
		const lintData = parseLintFile(filePath);
		if (!lintData) return;

		// Inicializar datos del proyecto
		if (!globalReport.projects[repoName]) {
			globalReport.projects[repoName] = {
				rec: { errors: 0, warnings: 0, rules: {} },
				all: { errors: 0, warnings: 0, rules: {} },
			};
		}

		let errorCount = 0,
			warningCount = 0;
		for (let key in lintData) {
			for (let problem of lintData[key]) {
				for (let message of problem.messages) {
					const ruleId = message.ruleId || "unknown";
					if (
            			!message.ruleId ||
						!message.ruleId.startsWith("@angular-eslint") ||
						message.ruleId.startsWith("@angular-eslint/template") ||
						message.fix ||
						rules[message.ruleId.split("/").pop(0)].fixable
					)
						continue;
					const severity = message.severity; // 1: warning, 2: error

					if (severity === 2) errorCount++;
					else if (severity === 1) warningCount++;

					globalReport.rules[mode][ruleId] =
						(globalReport.rules[mode][ruleId] || 0) + 1;
					globalReport.projects[repoName][mode].rules[ruleId] =
						(globalReport.projects[repoName][mode].rules[ruleId] || 0) + 1;
				}
			}
		}

		globalReport.projects[repoName][mode].errors += errorCount;
		globalReport.projects[repoName][mode].warnings += warningCount;
	});

	return globalReport;
}

function generateMarkdownReport(report) {
	const all = false
	const fixable = false
	let markdown = `# 📊 Reporte de Análisis de Lint\n\n`;

	markdown += `## 📌 Recuento Global de Reglas\n\n`;
	markdown += `| Regla | ${ all ? 'Modo Rec | Modo All' : 'Apariciones' } | Recommended ${ fixable ? '| Fixable' : ''} | Has solutions | \n`;
	markdown += `|-------|:--:${ all ? '|:--:' : '' }|:--:${fixable ? '|:--:' : ''}|:--:|\n`;

	const allRules = new Set([
		...Object.keys(report.rules.rec),
		...Object.keys(report.rules.all),
	]);
	const sortedRules = [...allRules].sort(
		(a, b) => (report.rules.all[b] || 0) - (report.rules.all[a] || 0)
	);

	sortedRules.forEach((rule) => {
		const data = rules[rule.split("/").pop()]
		const count = all ? `| ${report.rules.rec[rule] || 0}` :''
		const fix = fixable ? `| ${ data.fixable  ? '🔧' : '' }` : ''
		markdown += `| \`${
			rule
		}\` ${count}| ${
			report.rules.all[rule] || 0
		} | ${
			data.recommended ? '✅' : ''
		} ${fix} | ${
			data.has_suggestions  ? '💡' : ''
		} |\n`;
	});

	markdown += `\n## 📊 Recuento por Proyecto\n\n`;

	const sortedProjects = Object.entries(report.projects).sort(
		([, a], [, b]) =>
			b.all.errors - a.all.errors || b.all.warnings - a.all.warnings
	);

	for (const [project, data] of sortedProjects) {
		markdown += `### 📂 ${project}\n\n`;
		markdown += `| Modo | Errores | Warnings |\n`;
		markdown += `|------|:--:|:--:|\n`;
		markdown += `| Rec  | ${data.rec.errors} | ${data.rec.warnings} |\n`;
		markdown += `| All  | ${data.all.errors} | ${data.all.warnings} |\n\n`;

		markdown += `#### 🔹 Recuento de Reglas\n\n`;
		markdown += `| Regla | Modo Rec | Modo All |\n`;
		markdown += `|-------|:--:|:--:|\n`;

		const projectRules = new Set([
			...Object.keys(data.rec.rules),
			...Object.keys(data.all.rules),
		]);
		const sortedProjectRules = [...projectRules].sort(
			(a, b) => (data.all.rules[b] || 0) - (data.all.rules[a] || 0)
		);

		sortedProjectRules.forEach((rule) => {
			markdown += `| ${rule} | ${data.rec.rules[rule] || 0} | ${
				data.all.rules[rule] || 0
			} |\n`;
		});
		markdown += `\n---\n\n`;
	}

	return markdown;
}

function generateReport() {
	const files = fs
		.readdirSync(DIRECTORY)
		.filter((file) => file.match(/^.*\.(rec|all)/));
	const report = processLintResults(files);
	const markdownReport = generateMarkdownReport(report);
	fs.writeFileSync(OUTPUT_FILE, markdownReport);
	console.log(`✅ Reporte guardado en ${OUTPUT_FILE}`);
}

generateReport();
