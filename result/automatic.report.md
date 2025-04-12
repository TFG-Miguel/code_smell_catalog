# 📑 Angular ESLint RULES Analysis Report

## Symbols

> [!NOTE]
> Symbols meaning
> - 💥 = Errors
> - ⚠️ = Warnings
> - 🔧 = Fixable
> - ✅ = Recommended
> - 💡 = Has_suggestions
> - ❌ = Not_found_in_angular_eslint_rules
> - 📚 = Docs
> - 📄 = Code
> - 🧪 = Test



## Index

<details>
	<summary>Index</summary>

- [Resume](#resume)
	- [All](#all)
	- [Important to us project](#important-to-us-project)
	- [Which projects has rules](#which-projects-has-rules)
</details>

## Resume

### All

| 📏 Rule | 📚 | 📄 | 🧪 | Recommended<br>⚠️ Warnings | Recommended<br>⚠️ Warnings<br>Fixables | Recommended<br>⚠️ Warnings<br>With Suggestions | Recommended<br>💥 Errors | Recommended<br>💥 Errors<br>Fixables | Recommended<br>💥 Errors<br>With Suggestions | All<br>⚠️ Warnings | All<br>⚠️ Warnings<br>Fixables | All<br>⚠️ Warnings<br>With Suggestions | All<br>💥 Errors | All<br>💥 Errors<br>Fixables | All<br>💥 Errors<br>With Suggestions | 🔧 | ✅ | 💡 |
| --- | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| `prefer-signals` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-signals.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-signals.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-signals) | 0 | 0 | 0 | 219 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 🔧 |  |  |
| `prefer-on-push-component-change-detection` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-on-push-component-change-detection.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-on-push-component-change-detection.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-on-push-component-change-detection) | 0 | 0 | 0 | 125 | 0 | 125 | 0 | 0 | 0 | 0 | 0 | 0 |  |  | 💡 |
| `use-component-view-encapsulation` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/use-component-view-encapsulation.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/use-component-view-encapsulation.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/use-component-view-encapsulation) | 0 | 0 | 0 | 59 | 0 | 59 | 0 | 0 | 0 | 0 | 0 | 0 |  |  | 💡 |
| `relative-url-prefix` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/relative-url-prefix.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/relative-url-prefix.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/relative-url-prefix) | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |  |  |
| `consistent-component-styles` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-component-styles.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/consistent-component-styles.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/consistent-component-styles) | 0 | 0 | 0 | 48 | 48 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 🔧 |  |  |
| `component-max-inline-declarations` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/component-max-inline-declarations.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/component-max-inline-declarations.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/component-max-inline-declarations) | 0 | 0 | 0 | 47 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |  |  |
| `prefer-output-readonly` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-output-readonly.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-output-readonly.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-output-readonly) | 0 | 0 | 0 | 46 | 0 | 46 | 0 | 0 | 0 | 0 | 0 | 0 |  |  | 💡 |
| `use-injectable-provided-in` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/use-injectable-provided-in.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/use-injectable-provided-in.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/use-injectable-provided-in) | 0 | 0 | 0 | 31 | 0 | 31 | 0 | 0 | 0 | 0 | 0 | 0 |  |  | 💡 |
| `prefer-standalone` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-standalone.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-standalone.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-standalone) | 0 | 0 | 0 | 12 | 12 | 0 | 0 | 0 | 0 | 12 | 12 | 0 | 🔧 | ✅ |  |
| `no-output-on-prefix` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/no-output-on-prefix.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/no-output-on-prefix.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/no-output-on-prefix) | 0 | 0 | 0 | 11 | 0 | 0 | 0 | 0 | 0 | 11 | 0 | 0 |  | ✅ |  |
| `runtime-localize` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/runtime-localize.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/runtime-localize.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/runtime-localize) | 0 | 0 | 0 | 21 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |  |  |
| `prefer-standalone-component` | ❌ | ❌ | ❌ | 0 | 0 | 0 | 11 | 11 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ❌ | ❌ | ❌ |
| `component-class-suffix` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/component-class-suffix.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/component-class-suffix.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/component-class-suffix) | 0 | 0 | 0 | 5 | 0 | 0 | 0 | 0 | 0 | 5 | 0 | 0 |  | ✅ |  |
| `no-empty-lifecycle-method` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/no-empty-lifecycle-method.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/no-empty-lifecycle-method.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/no-empty-lifecycle-method) | 0 | 0 | 0 | 5 | 0 | 5 | 0 | 0 | 0 | 5 | 0 | 5 |  | ✅ | 💡 |
| `sort-ngmodule-metadata-arrays` | ❌ | ❌ | ❌ | 0 | 0 | 0 | 9 | 9 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ❌ | ❌ | ❌ |
| `sort-lifecycle-methods` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/sort-lifecycle-methods.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/sort-lifecycle-methods.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/sort-lifecycle-methods) | 0 | 0 | 0 | 7 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |  |  |
| `use-component-selector` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/use-component-selector.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/use-component-selector.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/use-component-selector) | 0 | 0 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |  |  |
| `component-selector` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/component-selector.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/component-selector.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/component-selector) | 0 | 0 | 0 | 3 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 0 |  |  |  |
| `no-output-native` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/no-output-native.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/no-output-native.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/no-output-native) | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |  | ✅ |  |
| `no-forward-ref` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/no-forward-ref.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/no-forward-ref.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/no-forward-ref) | 0 | 0 | 0 | 3 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |  |  |
| `no-host-metadata-property` | ❌ | ❌ | ❌ | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | ❌ | ❌ | ❌ |
| `directive-selector` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/directive-selector.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/directive-selector.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/directive-selector) | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |  |  |  |
| `use-lifecycle-interface` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/use-lifecycle-interface.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/use-lifecycle-interface.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/use-lifecycle-interface) | 0 | 0 | 0 | 1 | 1 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 🔧 |  |  |
| `no-lifecycle-call` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/no-lifecycle-call.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/no-lifecycle-call.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/no-lifecycle-call) | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |  |  |
| `no-duplicates-in-metadata-arrays` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/no-duplicates-in-metadata-arrays.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/no-duplicates-in-metadata-arrays.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/no-duplicates-in-metadata-arrays) | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |  |  |  |



