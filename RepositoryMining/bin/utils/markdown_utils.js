const { rules } = require("./es-lint-rules");

exports.RULES = rules;
exports.sortFn = (item1, item2) =>
  item2[1].all.warnings +
  item2[1].all.errors +
  (item1[1].all.warnings + item1[1].all.errors);

const SYMBOLS = {
  errors: "💥",
  warnings: "⚠️",
  fixable: "🔧",
  recommended: "✅",
  has_suggestions: "💡",
  not_found_in_angular_eslint_rules: "❌",
  docs: "📚",
  code: "📄",
  test: "🧪",
};

exports.isNotAFixableRule = function (rule) {
  return rule in rules && !rules[rule].fixable;
};
/**
 *
 * @param {string} word
 */
const toUpperFistLetter = (word) =>
  word.charAt(0).toUpperCase() + word.slice(1);

exports.SYMBOLS = SYMBOLS;
exports.SYMBOLS_DESCRIPTION =
  "> [!NOTE]\n> Symbols meaning\n" +
  Object.entries(SYMBOLS)
    .map(
      ([name, symbol]) =>
        `> - ${symbol} = ${toUpperFistLetter(name.replaceAll("-", " "))}`
    )
    .join("\n") +
  "\n\n";

/**
 *
 * @param {string} value
 */
function format(value) {
  if (!value) return value;
  if (value.startsWith("^") || value.startsWith("$")) value = value.slice(1);
  if (!value.endsWith("s")) value += "s";
  return "<br>" + value.split("-").map(toUpperFistLetter).join(" ");
}
// Rule name
const RULE_NAME_ENTRY = {
  name: "📏 Rule",
  fn: ([rule]) => `\`${rule}\``,
};
// Easy access to repo files
const RULE_ACCESS_ENTRY = ["docs", "code", "test"].map((item) => ({
  name: SYMBOLS[item],
  align: "c",
  fn: ([rule]) => {
    const dataRule = rules[rule];
    return dataRule
      ? dataRule[item]
        ? `[${SYMBOLS[item]}](${dataRule[item]})`
        : ""
      : SYMBOLS.not_found_in_angular_eslint_rules;
  },
}));
// All recounts
const INSANE_DETAIL_RECOUNT_ENTRY = ["recommended", "all"]
  .map((mode) =>
    ["warnings", "errors"].map((target) =>
      ["", "^fixable", "$with-suggestions"].map((config) => {
        const key = config.startsWith("^")
          ? `${config.slice(1)}-${target}`
          : config.startsWith("$")
          ? `${target}-${config.slice(1)}`
          : target;

        return {
          name:
            `${toUpperFistLetter(mode)}<br>` +
            `${SYMBOLS[target]} ${toUpperFistLetter(target)}` +
            `${format(config)}`,
          align: "c",
          fn: ([_, value]) => value[mode][key],
        };
      })
    )
  )
  .flat(3);
// Simple recount
const DETAIL_RECOUNT_ENTRY = INSANE_DETAIL_RECOUNT_ENTRY.filter(
  (entry) => !/.*<br>.*<br>.*/.test(entry.name)
);
// Rule data from es-lint
exports.ESLINT_RULE_DATA_ENTRY = [
  "fixable",
  "recommended",
  "has_suggestions",
].map((item) => ({
  name: SYMBOLS[item],
  align: "c",
  fn: ([rule]) => {
    const dataRule = rules[rule];
    return dataRule
      ? dataRule[item]
        ? SYMBOLS[item]
        : ""
      : SYMBOLS.not_found_in_angular_eslint_rules;
  },
}));

exports.TABLE_ENTRIES = {
  ALL_ENTRIES: [
    RULE_NAME_ENTRY,
    ...RULE_ACCESS_ENTRY,
    ...INSANE_DETAIL_RECOUNT_ENTRY,
    ...this.ESLINT_RULE_DATA_ENTRY,
  ],
  RESUME: [
    RULE_NAME_ENTRY,
    ...RULE_ACCESS_ENTRY,
    ...DETAIL_RECOUNT_ENTRY,
    ...this.ESLINT_RULE_DATA_ENTRY,
  ],
  REPO: [
    RULE_NAME_ENTRY,
    ...RULE_ACCESS_ENTRY,
    ...DETAIL_RECOUNT_ENTRY,
    ...this.ESLINT_RULE_DATA_ENTRY,
  ],
  PROJECT: [RULE_NAME_ENTRY, ...INSANE_DETAIL_RECOUNT_ENTRY],
};
