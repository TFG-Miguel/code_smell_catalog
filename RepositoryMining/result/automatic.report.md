# 📑 `@angular-eslint@19.3.0` Rules Analysis Report

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

- [Repositories Navigation Index](#repositories-navigation-index)
- [Global Summary](#global-summary)
	- [All Rules](#all-rules)
	- [Rules Important to us](#rules-important-to-us)
- [Rules by Repository](#rules-by-repository)
	- [Detailed Rules](#detailed-rules)
	- [Catalog](#catalog)
</details>

## Repositories Navigation Index

- [angular-16-crud-example](../result/report.angular-16-crud-example.md)
- [angular-17-crud-example](../result/report.angular-17-crud-example.md)
- [angular-basics-project](../result/report.angular-basics-project.md)
- [angular-calendar](../result/report.angular-calendar.md)
- [angular-example-app](../result/report.angular-example-app.md)
- [angular-fontawesome](../result/report.angular-fontawesome.md)
- [Angular-Full-Stack](../result/report.Angular-Full-Stack.md)
- [angular-gridster2](../result/report.angular-gridster2.md)
- [angular-ionic-ngxs-movies](../result/report.angular-ionic-ngxs-movies.md)
- [angular-realworld-example-app](../result/report.angular-realworld-example-app.md)
- [gojs-angular-basic](../result/report.gojs-angular-basic.md)
- [mean](../result/report.mean.md)
- [ng-apexcharts](../result/report.ng-apexcharts.md)
- [ng-three-template](../result/report.ng-three-template.md)
- [ngx-quill](../result/report.ngx-quill.md)
- [ngx-toastr](../result/report.ngx-toastr.md)
- [play-scala-angular-seed](../result/report.play-scala-angular-seed.md)
- [QuickApp](../result/report.QuickApp.md)

## Global Summary

### All Rules

| 📏 Rule | 📚 | 📄 | 🧪 | Recommended<br>⚠️ Warnings | Recommended<br>⚠️ Warnings<br>Fixables | Recommended<br>⚠️ Warnings<br>With Suggestions | Recommended<br>💥 Errors | Recommended<br>💥 Errors<br>Fixables | Recommended<br>💥 Errors<br>With Suggestions | All<br>⚠️ Warnings | All<br>⚠️ Warnings<br>Fixables | All<br>⚠️ Warnings<br>With Suggestions | All<br>💥 Errors | All<br>💥 Errors<br>Fixables | All<br>💥 Errors<br>With Suggestions | 🔧 | ✅ | 💡 |
| --- | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| `prefer-on-push-component-change-detection` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-on-push-component-change-detection.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-on-push-component-change-detection.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-on-push-component-change-detection) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 125 | 0 | 125 |  |  | 💡 |
| `consistent-component-styles` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-component-styles.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/consistent-component-styles.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/consistent-component-styles) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 48 | 48 | 0 | 🔧 |  |  |
| `prefer-signals` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-signals.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-signals.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-signals) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 219 | 0 | 2 | 🔧 |  |  |
| `no-host-metadata-property` | ❌ | ❌ | ❌ | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | ❌ | ❌ | ❌ |
| `use-component-view-encapsulation` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/use-component-view-encapsulation.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/use-component-view-encapsulation.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/use-component-view-encapsulation) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 59 | 0 | 59 |  |  | 💡 |
| `relative-url-prefix` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/relative-url-prefix.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/relative-url-prefix.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/relative-url-prefix) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 |  |  |  |
| `component-max-inline-declarations` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/component-max-inline-declarations.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/component-max-inline-declarations.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/component-max-inline-declarations) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 47 | 0 | 0 |  |  |  |
| `use-injectable-provided-in` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/use-injectable-provided-in.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/use-injectable-provided-in.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/use-injectable-provided-in) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 31 | 0 | 31 |  |  | 💡 |
| `prefer-output-readonly` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-output-readonly.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-output-readonly.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-output-readonly) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 46 | 0 | 46 |  |  | 💡 |
| `use-component-selector` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/use-component-selector.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/use-component-selector.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/use-component-selector) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 6 | 0 | 0 |  |  |  |
| `sort-lifecycle-methods` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/sort-lifecycle-methods.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/sort-lifecycle-methods.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/sort-lifecycle-methods) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 7 | 0 | 0 |  |  |  |
| `runtime-localize` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/runtime-localize.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/runtime-localize.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/runtime-localize) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 21 | 0 | 0 |  |  |  |
| `no-lifecycle-call` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/no-lifecycle-call.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/no-lifecycle-call.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/no-lifecycle-call) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |  |  |  |
| `prefer-standalone` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-standalone.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-standalone.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-standalone) | 0 | 0 | 0 | 12 | 12 | 0 | 0 | 0 | 0 | 12 | 12 | 0 | 🔧 | ✅ |  |
| `prefer-standalone-component` | ❌ | ❌ | ❌ | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 11 | 11 | 0 | ❌ | ❌ | ❌ |
| `sort-ngmodule-metadata-arrays` | ❌ | ❌ | ❌ | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 9 | 9 | 0 | ❌ | ❌ | ❌ |
| `directive-selector` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/directive-selector.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/directive-selector.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/directive-selector) | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |  |  |  |
| `no-output-native` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/no-output-native.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/no-output-native.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/no-output-native) | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |  | ✅ |  |
| `no-duplicates-in-metadata-arrays` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/no-duplicates-in-metadata-arrays.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/no-duplicates-in-metadata-arrays.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/no-duplicates-in-metadata-arrays) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |  |  |  |
| `use-lifecycle-interface` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/use-lifecycle-interface.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/use-lifecycle-interface.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/use-lifecycle-interface) | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 0 | 🔧 |  |  |
| `no-output-on-prefix` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/no-output-on-prefix.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/no-output-on-prefix.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/no-output-on-prefix) | 0 | 0 | 0 | 11 | 0 | 0 | 0 | 0 | 0 | 11 | 0 | 0 |  | ✅ |  |
| `no-empty-lifecycle-method` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/no-empty-lifecycle-method.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/no-empty-lifecycle-method.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/no-empty-lifecycle-method) | 0 | 0 | 0 | 5 | 0 | 5 | 0 | 0 | 0 | 5 | 0 | 5 |  | ✅ | 💡 |
| `component-selector` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/component-selector.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/component-selector.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/component-selector) | 0 | 0 | 0 | 3 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 0 |  |  |  |
| `no-forward-ref` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/no-forward-ref.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/no-forward-ref.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/no-forward-ref) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 0 |  |  |  |
| `component-class-suffix` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/component-class-suffix.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/component-class-suffix.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/component-class-suffix) | 0 | 0 | 0 | 5 | 0 | 0 | 0 | 0 | 0 | 5 | 0 | 0 |  | ✅ |  |



### Rules Important to us