### Important to us project

| 📏 Rule | 📚 | 📄 | 🧪 | Recommended<br>⚠️ Warnings | Recommended<br>💥 Errors | All<br>⚠️ Warnings | All<br>💥 Errors | 🔧 | ✅ | 💡 |
| --- | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| `prefer-on-push-component-change-detection` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-on-push-component-change-detection.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-on-push-component-change-detection.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-on-push-component-change-detection) | 0 | 125 | 0 | 0 |  |  | 💡 |
| `use-component-view-encapsulation` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/use-component-view-encapsulation.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/use-component-view-encapsulation.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/use-component-view-encapsulation) | 0 | 59 | 0 | 0 |  |  | 💡 |
| `relative-url-prefix` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/relative-url-prefix.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/relative-url-prefix.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/relative-url-prefix) | 0 | 50 | 0 | 0 |  |  |  |
| `component-max-inline-declarations` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/component-max-inline-declarations.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/component-max-inline-declarations.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/component-max-inline-declarations) | 0 | 47 | 0 | 0 |  |  |  |
| `prefer-output-readonly` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-output-readonly.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-output-readonly.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-output-readonly) | 0 | 46 | 0 | 0 |  |  | 💡 |
| `use-injectable-provided-in` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/use-injectable-provided-in.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/use-injectable-provided-in.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/use-injectable-provided-in) | 0 | 31 | 0 | 0 |  |  | 💡 |
| `no-output-on-prefix` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/no-output-on-prefix.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/no-output-on-prefix.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/no-output-on-prefix) | 0 | 11 | 0 | 11 |  | ✅ |  |
| `runtime-localize` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/runtime-localize.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/runtime-localize.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/runtime-localize) | 0 | 21 | 0 | 0 |  |  |  |
| `component-class-suffix` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/component-class-suffix.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/component-class-suffix.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/component-class-suffix) | 0 | 5 | 0 | 5 |  | ✅ |  |
| `no-empty-lifecycle-method` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/no-empty-lifecycle-method.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/no-empty-lifecycle-method.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/no-empty-lifecycle-method) | 0 | 5 | 0 | 5 |  | ✅ | 💡 |
| `sort-lifecycle-methods` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/sort-lifecycle-methods.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/sort-lifecycle-methods.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/sort-lifecycle-methods) | 0 | 7 | 0 | 0 |  |  |  |
| `use-component-selector` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/use-component-selector.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/use-component-selector.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/use-component-selector) | 0 | 6 | 0 | 0 |  |  |  |
| `component-selector` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/component-selector.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/component-selector.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/component-selector) | 0 | 3 | 0 | 3 |  |  |  |
| `no-output-native` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/no-output-native.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/no-output-native.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/no-output-native) | 0 | 2 | 0 | 2 |  | ✅ |  |
| `no-forward-ref` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/no-forward-ref.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/no-forward-ref.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/no-forward-ref) | 0 | 3 | 0 | 0 |  |  |  |
| `directive-selector` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/directive-selector.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/directive-selector.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/directive-selector) | 0 | 1 | 0 | 1 |  |  |  |
| `no-lifecycle-call` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/no-lifecycle-call.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/no-lifecycle-call.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/no-lifecycle-call) | 0 | 1 | 0 | 0 |  |  |  |
| `no-duplicates-in-metadata-arrays` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/no-duplicates-in-metadata-arrays.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/no-duplicates-in-metadata-arrays.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/no-duplicates-in-metadata-arrays) | 0 | 1 | 0 | 0 |  |  |  |



### Which projects has rules

<details>
<summary>prefer-on-push-component-change-detection</summary>

