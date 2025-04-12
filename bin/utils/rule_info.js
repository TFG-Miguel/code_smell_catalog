const a = {
  automaticas: [
    "use-injectable-provided-in",
    "no-empty-lifecycle-method",
    "prefer-output-readonly",
    "relative-url-prefix",
    "no-duplicates-in-metadata-arrays",
    "sort-lifecycle-methods",
    "no-host-metadata-property",
  ],
  semiautomaticas: [
    "prefer-on-push-component-change-detection",
    "prefer-signals",
    "no-forward-ref",
    "use-component-view-encapsulation",
    "no-output-on-prefix",
    "directive-selector",
    "no-output-native",
    "component-max-inline-declarations",
    "runtime-localize",
    "component-selector",
    "component-class-suffix",
    "no-lifecycle-call",
    "use-component-selector",
  ],
};
const { rules: rulesDic } = require("./es-lint-rules");
Object.entries(a).forEach(([mode, rules]) => {
  console.log("\n\n" + mode);
  rules.forEach((rule) => {
    const data = rulesDic[rule];
    if (data) {
      console.log(
        data.fixable ? "F" : " ",
        data.has_suggestions ? "S" : " ",
        data.recommended ? "R" : " ",
        rule
      );
    } else {
      console.log("X X X", rule)
    }
  });
});
