const fs = require("fs");

const reportFile = "eslint-report.json";
if (!fs.existsSync(reportFile)) {
  console.error("No se encontró el archivo eslint-report.json");
  process.exit(1);
}

const reportData = JSON.parse(fs.readFileSync(reportFile, "utf-8"));

const summary = {};
let totalErrors = 0;
let totalWarnings = 0;

// Recorrer los resultados de ESLint
reportData.forEach((result) => {
  result.messages.forEach((msg) => {
    const ruleId = msg.ruleId || "unknown";
    if (!summary[ruleId]) {
      summary[ruleId] = { error: 0, warn: 0 };
    }
    if (msg.severity === 2) {
      summary[ruleId].error += 1;
      totalErrors += 1;
    } else {
      summary[ruleId].warn += 1;
      totalWarnings += 1;
    }
  });
});

// Ordenar por cantidad total de incidencias (errores + warnings)
const sortedSummary = Object.entries(summary).sort(
  (a, b) => b[1].error + b[1].warn - (a[1].error + a[1].warn)
);

// Obtener longitudes máximas para alineación
const maxRuleLength = Math.max(...sortedSummary.map(([rule]) => rule.length), 10);
const maxErrorLength = Math.max(...sortedSummary.map(([, counts]) => counts.error.toString().length), 5);
const maxWarnLength = Math.max(...sortedSummary.map(([, counts]) => counts.warn.toString().length), 5);

// Función para determinar el estado visual
const getStatusIcon = (errors, warnings) => {
  if (errors > 0 && warnings > 0) return "🟠  Errores y Warnings";
  if (errors > 0) return "🔴  Solo Errores";
  if (warnings > 0) return "🟡  Solo Warnings";
  return "✅  Código Limpio";
};

// Determinar estado general del código
const overallStatus = getStatusIcon(totalErrors, totalWarnings);

// Imprimir encabezado de tabla
console.log("\n📊 ESLint Report Summary:");
console.log("----------------------------------------------------------------");
console.log(
  `${"Regla".padEnd(maxRuleLength)} | ${"Errores".padStart(maxErrorLength)} | ${"Warnings".padStart(maxWarnLength)} | Estado`
);
console.log("-".repeat(maxRuleLength + maxErrorLength + maxWarnLength + 20));

// Imprimir cada regla con columnas alineadas
sortedSummary.forEach(([rule, counts]) => {
  console.log(
    `${rule.padEnd(maxRuleLength)} | ${counts.error.toString().padStart(maxErrorLength)} | ${counts.warn.toString().padStart(maxWarnLength)} | ${getStatusIcon(counts.error, counts.warn)}`
  );
});

// Línea separadora
console.log("-".repeat(maxRuleLength + maxErrorLength + maxWarnLength + 20));

// Fila de resumen total
console.log(
  `${"TOTAL".padEnd(maxRuleLength)} | ${totalErrors.toString().padStart(maxErrorLength)} | ${totalWarnings.toString().padStart(maxWarnLength)} | ${overallStatus}`
);

console.log("----------------------------------------------------------------\n");