| 📏 Rule | 📚 | 📄 | 🧪 | Recommended<br>⚠️ Warnings | Recommended<br>💥 Errors | All<br>⚠️ Warnings | All<br>💥 Errors | 🔧 | ✅ | 💡 |
| --- | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| `prefer-on-push-component-change-detection` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-on-push-component-change-detection.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-on-push-component-change-detection.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-on-push-component-change-detection) | 0 | 0 | 0 | 125 |  |  | 💡 |
| `use-component-view-encapsulation` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/use-component-view-encapsulation.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/use-component-view-encapsulation.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/use-component-view-encapsulation) | 0 | 0 | 0 | 59 |  |  | 💡 |
| `relative-url-prefix` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/relative-url-prefix.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/relative-url-prefix.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/relative-url-prefix) | 0 | 0 | 0 | 50 |  |  |  |
| `component-max-inline-declarations` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/component-max-inline-declarations.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/component-max-inline-declarations.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/component-max-inline-declarations) | 0 | 0 | 0 | 47 |  |  |  |
| `use-injectable-provided-in` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/use-injectable-provided-in.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/use-injectable-provided-in.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/use-injectable-provided-in) | 0 | 0 | 0 | 31 |  |  | 💡 |
| `prefer-output-readonly` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-output-readonly.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-output-readonly.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-output-readonly) | 0 | 0 | 0 | 46 |  |  | 💡 |
| `use-component-selector` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/use-component-selector.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/use-component-selector.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/use-component-selector) | 0 | 0 | 0 | 6 |  |  |  |
| `sort-lifecycle-methods` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/sort-lifecycle-methods.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/sort-lifecycle-methods.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/sort-lifecycle-methods) | 0 | 0 | 0 | 7 |  |  |  |
| `runtime-localize` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/runtime-localize.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/runtime-localize.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/runtime-localize) | 0 | 0 | 0 | 21 |  |  |  |
| `no-lifecycle-call` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/no-lifecycle-call.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/no-lifecycle-call.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/no-lifecycle-call) | 0 | 0 | 0 | 1 |  |  |  |
| `directive-selector` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/directive-selector.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/directive-selector.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/directive-selector) | 0 | 1 | 0 | 1 |  |  |  |
| `no-output-native` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/no-output-native.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/no-output-native.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/no-output-native) | 0 | 2 | 0 | 2 |  | ✅ |  |
| `no-duplicates-in-metadata-arrays` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/no-duplicates-in-metadata-arrays.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/no-duplicates-in-metadata-arrays.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/no-duplicates-in-metadata-arrays) | 0 | 0 | 0 | 1 |  |  |  |
| `no-output-on-prefix` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/no-output-on-prefix.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/no-output-on-prefix.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/no-output-on-prefix) | 0 | 11 | 0 | 11 |  | ✅ |  |
| `no-empty-lifecycle-method` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/no-empty-lifecycle-method.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/no-empty-lifecycle-method.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/no-empty-lifecycle-method) | 0 | 5 | 0 | 5 |  | ✅ | 💡 |
| `component-selector` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/component-selector.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/component-selector.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/component-selector) | 0 | 3 | 0 | 3 |  |  |  |
| `no-forward-ref` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/no-forward-ref.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/no-forward-ref.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/no-forward-ref) | 0 | 0 | 0 | 3 |  |  |  |
| `component-class-suffix` | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/component-class-suffix.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/component-class-suffix.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/component-class-suffix) | 0 | 5 | 0 | 5 |  | ✅ |  |



## Rules by Repository

### Detailed Rules

<details>
<summary>prefer-signals (projects: 12, matches: 219) 🔧</summary>