- RECOMMENDED: \[⚠️ 0 💥 20] ALL: \[⚠️ 0 💥 0] [angular-calendar](repositories/report.angular-calendar.md#%EF%B8%8F-angular-calendar)-->[angular-calendar](repositories/report.angular-calendar.md#-angular-calendar)

- RECOMMENDED: \[⚠️ 0 💥 19] ALL: \[⚠️ 0 💥 0] [QuickApp](repositories/report.QuickApp.md#%EF%B8%8F-QuickApp)-->[quickapp.client](repositories/report.QuickApp.md#-quickapp.client)

- RECOMMENDED: \[⚠️ 0 💥 16] ALL: \[⚠️ 0 💥 0] [angular-realworld-example-app](repositories/report.angular-realworld-example-app.md#%EF%B8%8F-angular-realworld-example-app)-->[angular-conduit](repositories/report.angular-realworld-example-app.md#-angular-conduit)

- RECOMMENDED: \[⚠️ 0 💥 12] ALL: \[⚠️ 0 💥 0] [Angular-Full-Stack](repositories/report.Angular-Full-Stack.md#%EF%B8%8F-Angular-Full-Stack)-->[angular2-full-stack](repositories/report.Angular-Full-Stack.md#-angular2-full-stack)

- RECOMMENDED: \[⚠️ 0 💥 11] ALL: \[⚠️ 0 💥 0] [angular-ionic-ngxs-movies](repositories/report.angular-ionic-ngxs-movies.md#%EF%B8%8F-angular-ionic-ngxs-movies)-->[angular-ionic-ngxs-movies](repositories/report.angular-ionic-ngxs-movies.md#-angular-ionic-ngxs-movies)

- RECOMMENDED: \[⚠️ 0 💥 06] ALL: \[⚠️ 0 💥 0] [angular-fontawesome](repositories/report.angular-fontawesome.md#%EF%B8%8F-angular-fontawesome)-->[angular-fontawesome](repositories/report.angular-fontawesome.md#-angular-fontawesome)

- RECOMMENDED: \[⚠️ 0 💥 06] ALL: \[⚠️ 0 💥 0] [ngx-toastr](repositories/report.ngx-toastr.md#%EF%B8%8F-ngx-toastr)-->[ngx-toastr](repositories/report.ngx-toastr.md#-ngx-toastr)

- RECOMMENDED: \[⚠️ 0 💥 06] ALL: \[⚠️ 0 💥 0] [mean](repositories/report.mean.md#%EF%B8%8F-mean)-->[mean](repositories/report.mean.md#-mean)

- RECOMMENDED: \[⚠️ 0 💥 04] ALL: \[⚠️ 0 💥 0] [angular-calendar](repositories/report.angular-calendar.md#%EF%B8%8F-angular-calendar)-->[demos](repositories/report.angular-calendar.md#-demos)

- RECOMMENDED: \[⚠️ 0 💥 04] ALL: \[⚠️ 0 💥 0] [angular-fontawesome](repositories/report.angular-fontawesome.md#%EF%B8%8F-angular-fontawesome)-->[demo](repositories/report.angular-fontawesome.md#-demo)

- RECOMMENDED: \[⚠️ 0 💥 04] ALL: \[⚠️ 0 💥 0] [angular-16-crud-example](repositories/report.angular-16-crud-example.md#%EF%B8%8F-angular-16-crud-example)-->[angular-16-crud](repositories/report.angular-16-crud-example.md#-angular-16-crud)

- RECOMMENDED: \[⚠️ 0 💥 04] ALL: \[⚠️ 0 💥 0] [angular-17-crud-example](repositories/report.angular-17-crud-example.md#%EF%B8%8F-angular-17-crud-example)-->[angular-17-crud](repositories/report.angular-17-crud-example.md#-angular-17-crud)

- RECOMMENDED: \[⚠️ 0 💥 03] ALL: \[⚠️ 0 💥 0] [angular-gridster2](repositories/report.angular-gridster2.md#%EF%B8%8F-angular-gridster2)-->[angular-gridster2](repositories/report.angular-gridster2.md#-angular-gridster2)

- RECOMMENDED: \[⚠️ 0 💥 03] ALL: \[⚠️ 0 💥 0] [ngx-quill](repositories/report.ngx-quill.md#%EF%B8%8F-ngx-quill)-->[ngx-quill](repositories/report.ngx-quill.md#-ngx-quill)

- RECOMMENDED: \[⚠️ 0 💥 03] ALL: \[⚠️ 0 💥 0] [gojs-angular-basic](repositories/report.gojs-angular-basic.md#%EF%B8%8F-gojs-angular-basic)-->[first-app](repositories/report.gojs-angular-basic.md#-first-app)

- RECOMMENDED: \[⚠️ 0 💥 02] ALL: \[⚠️ 0 💥 0] [play-scala-angular-seed](repositories/report.play-scala-angular-seed.md#%EF%B8%8F-play-scala-angular-seed)-->[scala-play-angular-seed](repositories/report.play-scala-angular-seed.md#-scala-play-angular-seed)

- RECOMMENDED: \[⚠️ 0 💥 01] ALL: \[⚠️ 0 💥 0] [angular-basics-project](repositories/report.angular-basics-project.md#%EF%B8%8F-angular-basics-project)-->[shopping-cart](repositories/report.angular-basics-project.md#-shopping-cart)

- RECOMMENDED: \[⚠️ 0 💥 01] ALL: \[⚠️ 0 💥 0] [ng-apexcharts](repositories/report.ng-apexcharts.md#%EF%B8%8F-ng-apexcharts)-->[ng-apexcharts-demo](repositories/report.ng-apexcharts.md#-ng-apexcharts-demo)

</details>

<details>
<summary>consistent-component-styles</summary>

- RECOMMENDED: \[⚠️ 0 💥 17] ALL: \[⚠️ 0 💥 0] [angular-calendar](repositories/report.angular-calendar.md#%EF%B8%8F-angular-calendar)-->[demos](repositories/report.angular-calendar.md#-demos)

- RECOMMENDED: \[⚠️ 0 💥 05] ALL: \[⚠️ 0 💥 0] [mean](repositories/report.mean.md#%EF%B8%8F-mean)-->[mean](repositories/report.mean.md#-mean)

- RECOMMENDED: \[⚠️ 0 💥 04] ALL: \[⚠️ 0 💥 0] [angular-16-crud-example](repositories/report.angular-16-crud-example.md#%EF%B8%8F-angular-16-crud-example)-->[angular-16-crud](repositories/report.angular-16-crud-example.md#-angular-16-crud)

- RECOMMENDED: \[⚠️ 0 💥 04] ALL: \[⚠️ 0 💥 0] [Angular-Full-Stack](repositories/report.Angular-Full-Stack.md#%EF%B8%8F-Angular-Full-Stack)-->[angular2-full-stack](repositories/report.Angular-Full-Stack.md#-angular2-full-stack)

- RECOMMENDED: \[⚠️ 0 💥 03] ALL: \[⚠️ 0 💥 0] [angular-gridster2](repositories/report.angular-gridster2.md#%EF%B8%8F-angular-gridster2)-->[angular-gridster2](repositories/report.angular-gridster2.md#-angular-gridster2)

- RECOMMENDED: \[⚠️ 0 💥 03] ALL: \[⚠️ 0 💥 0] [ngx-quill](repositories/report.ngx-quill.md#%EF%B8%8F-ngx-quill)-->[ngx-quill](repositories/report.ngx-quill.md#-ngx-quill)

- RECOMMENDED: \[⚠️ 0 💥 03] ALL: \[⚠️ 0 💥 0] [angular-17-crud-example](repositories/report.angular-17-crud-example.md#%EF%B8%8F-angular-17-crud-example)-->[angular-17-crud](repositories/report.angular-17-crud-example.md#-angular-17-crud)

- RECOMMENDED: \[⚠️ 0 💥 02] ALL: \[⚠️ 0 💥 0] [gojs-angular-basic](repositories/report.gojs-angular-basic.md#%EF%B8%8F-gojs-angular-basic)-->[first-app](repositories/report.gojs-angular-basic.md#-first-app)

- RECOMMENDED: \[⚠️ 0 💥 02] ALL: \[⚠️ 0 💥 0] [play-scala-angular-seed](repositories/report.play-scala-angular-seed.md#%EF%B8%8F-play-scala-angular-seed)-->[scala-play-angular-seed](repositories/report.play-scala-angular-seed.md#-scala-play-angular-seed)

- RECOMMENDED: \[⚠️ 0 💥 01] ALL: \[⚠️ 0 💥 0] [angular-calendar](repositories/report.angular-calendar.md#%EF%B8%8F-angular-calendar)-->[angular-calendar](repositories/report.angular-calendar.md#-angular-calendar)

- RECOMMENDED: \[⚠️ 0 💥 01] ALL: \[⚠️ 0 💥 0] [angular-fontawesome](repositories/report.angular-fontawesome.md#%EF%B8%8F-angular-fontawesome)-->[demo](repositories/report.angular-fontawesome.md#-demo)

- RECOMMENDED: \[⚠️ 0 💥 01] ALL: \[⚠️ 0 💥 0] [angular-basics-project](repositories/report.angular-basics-project.md#%EF%B8%8F-angular-basics-project)-->[shopping-cart](repositories/report.angular-basics-project.md#-shopping-cart)

- RECOMMENDED: \[⚠️ 0 💥 01] ALL: \[⚠️ 0 💥 0] [angular-realworld-example-app](repositories/report.angular-realworld-example-app.md#%EF%B8%8F-angular-realworld-example-app)-->[angular-conduit](repositories/report.angular-realworld-example-app.md#-angular-conduit)

- RECOMMENDED: \[⚠️ 0 💥 01] ALL: \[⚠️ 0 💥 0] [ng-apexcharts](repositories/report.ng-apexcharts.md#%EF%B8%8F-ng-apexcharts)-->[ng-apexcharts-demo](repositories/report.ng-apexcharts.md#-ng-apexcharts-demo)

</details>

<details>
<summary>use-component-view-encapsulation</summary>

- RECOMMENDED: \[⚠️ 0 💥 25] ALL: \[⚠️ 0 💥 0] [angular-gridster2](repositories/report.angular-gridster2.md#%EF%B8%8F-angular-gridster2)-->[gridster-app](repositories/report.angular-gridster2.md#-gridster-app)

- RECOMMENDED: \[⚠️ 0 💥 12] ALL: \[⚠️ 0 💥 0] [angular-calendar](repositories/report.angular-calendar.md#%EF%B8%8F-angular-calendar)-->[demos](repositories/report.angular-calendar.md#-demos)

- RECOMMENDED: \[⚠️ 0 💥 10] ALL: \[⚠️ 0 💥 0] [angular-ionic-ngxs-movies](repositories/report.angular-ionic-ngxs-movies.md#%EF%B8%8F-angular-ionic-ngxs-movies)-->[angular-ionic-ngxs-movies](repositories/report.angular-ionic-ngxs-movies.md#-angular-ionic-ngxs-movies)

- RECOMMENDED: \[⚠️ 0 💥 07] ALL: \[⚠️ 0 💥 0] [ng-three-template](repositories/report.ng-three-template.md#%EF%B8%8F-ng-three-template)-->[ng-three-template](repositories/report.ng-three-template.md#-ng-three-template)

- RECOMMENDED: \[⚠️ 0 💥 03] ALL: \[⚠️ 0 💥 0] [angular-gridster2](repositories/report.angular-gridster2.md#%EF%B8%8F-angular-gridster2)-->[angular-gridster2](repositories/report.angular-gridster2.md#-angular-gridster2)

- RECOMMENDED: \[⚠️ 0 💥 02] ALL: \[⚠️ 0 💥 0] [ngx-quill](repositories/report.ngx-quill.md#%EF%B8%8F-ngx-quill)-->[ngx-quill](repositories/report.ngx-quill.md#-ngx-quill)

</details>

<details>
<summary>prefer-signals</summary>

- RECOMMENDED: \[⚠️ 0 💥 149] ALL: \[⚠️ 0 💥 0] [angular-calendar](repositories/report.angular-calendar.md#%EF%B8%8F-angular-calendar)-->[angular-calendar](repositories/report.angular-calendar.md#-angular-calendar)

- RECOMMENDED: \[⚠️ 0 💥 037] ALL: \[⚠️ 0 💥 0] [angular-fontawesome](repositories/report.angular-fontawesome.md#%EF%B8%8F-angular-fontawesome)-->[angular-fontawesome](repositories/report.angular-fontawesome.md#-angular-fontawesome)

- RECOMMENDED: \[⚠️ 0 💥 009] ALL: \[⚠️ 0 💥 0] [angular-realworld-example-app](repositories/report.angular-realworld-example-app.md#%EF%B8%8F-angular-realworld-example-app)-->[angular-conduit](repositories/report.angular-realworld-example-app.md#-angular-conduit)

- RECOMMENDED: \[⚠️ 0 💥 007] ALL: \[⚠️ 0 💥 0] [angular-calendar](repositories/report.angular-calendar.md#%EF%B8%8F-angular-calendar)-->[demos](repositories/report.angular-calendar.md#-demos)

- RECOMMENDED: \[⚠️ 0 💥 005] ALL: \[⚠️ 0 💥 0] [gojs-angular-basic](repositories/report.gojs-angular-basic.md#%EF%B8%8F-gojs-angular-basic)-->[first-app](repositories/report.gojs-angular-basic.md#-first-app)

- RECOMMENDED: \[⚠️ 0 💥 003] ALL: \[⚠️ 0 💥 0] [Angular-Full-Stack](repositories/report.Angular-Full-Stack.md#%EF%B8%8F-Angular-Full-Stack)-->[angular2-full-stack](repositories/report.Angular-Full-Stack.md#-angular2-full-stack)

- RECOMMENDED: \[⚠️ 0 💥 002] ALL: \[⚠️ 0 💥 0] [ngx-quill](repositories/report.ngx-quill.md#%EF%B8%8F-ngx-quill)-->[ngx-quill](repositories/report.ngx-quill.md#-ngx-quill)

- RECOMMENDED: \[⚠️ 0 💥 002] ALL: \[⚠️ 0 💥 0] [angular-16-crud-example](repositories/report.angular-16-crud-example.md#%EF%B8%8F-angular-16-crud-example)-->[angular-16-crud](repositories/report.angular-16-crud-example.md#-angular-16-crud)

- RECOMMENDED: \[⚠️ 0 💥 002] ALL: \[⚠️ 0 💥 0] [angular-17-crud-example](repositories/report.angular-17-crud-example.md#%EF%B8%8F-angular-17-crud-example)-->[angular-17-crud](repositories/report.angular-17-crud-example.md#-angular-17-crud)

- RECOMMENDED: \[⚠️ 0 💥 001] ALL: \[⚠️ 0 💥 0] [mean](repositories/report.mean.md#%EF%B8%8F-mean)-->[mean](repositories/report.mean.md#-mean)

- RECOMMENDED: \[⚠️ 0 💥 001] ALL: \[⚠️ 0 💥 0] [ng-apexcharts](repositories/report.ng-apexcharts.md#%EF%B8%8F-ng-apexcharts)-->[ng-apexcharts-demo](repositories/report.ng-apexcharts.md#-ng-apexcharts-demo)

- RECOMMENDED: \[⚠️ 0 💥 001] ALL: \[⚠️ 0 💥 0] [ng-three-template](repositories/report.ng-three-template.md#%EF%B8%8F-ng-three-template)-->[ng-three-template](repositories/report.ng-three-template.md#-ng-three-template)

</details>

<details>
<summary>relative-url-prefix</summary>

- RECOMMENDED: \[⚠️ 0 💥 43] ALL: \[⚠️ 0 💥 0] [angular-calendar](repositories/report.angular-calendar.md#%EF%B8%8F-angular-calendar)-->[demos](repositories/report.angular-calendar.md#-demos)

- RECOMMENDED: \[⚠️ 0 💥 07] ALL: \[⚠️ 0 💥 0] [angular-ionic-ngxs-movies](repositories/report.angular-ionic-ngxs-movies.md#%EF%B8%8F-angular-ionic-ngxs-movies)-->[angular-ionic-ngxs-movies](repositories/report.angular-ionic-ngxs-movies.md#-angular-ionic-ngxs-movies)

</details>

<details>
<summary>component-max-inline-declarations</summary>

- RECOMMENDED: \[⚠️ 0 💥 17] ALL: \[⚠️ 0 💥 0] [angular-calendar](repositories/report.angular-calendar.md#%EF%B8%8F-angular-calendar)-->[angular-calendar](repositories/report.angular-calendar.md#-angular-calendar)

- RECOMMENDED: \[⚠️ 0 💥 11] ALL: \[⚠️ 0 💥 0] [angular-calendar](repositories/report.angular-calendar.md#%EF%B8%8F-angular-calendar)-->[demos](repositories/report.angular-calendar.md#-demos)

- RECOMMENDED: \[⚠️ 0 💥 11] ALL: \[⚠️ 0 💥 0] [ngx-toastr](repositories/report.ngx-toastr.md#%EF%B8%8F-ngx-toastr)-->[ngx-toastr](repositories/report.ngx-toastr.md#-ngx-toastr)

- RECOMMENDED: \[⚠️ 0 💥 06] ALL: \[⚠️ 0 💥 0] [angular-realworld-example-app](repositories/report.angular-realworld-example-app.md#%EF%B8%8F-angular-realworld-example-app)-->[angular-conduit](repositories/report.angular-realworld-example-app.md#-angular-conduit)

- RECOMMENDED: \[⚠️ 0 💥 02] ALL: \[⚠️ 0 💥 0] [ngx-quill](repositories/report.ngx-quill.md#%EF%B8%8F-ngx-quill)-->[ngx-quill](repositories/report.ngx-quill.md#-ngx-quill)

</details>

<details>
<summary>use-injectable-provided-in</summary>

- RECOMMENDED: \[⚠️ 0 💥 7] ALL: \[⚠️ 0 💥 0] [angular-calendar](repositories/report.angular-calendar.md#%EF%B8%8F-angular-calendar)-->[demos](repositories/report.angular-calendar.md#-demos)

- RECOMMENDED: \[⚠️ 0 💥 7] ALL: \[⚠️ 0 💥 0] [QuickApp](repositories/report.QuickApp.md#%EF%B8%8F-QuickApp)-->[quickapp.client](repositories/report.QuickApp.md#-quickapp.client)

- RECOMMENDED: \[⚠️ 0 💥 6] ALL: \[⚠️ 0 💥 0] [angular-calendar](repositories/report.angular-calendar.md#%EF%B8%8F-angular-calendar)-->[angular-calendar](repositories/report.angular-calendar.md#-angular-calendar)

- RECOMMENDED: \[⚠️ 0 💥 5] ALL: \[⚠️ 0 💥 0] [Angular-Full-Stack](repositories/report.Angular-Full-Stack.md#%EF%B8%8F-Angular-Full-Stack)-->[angular2-full-stack](repositories/report.Angular-Full-Stack.md#-angular2-full-stack)

- RECOMMENDED: \[⚠️ 0 💥 4] ALL: \[⚠️ 0 💥 0] [angular-ionic-ngxs-movies](repositories/report.angular-ionic-ngxs-movies.md#%EF%B8%8F-angular-ionic-ngxs-movies)-->[angular-ionic-ngxs-movies](repositories/report.angular-ionic-ngxs-movies.md#-angular-ionic-ngxs-movies)

- RECOMMENDED: \[⚠️ 0 💥 1] ALL: \[⚠️ 0 💥 0] [mean](repositories/report.mean.md#%EF%B8%8F-mean)-->[mean](repositories/report.mean.md#-mean)

- RECOMMENDED: \[⚠️ 0 💥 1] ALL: \[⚠️ 0 💥 0] [play-scala-angular-seed](repositories/report.play-scala-angular-seed.md#%EF%B8%8F-play-scala-angular-seed)-->[scala-play-angular-seed](repositories/report.play-scala-angular-seed.md#-scala-play-angular-seed)

</details>

<details>
<summary>prefer-output-readonly</summary>

- RECOMMENDED: \[⚠️ 0 💥 26] ALL: \[⚠️ 0 💥 0] [angular-calendar](repositories/report.angular-calendar.md#%EF%B8%8F-angular-calendar)-->[angular-calendar](repositories/report.angular-calendar.md#-angular-calendar)

- RECOMMENDED: \[⚠️ 0 💥 09] ALL: \[⚠️ 0 💥 0] [ngx-quill](repositories/report.ngx-quill.md#%EF%B8%8F-ngx-quill)-->[ngx-quill](repositories/report.ngx-quill.md#-ngx-quill)

- RECOMMENDED: \[⚠️ 0 💥 03] ALL: \[⚠️ 0 💥 0] [angular-calendar](repositories/report.angular-calendar.md#%EF%B8%8F-angular-calendar)-->[demos](repositories/report.angular-calendar.md#-demos)

- RECOMMENDED: \[⚠️ 0 💥 03] ALL: \[⚠️ 0 💥 0] [angular-gridster2](repositories/report.angular-gridster2.md#%EF%B8%8F-angular-gridster2)-->[angular-gridster2](repositories/report.angular-gridster2.md#-angular-gridster2)

- RECOMMENDED: \[⚠️ 0 💥 03] ALL: \[⚠️ 0 💥 0] [angular-realworld-example-app](repositories/report.angular-realworld-example-app.md#%EF%B8%8F-angular-realworld-example-app)-->[angular-conduit](repositories/report.angular-realworld-example-app.md#-angular-conduit)

- RECOMMENDED: \[⚠️ 0 💥 02] ALL: \[⚠️ 0 💥 0] [gojs-angular-basic](repositories/report.gojs-angular-basic.md#%EF%B8%8F-gojs-angular-basic)-->[first-app](repositories/report.gojs-angular-basic.md#-first-app)

</details>

<details>
<summary>use-component-selector</summary>

- RECOMMENDED: \[⚠️ 0 💥 6] ALL: \[⚠️ 0 💥 0] [angular-calendar](repositories/report.angular-calendar.md#%EF%B8%8F-angular-calendar)-->[angular-calendar](repositories/report.angular-calendar.md#-angular-calendar)

</details>

<details>
<summary>no-host-metadata-property</summary>

- RECOMMENDED: \[⚠️ 0 💥 1] ALL: \[⚠️ 0 💥 1] [angular-calendar](repositories/report.angular-calendar.md#%EF%B8%8F-angular-calendar)-->[angular-calendar](repositories/report.angular-calendar.md#-angular-calendar)

</details>

<details>
<summary>sort-lifecycle-methods</summary>

- RECOMMENDED: \[⚠️ 0 💥 3] ALL: \[⚠️ 0 💥 0] [angular-calendar](repositories/report.angular-calendar.md#%EF%B8%8F-angular-calendar)-->[angular-calendar](repositories/report.angular-calendar.md#-angular-calendar)

- RECOMMENDED: \[⚠️ 0 💥 2] ALL: \[⚠️ 0 💥 0] [angular-fontawesome](repositories/report.angular-fontawesome.md#%EF%B8%8F-angular-fontawesome)-->[angular-fontawesome](repositories/report.angular-fontawesome.md#-angular-fontawesome)

- RECOMMENDED: \[⚠️ 0 💥 2] ALL: \[⚠️ 0 💥 0] [angular-gridster2](repositories/report.angular-gridster2.md#%EF%B8%8F-angular-gridster2)-->[angular-gridster2](repositories/report.angular-gridster2.md#-angular-gridster2)

</details>

<details>
<summary>no-lifecycle-call</summary>

- RECOMMENDED: \[⚠️ 0 💥 1] ALL: \[⚠️ 0 💥 0] [angular-fontawesome](repositories/report.angular-fontawesome.md#%EF%B8%8F-angular-fontawesome)-->[angular-fontawesome](repositories/report.angular-fontawesome.md#-angular-fontawesome)

</details>

<details>
<summary>no-output-on-prefix</summary>

- RECOMMENDED: \[⚠️ 0 💥 9] ALL: \[⚠️ 0 💥 9] [ngx-quill](repositories/report.ngx-quill.md#%EF%B8%8F-ngx-quill)-->[ngx-quill](repositories/report.ngx-quill.md#-ngx-quill)

- RECOMMENDED: \[⚠️ 0 💥 2] ALL: \[⚠️ 0 💥 2] [gojs-angular-basic](repositories/report.gojs-angular-basic.md#%EF%B8%8F-gojs-angular-basic)-->[first-app](repositories/report.gojs-angular-basic.md#-first-app)

</details>

<details>
<summary>no-forward-ref</summary>

- RECOMMENDED: \[⚠️ 0 💥 2] ALL: \[⚠️ 0 💥 0] [ngx-quill](repositories/report.ngx-quill.md#%EF%B8%8F-ngx-quill)-->[ngx-quill](repositories/report.ngx-quill.md#-ngx-quill)

- RECOMMENDED: \[⚠️ 0 💥 1] ALL: \[⚠️ 0 💥 0] [QuickApp](repositories/report.QuickApp.md#%EF%B8%8F-QuickApp)-->[quickapp.client](repositories/report.QuickApp.md#-quickapp.client)

</details>

<details>
<summary>component-selector</summary>

- RECOMMENDED: \[⚠️ 0 💥 3] ALL: \[⚠️ 0 💥 3] [ngx-quill](repositories/report.ngx-quill.md#%EF%B8%8F-ngx-quill)-->[ngx-quill](repositories/report.ngx-quill.md#-ngx-quill)

</details>

<details>
<summary>sort-ngmodule-metadata-arrays</summary>

- RECOMMENDED: \[⚠️ 0 💥 6] ALL: \[⚠️ 0 💥 0] [angular-ionic-ngxs-movies](repositories/report.angular-ionic-ngxs-movies.md#%EF%B8%8F-angular-ionic-ngxs-movies)-->[angular-ionic-ngxs-movies](repositories/report.angular-ionic-ngxs-movies.md#-angular-ionic-ngxs-movies)

- RECOMMENDED: \[⚠️ 0 💥 3] ALL: \[⚠️ 0 💥 0] [ngx-toastr](repositories/report.ngx-toastr.md#%EF%B8%8F-ngx-toastr)-->[ngx-toastr](repositories/report.ngx-toastr.md#-ngx-toastr)

</details>

<details>
<summary>component-class-suffix</summary>

- RECOMMENDED: \[⚠️ 0 💥 5] ALL: \[⚠️ 0 💥 5] [ngx-toastr](repositories/report.ngx-toastr.md#%EF%B8%8F-ngx-toastr)-->[ngx-toastr](repositories/report.ngx-toastr.md#-ngx-toastr)

</details>

<details>
<summary>runtime-localize</summary>

- RECOMMENDED: \[⚠️ 0 💥 21] ALL: \[⚠️ 0 💥 0] [angular-example-app](repositories/report.angular-example-app.md#%EF%B8%8F-angular-example-app)-->[angularexampleapp](repositories/report.angular-example-app.md#-angularexampleapp)

</details>

<details>
<summary>prefer-standalone</summary>

- RECOMMENDED: \[⚠️ 0 💥 12] ALL: \[⚠️ 0 💥 12] [Angular-Full-Stack](repositories/report.Angular-Full-Stack.md#%EF%B8%8F-Angular-Full-Stack)-->[angular2-full-stack](repositories/report.Angular-Full-Stack.md#-angular2-full-stack)

</details>

<details>
<summary>prefer-standalone-component</summary>

- RECOMMENDED: \[⚠️ 0 💥 11] ALL: \[⚠️ 0 💥 0] [angular-ionic-ngxs-movies](repositories/report.angular-ionic-ngxs-movies.md#%EF%B8%8F-angular-ionic-ngxs-movies)-->[angular-ionic-ngxs-movies](repositories/report.angular-ionic-ngxs-movies.md#-angular-ionic-ngxs-movies)

</details>

<details>
<summary>directive-selector</summary>

- RECOMMENDED: \[⚠️ 0 💥 1] ALL: \[⚠️ 0 💥 1] [angular-realworld-example-app](repositories/report.angular-realworld-example-app.md#%EF%B8%8F-angular-realworld-example-app)-->[angular-conduit](repositories/report.angular-realworld-example-app.md#-angular-conduit)

</details>

<details>
<summary>no-output-native</summary>

- RECOMMENDED: \[⚠️ 0 💥 2] ALL: \[⚠️ 0 💥 2] [angular-realworld-example-app](repositories/report.angular-realworld-example-app.md#%EF%B8%8F-angular-realworld-example-app)-->[angular-conduit](repositories/report.angular-realworld-example-app.md#-angular-conduit)

</details>

<details>
<summary>no-duplicates-in-metadata-arrays</summary>

- RECOMMENDED: \[⚠️ 0 💥 1] ALL: \[⚠️ 0 💥 0] [angular-realworld-example-app](repositories/report.angular-realworld-example-app.md#%EF%B8%8F-angular-realworld-example-app)-->[angular-conduit](repositories/report.angular-realworld-example-app.md#-angular-conduit)

</details>

<details>
<summary>use-lifecycle-interface</summary>

- RECOMMENDED: \[⚠️ 0 💥 1] ALL: \[⚠️ 1 💥 0] [gojs-angular-basic](repositories/report.gojs-angular-basic.md#%EF%B8%8F-gojs-angular-basic)-->[first-app](repositories/report.gojs-angular-basic.md#-first-app)

</details>

<details>
<summary>no-empty-lifecycle-method</summary>

- RECOMMENDED: \[⚠️ 0 💥 5] ALL: \[⚠️ 0 💥 5] [ng-three-template](repositories/report.ng-three-template.md#%EF%B8%8F-ng-three-template)-->[ng-three-template](repositories/report.ng-three-template.md#-ng-three-template)

</details>



