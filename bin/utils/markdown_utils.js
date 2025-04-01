const { rules } = require("./es-lint-rules");

exports.RULES = rules;
exports.sortFn = (item1, item2) =>
  item2[1].all.warnings +
  item2[1].all.errors -
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

exports.SYMBOLS_DESCRIPTION =
  "> [!NOTE]\n> Symbols meaning\n" +
  Object.entries(SYMBOLS)
    .map(([name, symbol]) => `> - ${symbol} = ${name}`)
    .join("\n") +
  "\n\n";

/**
 *
 * @param {string} word
 */
const toUpperFistLetter = (word) =>
  word.charAt(0).toUpperCase() + word.slice(1);

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

exports.TABLE_ENTRIES = [
  // Rule name
  {
    name: "📏 Rule",
    fn: ([rule]) => rule,
  },
  // Easy access to repo files
  ...["docs", "code", "test"].map((item) => ({
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
  })),
  // Recounts
  ...["recommended", "all"]
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
    .flat(3),
  // Rule data
  ...["fixable", "recommended", "has_suggestions"].map((item) => ({
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
  })),
];