| Repository | Project | Recommended<br>⚠️ Warnings | Recommended<br>💥 Errors | All<br>⚠️ Warnings | All<br>💥 Errors |
|---|---|:--:|:--:|:--:|:--:|
| [angular-calendar](repositories/report.angular-calendar.md#%EF%B8%8F-angular-calendar) | [angular-calendar](repositories/report.angular-calendar.md#-angular-calendar) | 0 | 0 | 0 | 149 |
| [angular-fontawesome](repositories/report.angular-fontawesome.md#%EF%B8%8F-angular-fontawesome) | [angular-fontawesome](repositories/report.angular-fontawesome.md#-angular-fontawesome) | 0 | 0 | 0 | 37 |
| [angular-realworld-example-app](repositories/report.angular-realworld-example-app.md#%EF%B8%8F-angular-realworld-example-app) | [angular-conduit](repositories/report.angular-realworld-example-app.md#-angular-conduit) | 0 | 0 | 0 | 9 |
| [angular-calendar](repositories/report.angular-calendar.md#%EF%B8%8F-angular-calendar) | [demos](repositories/report.angular-calendar.md#-demos) | 0 | 0 | 0 | 7 |
| [gojs-angular-basic](repositories/report.gojs-angular-basic.md#%EF%B8%8F-gojs-angular-basic) | [first-app](repositories/report.gojs-angular-basic.md#-first-app) | 0 | 0 | 0 | 5 |
| [Angular-Full-Stack](repositories/report.Angular-Full-Stack.md#%EF%B8%8F-Angular-Full-Stack) | [angular2-full-stack](repositories/report.Angular-Full-Stack.md#-angular2-full-stack) | 0 | 0 | 0 | 3 |
| [angular-16-crud-example](repositories/report.angular-16-crud-example.md#%EF%B8%8F-angular-16-crud-example) | [angular-16-crud](repositories/report.angular-16-crud-example.md#-angular-16-crud) | 0 | 0 | 0 | 2 |
| [angular-17-crud-example](repositories/report.angular-17-crud-example.md#%EF%B8%8F-angular-17-crud-example) | [angular-17-crud](repositories/report.angular-17-crud-example.md#-angular-17-crud) | 0 | 0 | 0 | 2 |
| [ngx-quill](repositories/report.ngx-quill.md#%EF%B8%8F-ngx-quill) | [ngx-quill](repositories/report.ngx-quill.md#-ngx-quill) | 0 | 0 | 0 | 2 |
| [mean](repositories/report.mean.md#%EF%B8%8F-mean) | [mean](repositories/report.mean.md#-mean) | 0 | 0 | 0 | 1 |
| [ng-apexcharts](repositories/report.ng-apexcharts.md#%EF%B8%8F-ng-apexcharts) | [ng-apexcharts-demo](repositories/report.ng-apexcharts.md#-ng-apexcharts-demo) | 0 | 0 | 0 | 1 |
| [ng-three-template](repositories/report.ng-three-template.md#%EF%B8%8F-ng-three-template) | [ng-three-template](repositories/report.ng-three-template.md#-ng-three-template) | 0 | 0 | 0 | 1 |

</details>

<details>
<summary>prefer-on-push-component-change-detection (projects: 18, matches: 125) 💡</summary>

| Repository | Project | Recommended<br>⚠️ Warnings | Recommended<br>💥 Errors | All<br>⚠️ Warnings | All<br>💥 Errors |
|---|---|:--:|:--:|:--:|:--:|
| [angular-calendar](repositories/report.angular-calendar.md#%EF%B8%8F-angular-calendar) | [angular-calendar](repositories/report.angular-calendar.md#-angular-calendar) | 0 | 0 | 0 | 20 |
| [QuickApp](repositories/report.QuickApp.md#%EF%B8%8F-QuickApp) | [quickapp.client](repositories/report.QuickApp.md#-quickapp.client) | 0 | 0 | 0 | 19 |
| [angular-realworld-example-app](repositories/report.angular-realworld-example-app.md#%EF%B8%8F-angular-realworld-example-app) | [angular-conduit](repositories/report.angular-realworld-example-app.md#-angular-conduit) | 0 | 0 | 0 | 16 |
| [Angular-Full-Stack](repositories/report.Angular-Full-Stack.md#%EF%B8%8F-Angular-Full-Stack) | [angular2-full-stack](repositories/report.Angular-Full-Stack.md#-angular2-full-stack) | 0 | 0 | 0 | 12 |
| [angular-ionic-ngxs-movies](repositories/report.angular-ionic-ngxs-movies.md#%EF%B8%8F-angular-ionic-ngxs-movies) | [angular-ionic-ngxs-movies](repositories/report.angular-ionic-ngxs-movies.md#-angular-ionic-ngxs-movies) | 0 | 0 | 0 | 11 |
| [angular-fontawesome](repositories/report.angular-fontawesome.md#%EF%B8%8F-angular-fontawesome) | [angular-fontawesome](repositories/report.angular-fontawesome.md#-angular-fontawesome) | 0 | 0 | 0 | 6 |
| [mean](repositories/report.mean.md#%EF%B8%8F-mean) | [mean](repositories/report.mean.md#-mean) | 0 | 0 | 0 | 6 |
| [ngx-toastr](repositories/report.ngx-toastr.md#%EF%B8%8F-ngx-toastr) | [ngx-toastr](repositories/report.ngx-toastr.md#-ngx-toastr) | 0 | 0 | 0 | 6 |
| [angular-16-crud-example](repositories/report.angular-16-crud-example.md#%EF%B8%8F-angular-16-crud-example) | [angular-16-crud](repositories/report.angular-16-crud-example.md#-angular-16-crud) | 0 | 0 | 0 | 4 |
| [angular-17-crud-example](repositories/report.angular-17-crud-example.md#%EF%B8%8F-angular-17-crud-example) | [angular-17-crud](repositories/report.angular-17-crud-example.md#-angular-17-crud) | 0 | 0 | 0 | 4 |
| [angular-calendar](repositories/report.angular-calendar.md#%EF%B8%8F-angular-calendar) | [demos](repositories/report.angular-calendar.md#-demos) | 0 | 0 | 0 | 4 |
| [angular-fontawesome](repositories/report.angular-fontawesome.md#%EF%B8%8F-angular-fontawesome) | [demo](repositories/report.angular-fontawesome.md#-demo) | 0 | 0 | 0 | 4 |
| [angular-gridster2](repositories/report.angular-gridster2.md#%EF%B8%8F-angular-gridster2) | [angular-gridster2](repositories/report.angular-gridster2.md#-angular-gridster2) | 0 | 0 | 0 | 3 |
| [gojs-angular-basic](repositories/report.gojs-angular-basic.md#%EF%B8%8F-gojs-angular-basic) | [first-app](repositories/report.gojs-angular-basic.md#-first-app) | 0 | 0 | 0 | 3 |
| [ngx-quill](repositories/report.ngx-quill.md#%EF%B8%8F-ngx-quill) | [ngx-quill](repositories/report.ngx-quill.md#-ngx-quill) | 0 | 0 | 0 | 3 |
| [play-scala-angular-seed](repositories/report.play-scala-angular-seed.md#%EF%B8%8F-play-scala-angular-seed) | [scala-play-angular-seed](repositories/report.play-scala-angular-seed.md#-scala-play-angular-seed) | 0 | 0 | 0 | 2 |
| [angular-basics-project](repositories/report.angular-basics-project.md#%EF%B8%8F-angular-basics-project) | [shopping-cart](repositories/report.angular-basics-project.md#-shopping-cart) | 0 | 0 | 0 | 1 |
| [ng-apexcharts](repositories/report.ng-apexcharts.md#%EF%B8%8F-ng-apexcharts) | [ng-apexcharts-demo](repositories/report.ng-apexcharts.md#-ng-apexcharts-demo) | 0 | 0 | 0 | 1 |

</details>

<details>
<summary>use-component-view-encapsulation (projects: 6, matches: 59) 💡</summary>

| Repository | Project | Recommended<br>⚠️ Warnings | Recommended<br>💥 Errors | All<br>⚠️ Warnings | All<br>💥 Errors |
|---|---|:--:|:--:|:--:|:--:|
| [angular-gridster2](repositories/report.angular-gridster2.md#%EF%B8%8F-angular-gridster2) | [gridster-app](repositories/report.angular-gridster2.md#-gridster-app) | 0 | 0 | 0 | 25 |
| [angular-calendar](repositories/report.angular-calendar.md#%EF%B8%8F-angular-calendar) | [demos](repositories/report.angular-calendar.md#-demos) | 0 | 0 | 0 | 12 |
| [angular-ionic-ngxs-movies](repositories/report.angular-ionic-ngxs-movies.md#%EF%B8%8F-angular-ionic-ngxs-movies) | [angular-ionic-ngxs-movies](repositories/report.angular-ionic-ngxs-movies.md#-angular-ionic-ngxs-movies) | 0 | 0 | 0 | 10 |
| [ng-three-template](repositories/report.ng-three-template.md#%EF%B8%8F-ng-three-template) | [ng-three-template](repositories/report.ng-three-template.md#-ng-three-template) | 0 | 0 | 0 | 7 |
| [angular-gridster2](repositories/report.angular-gridster2.md#%EF%B8%8F-angular-gridster2) | [angular-gridster2](repositories/report.angular-gridster2.md#-angular-gridster2) | 0 | 0 | 0 | 3 |
| [ngx-quill](repositories/report.ngx-quill.md#%EF%B8%8F-ngx-quill) | [ngx-quill](repositories/report.ngx-quill.md#-ngx-quill) | 0 | 0 | 0 | 2 |

</details>

<details>
<summary>relative-url-prefix (projects: 2, matches: 50) </summary>

| Repository | Project | Recommended<br>⚠️ Warnings | Recommended<br>💥 Errors | All<br>⚠️ Warnings | All<br>💥 Errors |
|---|---|:--:|:--:|:--:|:--:|
| [angular-calendar](repositories/report.angular-calendar.md#%EF%B8%8F-angular-calendar) | [demos](repositories/report.angular-calendar.md#-demos) | 0 | 0 | 0 | 43 |
| [angular-ionic-ngxs-movies](repositories/report.angular-ionic-ngxs-movies.md#%EF%B8%8F-angular-ionic-ngxs-movies) | [angular-ionic-ngxs-movies](repositories/report.angular-ionic-ngxs-movies.md#-angular-ionic-ngxs-movies) | 0 | 0 | 0 | 7 |

</details>

<details>
<summary>consistent-component-styles (projects: 14, matches: 48) 🔧</summary>

| Repository | Project | Recommended<br>⚠️ Warnings | Recommended<br>💥 Errors | All<br>⚠️ Warnings | All<br>💥 Errors |
|---|---|:--:|:--:|:--:|:--:|
| [angular-calendar](repositories/report.angular-calendar.md#%EF%B8%8F-angular-calendar) | [demos](repositories/report.angular-calendar.md#-demos) | 0 | 0 | 0 | 17 |
| [mean](repositories/report.mean.md#%EF%B8%8F-mean) | [mean](repositories/report.mean.md#-mean) | 0 | 0 | 0 | 5 |
| [angular-16-crud-example](repositories/report.angular-16-crud-example.md#%EF%B8%8F-angular-16-crud-example) | [angular-16-crud](repositories/report.angular-16-crud-example.md#-angular-16-crud) | 0 | 0 | 0 | 4 |
| [Angular-Full-Stack](repositories/report.Angular-Full-Stack.md#%EF%B8%8F-Angular-Full-Stack) | [angular2-full-stack](repositories/report.Angular-Full-Stack.md#-angular2-full-stack) | 0 | 0 | 0 | 4 |
| [angular-17-crud-example](repositories/report.angular-17-crud-example.md#%EF%B8%8F-angular-17-crud-example) | [angular-17-crud](repositories/report.angular-17-crud-example.md#-angular-17-crud) | 0 | 0 | 0 | 3 |
| [angular-gridster2](repositories/report.angular-gridster2.md#%EF%B8%8F-angular-gridster2) | [angular-gridster2](repositories/report.angular-gridster2.md#-angular-gridster2) | 0 | 0 | 0 | 3 |
| [ngx-quill](repositories/report.ngx-quill.md#%EF%B8%8F-ngx-quill) | [ngx-quill](repositories/report.ngx-quill.md#-ngx-quill) | 0 | 0 | 0 | 3 |
| [gojs-angular-basic](repositories/report.gojs-angular-basic.md#%EF%B8%8F-gojs-angular-basic) | [first-app](repositories/report.gojs-angular-basic.md#-first-app) | 0 | 0 | 0 | 2 |
| [play-scala-angular-seed](repositories/report.play-scala-angular-seed.md#%EF%B8%8F-play-scala-angular-seed) | [scala-play-angular-seed](repositories/report.play-scala-angular-seed.md#-scala-play-angular-seed) | 0 | 0 | 0 | 2 |
| [angular-basics-project](repositories/report.angular-basics-project.md#%EF%B8%8F-angular-basics-project) | [shopping-cart](repositories/report.angular-basics-project.md#-shopping-cart) | 0 | 0 | 0 | 1 |
| [angular-calendar](repositories/report.angular-calendar.md#%EF%B8%8F-angular-calendar) | [angular-calendar](repositories/report.angular-calendar.md#-angular-calendar) | 0 | 0 | 0 | 1 |
| [angular-fontawesome](repositories/report.angular-fontawesome.md#%EF%B8%8F-angular-fontawesome) | [demo](repositories/report.angular-fontawesome.md#-demo) | 0 | 0 | 0 | 1 |
| [angular-realworld-example-app](repositories/report.angular-realworld-example-app.md#%EF%B8%8F-angular-realworld-example-app) | [angular-conduit](repositories/report.angular-realworld-example-app.md#-angular-conduit) | 0 | 0 | 0 | 1 |
| [ng-apexcharts](repositories/report.ng-apexcharts.md#%EF%B8%8F-ng-apexcharts) | [ng-apexcharts-demo](repositories/report.ng-apexcharts.md#-ng-apexcharts-demo) | 0 | 0 | 0 | 1 |

</details>

<details>
<summary>component-max-inline-declarations (projects: 5, matches: 47) </summary>

| Repository | Project | Recommended<br>⚠️ Warnings | Recommended<br>💥 Errors | All<br>⚠️ Warnings | All<br>💥 Errors |
|---|---|:--:|:--:|:--:|:--:|
| [angular-calendar](repositories/report.angular-calendar.md#%EF%B8%8F-angular-calendar) | [angular-calendar](repositories/report.angular-calendar.md#-angular-calendar) | 0 | 0 | 0 | 17 |
| [angular-calendar](repositories/report.angular-calendar.md#%EF%B8%8F-angular-calendar) | [demos](repositories/report.angular-calendar.md#-demos) | 0 | 0 | 0 | 11 |
| [ngx-toastr](repositories/report.ngx-toastr.md#%EF%B8%8F-ngx-toastr) | [ngx-toastr](repositories/report.ngx-toastr.md#-ngx-toastr) | 0 | 0 | 0 | 11 |
| [angular-realworld-example-app](repositories/report.angular-realworld-example-app.md#%EF%B8%8F-angular-realworld-example-app) | [angular-conduit](repositories/report.angular-realworld-example-app.md#-angular-conduit) | 0 | 0 | 0 | 6 |
| [ngx-quill](repositories/report.ngx-quill.md#%EF%B8%8F-ngx-quill) | [ngx-quill](repositories/report.ngx-quill.md#-ngx-quill) | 0 | 0 | 0 | 2 |

</details>

<details>
<summary>prefer-output-readonly (projects: 6, matches: 46) 💡</summary>

| Repository | Project | Recommended<br>⚠️ Warnings | Recommended<br>💥 Errors | All<br>⚠️ Warnings | All<br>💥 Errors |
|---|---|:--:|:--:|:--:|:--:|
| [angular-calendar](repositories/report.angular-calendar.md#%EF%B8%8F-angular-calendar) | [angular-calendar](repositories/report.angular-calendar.md#-angular-calendar) | 0 | 0 | 0 | 26 |
| [ngx-quill](repositories/report.ngx-quill.md#%EF%B8%8F-ngx-quill) | [ngx-quill](repositories/report.ngx-quill.md#-ngx-quill) | 0 | 0 | 0 | 9 |
| [angular-calendar](repositories/report.angular-calendar.md#%EF%B8%8F-angular-calendar) | [demos](repositories/report.angular-calendar.md#-demos) | 0 | 0 | 0 | 3 |
| [angular-gridster2](repositories/report.angular-gridster2.md#%EF%B8%8F-angular-gridster2) | [angular-gridster2](repositories/report.angular-gridster2.md#-angular-gridster2) | 0 | 0 | 0 | 3 |
| [angular-realworld-example-app](repositories/report.angular-realworld-example-app.md#%EF%B8%8F-angular-realworld-example-app) | [angular-conduit](repositories/report.angular-realworld-example-app.md#-angular-conduit) | 0 | 0 | 0 | 3 |
| [gojs-angular-basic](repositories/report.gojs-angular-basic.md#%EF%B8%8F-gojs-angular-basic) | [first-app](repositories/report.gojs-angular-basic.md#-first-app) | 0 | 0 | 0 | 2 |

</details>

<details>
<summary>use-injectable-provided-in (projects: 7, matches: 31) 💡</summary>

| Repository | Project | Recommended<br>⚠️ Warnings | Recommended<br>💥 Errors | All<br>⚠️ Warnings | All<br>💥 Errors |
|---|---|:--:|:--:|:--:|:--:|
| [angular-calendar](repositories/report.angular-calendar.md#%EF%B8%8F-angular-calendar) | [demos](repositories/report.angular-calendar.md#-demos) | 0 | 0 | 0 | 7 |
| [QuickApp](repositories/report.QuickApp.md#%EF%B8%8F-QuickApp) | [quickapp.client](repositories/report.QuickApp.md#-quickapp.client) | 0 | 0 | 0 | 7 |
| [angular-calendar](repositories/report.angular-calendar.md#%EF%B8%8F-angular-calendar) | [angular-calendar](repositories/report.angular-calendar.md#-angular-calendar) | 0 | 0 | 0 | 6 |
| [Angular-Full-Stack](repositories/report.Angular-Full-Stack.md#%EF%B8%8F-Angular-Full-Stack) | [angular2-full-stack](repositories/report.Angular-Full-Stack.md#-angular2-full-stack) | 0 | 0 | 0 | 5 |
| [angular-ionic-ngxs-movies](repositories/report.angular-ionic-ngxs-movies.md#%EF%B8%8F-angular-ionic-ngxs-movies) | [angular-ionic-ngxs-movies](repositories/report.angular-ionic-ngxs-movies.md#-angular-ionic-ngxs-movies) | 0 | 0 | 0 | 4 |
| [mean](repositories/report.mean.md#%EF%B8%8F-mean) | [mean](repositories/report.mean.md#-mean) | 0 | 0 | 0 | 1 |
| [play-scala-angular-seed](repositories/report.play-scala-angular-seed.md#%EF%B8%8F-play-scala-angular-seed) | [scala-play-angular-seed](repositories/report.play-scala-angular-seed.md#-scala-play-angular-seed) | 0 | 0 | 0 | 1 |

</details>

<details>
<summary>prefer-standalone (projects: 1, matches: 24) 🔧 ✅</summary>

| Repository | Project | Recommended<br>⚠️ Warnings | Recommended<br>💥 Errors | All<br>⚠️ Warnings | All<br>💥 Errors |
|---|---|:--:|:--:|:--:|:--:|
| [Angular-Full-Stack](repositories/report.Angular-Full-Stack.md#%EF%B8%8F-Angular-Full-Stack) | [angular2-full-stack](repositories/report.Angular-Full-Stack.md#-angular2-full-stack) | 0 | 12 | 0 | 12 |

</details>

<details>
<summary>no-output-on-prefix (projects: 2, matches: 22) ✅</summary>

| Repository | Project | Recommended<br>⚠️ Warnings | Recommended<br>💥 Errors | All<br>⚠️ Warnings | All<br>💥 Errors |
|---|---|:--:|:--:|:--:|:--:|
| [ngx-quill](repositories/report.ngx-quill.md#%EF%B8%8F-ngx-quill) | [ngx-quill](repositories/report.ngx-quill.md#-ngx-quill) | 0 | 9 | 0 | 9 |
| [gojs-angular-basic](repositories/report.gojs-angular-basic.md#%EF%B8%8F-gojs-angular-basic) | [first-app](repositories/report.gojs-angular-basic.md#-first-app) | 0 | 2 | 0 | 2 |

</details>

<details>
<summary>runtime-localize (projects: 1, matches: 21) </summary>

| Repository | Project | Recommended<br>⚠️ Warnings | Recommended<br>💥 Errors | All<br>⚠️ Warnings | All<br>💥 Errors |
|---|---|:--:|:--:|:--:|:--:|
| [angular-example-app](repositories/report.angular-example-app.md#%EF%B8%8F-angular-example-app) | [angularexampleapp](repositories/report.angular-example-app.md#-angularexampleapp) | 0 | 0 | 0 | 21 |

</details>

<details>
<summary>prefer-standalone-component (projects: 1, matches: 11) ❌ ❌ ❌</summary>

| Repository | Project | Recommended<br>⚠️ Warnings | Recommended<br>💥 Errors | All<br>⚠️ Warnings | All<br>💥 Errors |
|---|---|:--:|:--:|:--:|:--:|
| [angular-ionic-ngxs-movies](repositories/report.angular-ionic-ngxs-movies.md#%EF%B8%8F-angular-ionic-ngxs-movies) | [angular-ionic-ngxs-movies](repositories/report.angular-ionic-ngxs-movies.md#-angular-ionic-ngxs-movies) | 0 | 0 | 0 | 11 |

</details>

<details>
<summary>no-empty-lifecycle-method (projects: 1, matches: 10) ✅ 💡</summary>

| Repository | Project | Recommended<br>⚠️ Warnings | Recommended<br>💥 Errors | All<br>⚠️ Warnings | All<br>💥 Errors |
|---|---|:--:|:--:|:--:|:--:|
| [ng-three-template](repositories/report.ng-three-template.md#%EF%B8%8F-ng-three-template) | [ng-three-template](repositories/report.ng-three-template.md#-ng-three-template) | 0 | 5 | 0 | 5 |

</details>

<details>
<summary>component-class-suffix (projects: 1, matches: 10) ✅</summary>

| Repository | Project | Recommended<br>⚠️ Warnings | Recommended<br>💥 Errors | All<br>⚠️ Warnings | All<br>💥 Errors |
|---|---|:--:|:--:|:--:|:--:|
| [ngx-toastr](repositories/report.ngx-toastr.md#%EF%B8%8F-ngx-toastr) | [ngx-toastr](repositories/report.ngx-toastr.md#-ngx-toastr) | 0 | 5 | 0 | 5 |

</details>

<details>
<summary>sort-ngmodule-metadata-arrays (projects: 2, matches: 9) ❌ ❌ ❌</summary>

| Repository | Project | Recommended<br>⚠️ Warnings | Recommended<br>💥 Errors | All<br>⚠️ Warnings | All<br>💥 Errors |
|---|---|:--:|:--:|:--:|:--:|
| [angular-ionic-ngxs-movies](repositories/report.angular-ionic-ngxs-movies.md#%EF%B8%8F-angular-ionic-ngxs-movies) | [angular-ionic-ngxs-movies](repositories/report.angular-ionic-ngxs-movies.md#-angular-ionic-ngxs-movies) | 0 | 0 | 0 | 6 |
| [ngx-toastr](repositories/report.ngx-toastr.md#%EF%B8%8F-ngx-toastr) | [ngx-toastr](repositories/report.ngx-toastr.md#-ngx-toastr) | 0 | 0 | 0 | 3 |

</details>

<details>
<summary>sort-lifecycle-methods (projects: 3, matches: 7) </summary>

| Repository | Project | Recommended<br>⚠️ Warnings | Recommended<br>💥 Errors | All<br>⚠️ Warnings | All<br>💥 Errors |
|---|---|:--:|:--:|:--:|:--:|
| [angular-calendar](repositories/report.angular-calendar.md#%EF%B8%8F-angular-calendar) | [angular-calendar](repositories/report.angular-calendar.md#-angular-calendar) | 0 | 0 | 0 | 3 |
| [angular-fontawesome](repositories/report.angular-fontawesome.md#%EF%B8%8F-angular-fontawesome) | [angular-fontawesome](repositories/report.angular-fontawesome.md#-angular-fontawesome) | 0 | 0 | 0 | 2 |
| [angular-gridster2](repositories/report.angular-gridster2.md#%EF%B8%8F-angular-gridster2) | [angular-gridster2](repositories/report.angular-gridster2.md#-angular-gridster2) | 0 | 0 | 0 | 2 |

</details>

<details>
<summary>use-component-selector (projects: 1, matches: 6) </summary>

| Repository | Project | Recommended<br>⚠️ Warnings | Recommended<br>💥 Errors | All<br>⚠️ Warnings | All<br>💥 Errors |
|---|---|:--:|:--:|:--:|:--:|
| [angular-calendar](repositories/report.angular-calendar.md#%EF%B8%8F-angular-calendar) | [angular-calendar](repositories/report.angular-calendar.md#-angular-calendar) | 0 | 0 | 0 | 6 |

</details>

<details>
<summary>component-selector (projects: 1, matches: 6) </summary>

| Repository | Project | Recommended<br>⚠️ Warnings | Recommended<br>💥 Errors | All<br>⚠️ Warnings | All<br>💥 Errors |
|---|---|:--:|:--:|:--:|:--:|
| [ngx-quill](repositories/report.ngx-quill.md#%EF%B8%8F-ngx-quill) | [ngx-quill](repositories/report.ngx-quill.md#-ngx-quill) | 0 | 3 | 0 | 3 |

</details>

<details>
<summary>no-output-native (projects: 1, matches: 4) ✅</summary>

| Repository | Project | Recommended<br>⚠️ Warnings | Recommended<br>💥 Errors | All<br>⚠️ Warnings | All<br>💥 Errors |
|---|---|:--:|:--:|:--:|:--:|
| [angular-realworld-example-app](repositories/report.angular-realworld-example-app.md#%EF%B8%8F-angular-realworld-example-app) | [angular-conduit](repositories/report.angular-realworld-example-app.md#-angular-conduit) | 0 | 2 | 0 | 2 |

</details>

<details>
<summary>no-forward-ref (projects: 2, matches: 3) </summary>

| Repository | Project | Recommended<br>⚠️ Warnings | Recommended<br>💥 Errors | All<br>⚠️ Warnings | All<br>💥 Errors |
|---|---|:--:|:--:|:--:|:--:|
| [ngx-quill](repositories/report.ngx-quill.md#%EF%B8%8F-ngx-quill) | [ngx-quill](repositories/report.ngx-quill.md#-ngx-quill) | 0 | 0 | 0 | 2 |
| [QuickApp](repositories/report.QuickApp.md#%EF%B8%8F-QuickApp) | [quickapp.client](repositories/report.QuickApp.md#-quickapp.client) | 0 | 0 | 0 | 1 |

</details>

<details>
<summary>no-host-metadata-property (projects: 1, matches: 2) ❌ ❌ ❌</summary>

| Repository | Project | Recommended<br>⚠️ Warnings | Recommended<br>💥 Errors | All<br>⚠️ Warnings | All<br>💥 Errors |
|---|---|:--:|:--:|:--:|:--:|
| [angular-calendar](repositories/report.angular-calendar.md#%EF%B8%8F-angular-calendar) | [angular-calendar](repositories/report.angular-calendar.md#-angular-calendar) | 0 | 1 | 0 | 1 |

</details>

<details>
<summary>directive-selector (projects: 1, matches: 2) </summary>

| Repository | Project | Recommended<br>⚠️ Warnings | Recommended<br>💥 Errors | All<br>⚠️ Warnings | All<br>💥 Errors |
|---|---|:--:|:--:|:--:|:--:|
| [angular-realworld-example-app](repositories/report.angular-realworld-example-app.md#%EF%B8%8F-angular-realworld-example-app) | [angular-conduit](repositories/report.angular-realworld-example-app.md#-angular-conduit) | 0 | 1 | 0 | 1 |

</details>

<details>
<summary>use-lifecycle-interface (projects: 1, matches: 2) 🔧</summary>

| Repository | Project | Recommended<br>⚠️ Warnings | Recommended<br>💥 Errors | All<br>⚠️ Warnings | All<br>💥 Errors |
|---|---|:--:|:--:|:--:|:--:|
| [gojs-angular-basic](repositories/report.gojs-angular-basic.md#%EF%B8%8F-gojs-angular-basic) | [first-app](repositories/report.gojs-angular-basic.md#-first-app) | 1 | 0 | 0 | 1 |

</details>

<details>
<summary>no-lifecycle-call (projects: 1, matches: 1) </summary>

| Repository | Project | Recommended<br>⚠️ Warnings | Recommended<br>💥 Errors | All<br>⚠️ Warnings | All<br>💥 Errors |
|---|---|:--:|:--:|:--:|:--:|
| [angular-fontawesome](repositories/report.angular-fontawesome.md#%EF%B8%8F-angular-fontawesome) | [angular-fontawesome](repositories/report.angular-fontawesome.md#-angular-fontawesome) | 0 | 0 | 0 | 1 |

</details>

<details>
<summary>no-duplicates-in-metadata-arrays (projects: 1, matches: 1) </summary>

| Repository | Project | Recommended<br>⚠️ Warnings | Recommended<br>💥 Errors | All<br>⚠️ Warnings | All<br>💥 Errors |
|---|---|:--:|:--:|:--:|:--:|
| [angular-realworld-example-app](repositories/report.angular-realworld-example-app.md#%EF%B8%8F-angular-realworld-example-app) | [angular-conduit](repositories/report.angular-realworld-example-app.md#-angular-conduit) | 0 | 0 | 0 | 1 |

</details>



### Catalog

| Rule | Repository | Project | Count |
|---|---|---|:--:|
|prefer-on-push-component-change-detection | [angular-calendar](repositories/report.angular-calendar.md#%EF%B8%8F-angular-calendar) | [angular-calendar](repositories/report.angular-calendar.md#-angular-calendar) | 20 |
| | [QuickApp](repositories/report.QuickApp.md#%EF%B8%8F-QuickApp) | [quickapp.client](repositories/report.QuickApp.md#-quickapp.client) | 19 |
| | [angular-realworld-example-app](repositories/report.angular-realworld-example-app.md#%EF%B8%8F-angular-realworld-example-app) | [angular-conduit](repositories/report.angular-realworld-example-app.md#-angular-conduit) | 16 |
| | [Angular-Full-Stack](repositories/report.Angular-Full-Stack.md#%EF%B8%8F-Angular-Full-Stack) | [angular2-full-stack](repositories/report.Angular-Full-Stack.md#-angular2-full-stack) | 12 |
| | [angular-ionic-ngxs-movies](repositories/report.angular-ionic-ngxs-movies.md#%EF%B8%8F-angular-ionic-ngxs-movies) | [angular-ionic-ngxs-movies](repositories/report.angular-ionic-ngxs-movies.md#-angular-ionic-ngxs-movies) | 11 |
| | [angular-fontawesome](repositories/report.angular-fontawesome.md#%EF%B8%8F-angular-fontawesome) | [angular-fontawesome](repositories/report.angular-fontawesome.md#-angular-fontawesome) | 6 |
| | [mean](repositories/report.mean.md#%EF%B8%8F-mean) | [mean](repositories/report.mean.md#-mean) | 6 |
| | [ngx-toastr](repositories/report.ngx-toastr.md#%EF%B8%8F-ngx-toastr) | [ngx-toastr](repositories/report.ngx-toastr.md#-ngx-toastr) | 6 |
| | [angular-16-crud-example](repositories/report.angular-16-crud-example.md#%EF%B8%8F-angular-16-crud-example) | [angular-16-crud](repositories/report.angular-16-crud-example.md#-angular-16-crud) | 4 |
| | [angular-17-crud-example](repositories/report.angular-17-crud-example.md#%EF%B8%8F-angular-17-crud-example) | [angular-17-crud](repositories/report.angular-17-crud-example.md#-angular-17-crud) | 4 |
| | [angular-calendar](repositories/report.angular-calendar.md#%EF%B8%8F-angular-calendar) | [demos](repositories/report.angular-calendar.md#-demos) | 4 |
| | [angular-fontawesome](repositories/report.angular-fontawesome.md#%EF%B8%8F-angular-fontawesome) | [demo](repositories/report.angular-fontawesome.md#-demo) | 4 |
| | [angular-gridster2](repositories/report.angular-gridster2.md#%EF%B8%8F-angular-gridster2) | [angular-gridster2](repositories/report.angular-gridster2.md#-angular-gridster2) | 3 |
| | [gojs-angular-basic](repositories/report.gojs-angular-basic.md#%EF%B8%8F-gojs-angular-basic) | [first-app](repositories/report.gojs-angular-basic.md#-first-app) | 3 |
| | [ngx-quill](repositories/report.ngx-quill.md#%EF%B8%8F-ngx-quill) | [ngx-quill](repositories/report.ngx-quill.md#-ngx-quill) | 3 |
| | [play-scala-angular-seed](repositories/report.play-scala-angular-seed.md#%EF%B8%8F-play-scala-angular-seed) | [scala-play-angular-seed](repositories/report.play-scala-angular-seed.md#-scala-play-angular-seed) | 2 |
| | [angular-basics-project](repositories/report.angular-basics-project.md#%EF%B8%8F-angular-basics-project) | [shopping-cart](repositories/report.angular-basics-project.md#-shopping-cart) | 1 |
| | [ng-apexcharts](repositories/report.ng-apexcharts.md#%EF%B8%8F-ng-apexcharts) | [ng-apexcharts-demo](repositories/report.ng-apexcharts.md#-ng-apexcharts-demo) | 1 |
|consistent-component-styles | [angular-calendar](repositories/report.angular-calendar.md#%EF%B8%8F-angular-calendar) | [demos](repositories/report.angular-calendar.md#-demos) | 17 |
| | [mean](repositories/report.mean.md#%EF%B8%8F-mean) | [mean](repositories/report.mean.md#-mean) | 5 |
| | [angular-16-crud-example](repositories/report.angular-16-crud-example.md#%EF%B8%8F-angular-16-crud-example) | [angular-16-crud](repositories/report.angular-16-crud-example.md#-angular-16-crud) | 4 |
| | [Angular-Full-Stack](repositories/report.Angular-Full-Stack.md#%EF%B8%8F-Angular-Full-Stack) | [angular2-full-stack](repositories/report.Angular-Full-Stack.md#-angular2-full-stack) | 4 |
| | [angular-17-crud-example](repositories/report.angular-17-crud-example.md#%EF%B8%8F-angular-17-crud-example) | [angular-17-crud](repositories/report.angular-17-crud-example.md#-angular-17-crud) | 3 |
| | [angular-gridster2](repositories/report.angular-gridster2.md#%EF%B8%8F-angular-gridster2) | [angular-gridster2](repositories/report.angular-gridster2.md#-angular-gridster2) | 3 |
| | [ngx-quill](repositories/report.ngx-quill.md#%EF%B8%8F-ngx-quill) | [ngx-quill](repositories/report.ngx-quill.md#-ngx-quill) | 3 |
| | [gojs-angular-basic](repositories/report.gojs-angular-basic.md#%EF%B8%8F-gojs-angular-basic) | [first-app](repositories/report.gojs-angular-basic.md#-first-app) | 2 |
| | [play-scala-angular-seed](repositories/report.play-scala-angular-seed.md#%EF%B8%8F-play-scala-angular-seed) | [scala-play-angular-seed](repositories/report.play-scala-angular-seed.md#-scala-play-angular-seed) | 2 |
| | [angular-basics-project](repositories/report.angular-basics-project.md#%EF%B8%8F-angular-basics-project) | [shopping-cart](repositories/report.angular-basics-project.md#-shopping-cart) | 1 |
| | [angular-calendar](repositories/report.angular-calendar.md#%EF%B8%8F-angular-calendar) | [angular-calendar](repositories/report.angular-calendar.md#-angular-calendar) | 1 |
| | [angular-fontawesome](repositories/report.angular-fontawesome.md#%EF%B8%8F-angular-fontawesome) | [demo](repositories/report.angular-fontawesome.md#-demo) | 1 |
| | [angular-realworld-example-app](repositories/report.angular-realworld-example-app.md#%EF%B8%8F-angular-realworld-example-app) | [angular-conduit](repositories/report.angular-realworld-example-app.md#-angular-conduit) | 1 |
| | [ng-apexcharts](repositories/report.ng-apexcharts.md#%EF%B8%8F-ng-apexcharts) | [ng-apexcharts-demo](repositories/report.ng-apexcharts.md#-ng-apexcharts-demo) | 1 |
|prefer-signals | [angular-calendar](repositories/report.angular-calendar.md#%EF%B8%8F-angular-calendar) | [angular-calendar](repositories/report.angular-calendar.md#-angular-calendar) | 149 |
| | [angular-fontawesome](repositories/report.angular-fontawesome.md#%EF%B8%8F-angular-fontawesome) | [angular-fontawesome](repositories/report.angular-fontawesome.md#-angular-fontawesome) | 37 |
| | [angular-realworld-example-app](repositories/report.angular-realworld-example-app.md#%EF%B8%8F-angular-realworld-example-app) | [angular-conduit](repositories/report.angular-realworld-example-app.md#-angular-conduit) | 9 |
| | [angular-calendar](repositories/report.angular-calendar.md#%EF%B8%8F-angular-calendar) | [demos](repositories/report.angular-calendar.md#-demos) | 7 |
| | [gojs-angular-basic](repositories/report.gojs-angular-basic.md#%EF%B8%8F-gojs-angular-basic) | [first-app](repositories/report.gojs-angular-basic.md#-first-app) | 5 |
| | [Angular-Full-Stack](repositories/report.Angular-Full-Stack.md#%EF%B8%8F-Angular-Full-Stack) | [angular2-full-stack](repositories/report.Angular-Full-Stack.md#-angular2-full-stack) | 3 |
| | [angular-16-crud-example](repositories/report.angular-16-crud-example.md#%EF%B8%8F-angular-16-crud-example) | [angular-16-crud](repositories/report.angular-16-crud-example.md#-angular-16-crud) | 2 |
| | [angular-17-crud-example](repositories/report.angular-17-crud-example.md#%EF%B8%8F-angular-17-crud-example) | [angular-17-crud](repositories/report.angular-17-crud-example.md#-angular-17-crud) | 2 |
| | [ngx-quill](repositories/report.ngx-quill.md#%EF%B8%8F-ngx-quill) | [ngx-quill](repositories/report.ngx-quill.md#-ngx-quill) | 2 |
| | [mean](repositories/report.mean.md#%EF%B8%8F-mean) | [mean](repositories/report.mean.md#-mean) | 1 |
| | [ng-apexcharts](repositories/report.ng-apexcharts.md#%EF%B8%8F-ng-apexcharts) | [ng-apexcharts-demo](repositories/report.ng-apexcharts.md#-ng-apexcharts-demo) | 1 |
| | [ng-three-template](repositories/report.ng-three-template.md#%EF%B8%8F-ng-three-template) | [ng-three-template](repositories/report.ng-three-template.md#-ng-three-template) | 1 |
|use-component-view-encapsulation | [angular-gridster2](repositories/report.angular-gridster2.md#%EF%B8%8F-angular-gridster2) | [gridster-app](repositories/report.angular-gridster2.md#-gridster-app) | 25 |
| | [angular-calendar](repositories/report.angular-calendar.md#%EF%B8%8F-angular-calendar) | [demos](repositories/report.angular-calendar.md#-demos) | 12 |
| | [angular-ionic-ngxs-movies](repositories/report.angular-ionic-ngxs-movies.md#%EF%B8%8F-angular-ionic-ngxs-movies) | [angular-ionic-ngxs-movies](repositories/report.angular-ionic-ngxs-movies.md#-angular-ionic-ngxs-movies) | 10 |
| | [ng-three-template](repositories/report.ng-three-template.md#%EF%B8%8F-ng-three-template) | [ng-three-template](repositories/report.ng-three-template.md#-ng-three-template) | 7 |
| | [angular-gridster2](repositories/report.angular-gridster2.md#%EF%B8%8F-angular-gridster2) | [angular-gridster2](repositories/report.angular-gridster2.md#-angular-gridster2) | 3 |
| | [ngx-quill](repositories/report.ngx-quill.md#%EF%B8%8F-ngx-quill) | [ngx-quill](repositories/report.ngx-quill.md#-ngx-quill) | 2 |
|relative-url-prefix | [angular-calendar](repositories/report.angular-calendar.md#%EF%B8%8F-angular-calendar) | [demos](repositories/report.angular-calendar.md#-demos) | 43 |
| | [angular-ionic-ngxs-movies](repositories/report.angular-ionic-ngxs-movies.md#%EF%B8%8F-angular-ionic-ngxs-movies) | [angular-ionic-ngxs-movies](repositories/report.angular-ionic-ngxs-movies.md#-angular-ionic-ngxs-movies) | 7 |
|component-max-inline-declarations | [angular-calendar](repositories/report.angular-calendar.md#%EF%B8%8F-angular-calendar) | [angular-calendar](repositories/report.angular-calendar.md#-angular-calendar) | 17 |
| | [angular-calendar](repositories/report.angular-calendar.md#%EF%B8%8F-angular-calendar) | [demos](repositories/report.angular-calendar.md#-demos) | 11 |
| | [ngx-toastr](repositories/report.ngx-toastr.md#%EF%B8%8F-ngx-toastr) | [ngx-toastr](repositories/report.ngx-toastr.md#-ngx-toastr) | 11 |
| | [angular-realworld-example-app](repositories/report.angular-realworld-example-app.md#%EF%B8%8F-angular-realworld-example-app) | [angular-conduit](repositories/report.angular-realworld-example-app.md#-angular-conduit) | 6 |
| | [ngx-quill](repositories/report.ngx-quill.md#%EF%B8%8F-ngx-quill) | [ngx-quill](repositories/report.ngx-quill.md#-ngx-quill) | 2 |
|use-injectable-provided-in | [angular-calendar](repositories/report.angular-calendar.md#%EF%B8%8F-angular-calendar) | [demos](repositories/report.angular-calendar.md#-demos) | 7 |
| | [QuickApp](repositories/report.QuickApp.md#%EF%B8%8F-QuickApp) | [quickapp.client](repositories/report.QuickApp.md#-quickapp.client) | 7 |
| | [angular-calendar](repositories/report.angular-calendar.md#%EF%B8%8F-angular-calendar) | [angular-calendar](repositories/report.angular-calendar.md#-angular-calendar) | 6 |
| | [Angular-Full-Stack](repositories/report.Angular-Full-Stack.md#%EF%B8%8F-Angular-Full-Stack) | [angular2-full-stack](repositories/report.Angular-Full-Stack.md#-angular2-full-stack) | 5 |
| | [angular-ionic-ngxs-movies](repositories/report.angular-ionic-ngxs-movies.md#%EF%B8%8F-angular-ionic-ngxs-movies) | [angular-ionic-ngxs-movies](repositories/report.angular-ionic-ngxs-movies.md#-angular-ionic-ngxs-movies) | 4 |
| | [mean](repositories/report.mean.md#%EF%B8%8F-mean) | [mean](repositories/report.mean.md#-mean) | 1 |
| | [play-scala-angular-seed](repositories/report.play-scala-angular-seed.md#%EF%B8%8F-play-scala-angular-seed) | [scala-play-angular-seed](repositories/report.play-scala-angular-seed.md#-scala-play-angular-seed) | 1 |
|prefer-output-readonly | [angular-calendar](repositories/report.angular-calendar.md#%EF%B8%8F-angular-calendar) | [angular-calendar](repositories/report.angular-calendar.md#-angular-calendar) | 26 |
| | [ngx-quill](repositories/report.ngx-quill.md#%EF%B8%8F-ngx-quill) | [ngx-quill](repositories/report.ngx-quill.md#-ngx-quill) | 9 |
| | [angular-calendar](repositories/report.angular-calendar.md#%EF%B8%8F-angular-calendar) | [demos](repositories/report.angular-calendar.md#-demos) | 3 |
| | [angular-gridster2](repositories/report.angular-gridster2.md#%EF%B8%8F-angular-gridster2) | [angular-gridster2](repositories/report.angular-gridster2.md#-angular-gridster2) | 3 |
| | [angular-realworld-example-app](repositories/report.angular-realworld-example-app.md#%EF%B8%8F-angular-realworld-example-app) | [angular-conduit](repositories/report.angular-realworld-example-app.md#-angular-conduit) | 3 |
| | [gojs-angular-basic](repositories/report.gojs-angular-basic.md#%EF%B8%8F-gojs-angular-basic) | [first-app](repositories/report.gojs-angular-basic.md#-first-app) | 2 |
|no-host-metadata-property | [angular-calendar](repositories/report.angular-calendar.md#%EF%B8%8F-angular-calendar) | [angular-calendar](repositories/report.angular-calendar.md#-angular-calendar) | 1 |
|use-component-selector | [angular-calendar](repositories/report.angular-calendar.md#%EF%B8%8F-angular-calendar) | [angular-calendar](repositories/report.angular-calendar.md#-angular-calendar) | 6 |
|sort-lifecycle-methods | [angular-calendar](repositories/report.angular-calendar.md#%EF%B8%8F-angular-calendar) | [angular-calendar](repositories/report.angular-calendar.md#-angular-calendar) | 3 |
| | [angular-fontawesome](repositories/report.angular-fontawesome.md#%EF%B8%8F-angular-fontawesome) | [angular-fontawesome](repositories/report.angular-fontawesome.md#-angular-fontawesome) | 2 |
| | [angular-gridster2](repositories/report.angular-gridster2.md#%EF%B8%8F-angular-gridster2) | [angular-gridster2](repositories/report.angular-gridster2.md#-angular-gridster2) | 2 |
|runtime-localize | [angular-example-app](repositories/report.angular-example-app.md#%EF%B8%8F-angular-example-app) | [angularexampleapp](repositories/report.angular-example-app.md#-angularexampleapp) | 21 |
|no-lifecycle-call | [angular-fontawesome](repositories/report.angular-fontawesome.md#%EF%B8%8F-angular-fontawesome) | [angular-fontawesome](repositories/report.angular-fontawesome.md#-angular-fontawesome) | 1 |
|prefer-standalone | [Angular-Full-Stack](repositories/report.Angular-Full-Stack.md#%EF%B8%8F-Angular-Full-Stack) | [angular2-full-stack](repositories/report.Angular-Full-Stack.md#-angular2-full-stack) | 12 |
|prefer-standalone-component | [angular-ionic-ngxs-movies](repositories/report.angular-ionic-ngxs-movies.md#%EF%B8%8F-angular-ionic-ngxs-movies) | [angular-ionic-ngxs-movies](repositories/report.angular-ionic-ngxs-movies.md#-angular-ionic-ngxs-movies) | 11 |
|sort-ngmodule-metadata-arrays | [angular-ionic-ngxs-movies](repositories/report.angular-ionic-ngxs-movies.md#%EF%B8%8F-angular-ionic-ngxs-movies) | [angular-ionic-ngxs-movies](repositories/report.angular-ionic-ngxs-movies.md#-angular-ionic-ngxs-movies) | 6 |
| | [ngx-toastr](repositories/report.ngx-toastr.md#%EF%B8%8F-ngx-toastr) | [ngx-toastr](repositories/report.ngx-toastr.md#-ngx-toastr) | 3 |
|directive-selector | [angular-realworld-example-app](repositories/report.angular-realworld-example-app.md#%EF%B8%8F-angular-realworld-example-app) | [angular-conduit](repositories/report.angular-realworld-example-app.md#-angular-conduit) | 1 |
|no-output-native | [angular-realworld-example-app](repositories/report.angular-realworld-example-app.md#%EF%B8%8F-angular-realworld-example-app) | [angular-conduit](repositories/report.angular-realworld-example-app.md#-angular-conduit) | 2 |
|no-duplicates-in-metadata-arrays | [angular-realworld-example-app](repositories/report.angular-realworld-example-app.md#%EF%B8%8F-angular-realworld-example-app) | [angular-conduit](repositories/report.angular-realworld-example-app.md#-angular-conduit) | 1 |
|use-lifecycle-interface | [gojs-angular-basic](repositories/report.gojs-angular-basic.md#%EF%B8%8F-gojs-angular-basic) | [first-app](repositories/report.gojs-angular-basic.md#-first-app) | 1 |
|no-output-on-prefix | [ngx-quill](repositories/report.ngx-quill.md#%EF%B8%8F-ngx-quill) | [ngx-quill](repositories/report.ngx-quill.md#-ngx-quill) | 9 |
| | [gojs-angular-basic](repositories/report.gojs-angular-basic.md#%EF%B8%8F-gojs-angular-basic) | [first-app](repositories/report.gojs-angular-basic.md#-first-app) | 2 |
|no-empty-lifecycle-method | [ng-three-template](repositories/report.ng-three-template.md#%EF%B8%8F-ng-three-template) | [ng-three-template](repositories/report.ng-three-template.md#-ng-three-template) | 5 |
|component-selector | [ngx-quill](repositories/report.ngx-quill.md#%EF%B8%8F-ngx-quill) | [ngx-quill](repositories/report.ngx-quill.md#-ngx-quill) | 3 |
|no-forward-ref | [ngx-quill](repositories/report.ngx-quill.md#%EF%B8%8F-ngx-quill) | [ngx-quill](repositories/report.ngx-quill.md#-ngx-quill) | 2 |
| | [QuickApp](repositories/report.QuickApp.md#%EF%B8%8F-QuickApp) | [quickapp.client](repositories/report.QuickApp.md#-quickapp.client) | 1 |
|component-class-suffix | [ngx-toastr](repositories/report.ngx-toastr.md#%EF%B8%8F-ngx-toastr) | [ngx-toastr](repositories/report.ngx-toastr.md#-ngx-toastr) | 5 |

