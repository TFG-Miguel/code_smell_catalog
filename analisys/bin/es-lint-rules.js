const rules = require("./es-lint-rules.json")
Object.keys(rules).forEach((key) => {
  const rule = rules[key]
  rule.docs = `https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/${key}.md`
  rule.code =`https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/${key}.ts`
})
exports.rules = rules
exports.rulesArray = Object.entries(rules)
exports.findRules = (
  {fixable, has_suggestions, recommended}={},
  filterFnc=(_)=>true
) => this.rulesArray.filter((rule) => (
    (!filterFnc || filterFnc(rule)) && 
    (fixable == undefined || rule[1].fixable === fixable) && 
    (has_suggestions == undefined || rule[1].has_suggestions === has_suggestions) && 
    (recommended == undefined || rule[1].recommended === recommended)
))
