# 📑 Angular ESLint RULES Analysis Report 

## Index
<details><summary>Index</summary>

- [Global](#global)
- [Repositories Report](#repositories-report)
	- [ng-apexcharts](#-ng-apexcharts)
		- [Total](#-total)
		- [ng-apexcharts-demo](#-ng-apexcharts-demo)
		- [ng-apexcharts](#-ng-apexcharts)
	- [mean](#-mean)
	- [angular-16-crud-example](#-angular-16-crud-example)
	- [QuickApp](#-quickapp)
	- [ng-three-template](#-ng-three-template)
	- [gojs-angular-basic](#-gojs-angular-basic)
	- [angular-ionic-ngxs-movies](#-angular-ionic-ngxs-movies)
	- [angular-17-crud-example](#-angular-17-crud-example)
	- [angular-basics-project](#-angular-basics-project)
	- [Angular-Full-Stack](#-angular-full-stack)
	- [play-scala-angular-seed](#-play-scala-angular-seed)
	- [angular-realworld-example-app](#-angular-realworld-example-app)
	- [angular-example-app](#-angular-example-app)
	- [angular-gridster2](#-angular-gridster2)
		- [Total](#-total-1)
		- [gridster-app](#-gridster-app)
		- [angular-gridster2](#-angular-gridster2)
	- [ngx-quill](#-ngx-quill)
	- [ngx-toastr](#-ngx-toastr)
	- [angular-fontawesome](#-angular-fontawesome)
		- [Total](#-total-2)
		- [angular-fontawesome](#-angular-fontawesome)
		- [demo](#-demo)
	- [angular-calendar](#-angular-calendar)
		- [Total](#-total-3)
		- [demos](#-demos)
		- [angular-calendar](#-angular-calendar)
</details>

## Symbols

> [!NOTE]
> Symbols meaning
> - 💥 = errors
> - ⚠️ = warnings
> - 🔧 = fixable
> - ✅ = recommended
> - 💡 = has_suggestions
> - ❌ = not_found_in_angular_eslint_rules
> - 📚 = docs
> - 📄 = code
> - 🧪 = test



## Global

| 📏 Rule | 📚 | 📄 | 🧪 | Recommended<br>⚠️ Warnings | Recommended<br>💥 Errors | All<br>⚠️ Warnings | All<br>💥 Errors | 🔧 | ✅ | 💡 |
| --- | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| prefer-signals | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-signals.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-signals.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-signals) | 0 | 0 | 0 | 219 | 🔧 |  |  |
| prefer-on-push-component-change-detection | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-on-push-component-change-detection.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-on-push-component-change-detection.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-on-push-component-change-detection) | 0 | 0 | 0 | 125 |  |  | 💡 |
| use-component-view-encapsulation | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/use-component-view-encapsulation.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/use-component-view-encapsulation.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/use-component-view-encapsulation) | 0 | 0 | 0 | 59 |  |  | 💡 |
| relative-url-prefix | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/relative-url-prefix.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/relative-url-prefix.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/relative-url-prefix) | 0 | 0 | 0 | 50 |  |  |  |
| consistent-component-styles | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-component-styles.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/consistent-component-styles.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/consistent-component-styles) | 0 | 0 | 0 | 48 | 🔧 |  |  |
| component-max-inline-declarations | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/component-max-inline-declarations.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/component-max-inline-declarations.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/component-max-inline-declarations) | 0 | 0 | 0 | 47 |  |  |  |
| prefer-output-readonly | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-output-readonly.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-output-readonly.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-output-readonly) | 0 | 0 | 0 | 46 |  |  | 💡 |
| use-injectable-provided-in | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/use-injectable-provided-in.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/use-injectable-provided-in.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/use-injectable-provided-in) | 0 | 0 | 0 | 31 |  |  | 💡 |
| runtime-localize | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/runtime-localize.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/runtime-localize.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/runtime-localize) | 0 | 0 | 0 | 21 |  |  |  |
| prefer-standalone | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-standalone.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-standalone.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-standalone) | 0 | 12 | 0 | 12 | 🔧 | ✅ |  |
| no-output-on-prefix | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/no-output-on-prefix.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/no-output-on-prefix.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/no-output-on-prefix) | 0 | 11 | 0 | 11 |  | ✅ |  |
| prefer-standalone-component | ❌ | ❌ | ❌ | 0 | 0 | 0 | 11 | ❌ | ❌ | ❌ |
| sort-ngmodule-metadata-arrays | ❌ | ❌ | ❌ | 0 | 0 | 0 | 9 | ❌ | ❌ | ❌ |
| sort-lifecycle-methods | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/sort-lifecycle-methods.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/sort-lifecycle-methods.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/sort-lifecycle-methods) | 0 | 0 | 0 | 7 |  |  |  |
| use-component-selector | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/use-component-selector.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/use-component-selector.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/use-component-selector) | 0 | 0 | 0 | 6 |  |  |  |
| no-empty-lifecycle-method | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/no-empty-lifecycle-method.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/no-empty-lifecycle-method.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/no-empty-lifecycle-method) | 0 | 5 | 0 | 5 |  | ✅ | 💡 |
| component-class-suffix | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/component-class-suffix.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/component-class-suffix.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/component-class-suffix) | 0 | 5 | 0 | 5 |  | ✅ |  |
| no-forward-ref | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/no-forward-ref.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/no-forward-ref.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/no-forward-ref) | 0 | 0 | 0 | 3 |  |  |  |
| component-selector | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/component-selector.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/component-selector.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/component-selector) | 0 | 3 | 0 | 3 |  |  |  |
| no-output-native | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/no-output-native.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/no-output-native.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/no-output-native) | 0 | 2 | 0 | 2 |  | ✅ |  |
| use-lifecycle-interface | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/use-lifecycle-interface.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/use-lifecycle-interface.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/use-lifecycle-interface) | 1 | 0 | 0 | 1 | 🔧 |  |  |
| directive-selector | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/directive-selector.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/directive-selector.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/directive-selector) | 0 | 1 | 0 | 1 |  |  |  |
| no-duplicates-in-metadata-arrays | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/no-duplicates-in-metadata-arrays.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/no-duplicates-in-metadata-arrays.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/no-duplicates-in-metadata-arrays) | 0 | 0 | 0 | 1 |  |  |  |
| no-lifecycle-call | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/no-lifecycle-call.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/no-lifecycle-call.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/no-lifecycle-call) | 0 | 0 | 0 | 1 |  |  |  |
| no-host-metadata-property | ❌ | ❌ | ❌ | 0 | 1 | 0 | 1 | ❌ | ❌ | ❌ |




### Which projects has rules
<details>
<summary>prefer-on-push-component-change-detection</summary>

- ng-apexcharts -> ng-apexcharts-demo \[⚠️:0 💥:1]
- mean -> mean \[⚠️:0 💥:6]
- angular-16-crud-example -> angular-16-crud \[⚠️:0 💥:4]
- QuickApp -> quickapp.client \[⚠️:0 💥:19]
- gojs-angular-basic -> first-app \[⚠️:0 💥:3]
- angular-ionic-ngxs-movies -> angular-ionic-ngxs-movies \[⚠️:0 💥:11]
- angular-17-crud-example -> angular-17-crud \[⚠️:0 💥:4]
- angular-basics-project -> shopping-cart \[⚠️:0 💥:1]
- Angular-Full-Stack -> angular2-full-stack \[⚠️:0 💥:12]
- play-scala-angular-seed -> scala-play-angular-seed \[⚠️:0 💥:2]
- angular-realworld-example-app -> angular-conduit \[⚠️:0 💥:16]
- angular-gridster2 -> angular-gridster2 \[⚠️:0 💥:3]
- ngx-quill -> ngx-quill \[⚠️:0 💥:3]
- ngx-toastr -> ngx-toastr \[⚠️:0 💥:6]
- angular-fontawesome -> angular-fontawesome \[⚠️:0 💥:6]
- angular-fontawesome -> demo \[⚠️:0 💥:4]
- angular-calendar -> demos \[⚠️:0 💥:4]
- angular-calendar -> angular-calendar \[⚠️:0 💥:20]
</details>

<details>
<summary>consistent-component-styles</summary>

- ng-apexcharts -> ng-apexcharts-demo \[⚠️:0 💥:1]
- mean -> mean \[⚠️:0 💥:5]
- angular-16-crud-example -> angular-16-crud \[⚠️:0 💥:4]
- gojs-angular-basic -> first-app \[⚠️:0 💥:2]
- angular-17-crud-example -> angular-17-crud \[⚠️:0 💥:3]
- angular-basics-project -> shopping-cart \[⚠️:0 💥:1]
- Angular-Full-Stack -> angular2-full-stack \[⚠️:0 💥:4]
- play-scala-angular-seed -> scala-play-angular-seed \[⚠️:0 💥:2]
- angular-realworld-example-app -> angular-conduit \[⚠️:0 💥:1]
- angular-gridster2 -> angular-gridster2 \[⚠️:0 💥:3]
- ngx-quill -> ngx-quill \[⚠️:0 💥:3]
- angular-fontawesome -> demo \[⚠️:0 💥:1]
- angular-calendar -> demos \[⚠️:0 💥:17]
- angular-calendar -> angular-calendar \[⚠️:0 💥:1]
</details>

<details>
<summary>prefer-signals</summary>

- ng-apexcharts -> ng-apexcharts-demo \[⚠️:0 💥:1]
- mean -> mean \[⚠️:0 💥:1]
- angular-16-crud-example -> angular-16-crud \[⚠️:0 💥:2]
- ng-three-template -> ng-three-template \[⚠️:0 💥:1]
- gojs-angular-basic -> first-app \[⚠️:0 💥:5]
- angular-17-crud-example -> angular-17-crud \[⚠️:0 💥:2]
- Angular-Full-Stack -> angular2-full-stack \[⚠️:0 💥:3]
- angular-realworld-example-app -> angular-conduit \[⚠️:0 💥:9]
- ngx-quill -> ngx-quill \[⚠️:0 💥:2]
- angular-fontawesome -> angular-fontawesome \[⚠️:0 💥:37]
- angular-calendar -> demos \[⚠️:0 💥:7]
- angular-calendar -> angular-calendar \[⚠️:0 💥:149]
</details>

<details>
<summary>use-injectable-provided-in</summary>

- mean -> mean \[⚠️:0 💥:1]
- QuickApp -> quickapp.client \[⚠️:0 💥:7]
- angular-ionic-ngxs-movies -> angular-ionic-ngxs-movies \[⚠️:0 💥:4]
- Angular-Full-Stack -> angular2-full-stack \[⚠️:0 💥:5]
- play-scala-angular-seed -> scala-play-angular-seed \[⚠️:0 💥:1]
- angular-calendar -> demos \[⚠️:0 💥:7]
- angular-calendar -> angular-calendar \[⚠️:0 💥:6]
</details>

<details>
<summary>no-forward-ref</summary>

- QuickApp -> quickapp.client \[⚠️:0 💥:1]
- ngx-quill -> ngx-quill \[⚠️:0 💥:2]
</details>

<details>
<summary>no-empty-lifecycle-method</summary>

- ng-three-template -> ng-three-template \[⚠️:0 💥:5]
</details>

<details>
<summary>use-component-view-encapsulation</summary>

- ng-three-template -> ng-three-template \[⚠️:0 💥:7]
- angular-ionic-ngxs-movies -> angular-ionic-ngxs-movies \[⚠️:0 💥:10]
- angular-gridster2 -> gridster-app \[⚠️:0 💥:25]
- angular-gridster2 -> angular-gridster2 \[⚠️:0 💥:3]
- ngx-quill -> ngx-quill \[⚠️:0 💥:2]
- angular-calendar -> demos \[⚠️:0 💥:12]
</details>

<details>
<summary>use-lifecycle-interface</summary>

- gojs-angular-basic -> first-app \[⚠️:0 💥:1]
</details>

<details>
<summary>no-output-on-prefix</summary>

- gojs-angular-basic -> first-app \[⚠️:0 💥:2]
- ngx-quill -> ngx-quill \[⚠️:0 💥:9]
</details>

<details>
<summary>prefer-output-readonly</summary>

- gojs-angular-basic -> first-app \[⚠️:0 💥:2]
- angular-realworld-example-app -> angular-conduit \[⚠️:0 💥:3]
- angular-gridster2 -> angular-gridster2 \[⚠️:0 💥:3]
- ngx-quill -> ngx-quill \[⚠️:0 💥:9]
- angular-calendar -> demos \[⚠️:0 💥:3]
- angular-calendar -> angular-calendar \[⚠️:0 💥:26]
</details>

<details>
<summary>prefer-standalone-component</summary>

- angular-ionic-ngxs-movies -> angular-ionic-ngxs-movies \[⚠️:0 💥:11]
</details>

<details>
<summary>sort-ngmodule-metadata-arrays</summary>

- angular-ionic-ngxs-movies -> angular-ionic-ngxs-movies \[⚠️:0 💥:6]
- ngx-toastr -> ngx-toastr \[⚠️:0 💥:3]
</details>

<details>
<summary>relative-url-prefix</summary>

- angular-ionic-ngxs-movies -> angular-ionic-ngxs-movies \[⚠️:0 💥:7]
- angular-calendar -> demos \[⚠️:0 💥:43]
</details>

<details>
<summary>prefer-standalone</summary>

- Angular-Full-Stack -> angular2-full-stack \[⚠️:0 💥:12]
</details>

<details>
<summary>directive-selector</summary>

- angular-realworld-example-app -> angular-conduit \[⚠️:0 💥:1]
</details>

<details>
<summary>no-output-native</summary>

- angular-realworld-example-app -> angular-conduit \[⚠️:0 💥:2]
</details>

<details>
<summary>component-max-inline-declarations</summary>

- angular-realworld-example-app -> angular-conduit \[⚠️:0 💥:6]
- ngx-quill -> ngx-quill \[⚠️:0 💥:2]
- ngx-toastr -> ngx-toastr \[⚠️:0 💥:11]
- angular-calendar -> demos \[⚠️:0 💥:11]
- angular-calendar -> angular-calendar \[⚠️:0 💥:17]
</details>

<details>
<summary>no-duplicates-in-metadata-arrays</summary>

- angular-realworld-example-app -> angular-conduit \[⚠️:0 💥:1]
</details>

<details>
<summary>runtime-localize</summary>

- angular-example-app -> angularexampleapp \[⚠️:0 💥:21]
</details>

<details>
<summary>sort-lifecycle-methods</summary>

- angular-gridster2 -> angular-gridster2 \[⚠️:0 💥:2]
- angular-fontawesome -> angular-fontawesome \[⚠️:0 💥:2]
- angular-calendar -> angular-calendar \[⚠️:0 💥:3]
</details>

<details>
<summary>component-selector</summary>

- ngx-quill -> ngx-quill \[⚠️:0 💥:3]
</details>

<details>
<summary>component-class-suffix</summary>

- ngx-toastr -> ngx-toastr \[⚠️:0 💥:5]
</details>

<details>
<summary>no-lifecycle-call</summary>

- angular-fontawesome -> angular-fontawesome \[⚠️:0 💥:1]
</details>

<details>
<summary>no-host-metadata-property</summary>

- angular-calendar -> angular-calendar \[⚠️:0 💥:1]
</details>

<details>
<summary>use-component-selector</summary>

- angular-calendar -> angular-calendar \[⚠️:0 💥:6]
</details>



## Repositories Report

### 🖊️ ng-apexcharts

**Info from repo**:
- **URL**: <https://github.com/apexcharts/ng-apexcharts>
- **LastCommit**:
	- **Hash**: 8e4f59daece2bbe9605dbdef25488983beb31f85
	- **Author**: Juned Chhipa
	- **Message**: Merge remote-tracking branch 'refs/remotes/origin/master'
	- **Date**: Wed Mar 19 14:42:20 2025 +0530

#### 🧮 Total

| 📏 Rule | 📚 | 📄 | 🧪 | Recommended<br>⚠️ Warnings | Recommended<br>💥 Errors | All<br>⚠️ Warnings | All<br>💥 Errors | 🔧 | ✅ | 💡 |
| --- | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| prefer-on-push-component-change-detection | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-on-push-component-change-detection.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-on-push-component-change-detection.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-on-push-component-change-detection) | 0 | 0 | 0 | 1 |  |  | 💡 |
| consistent-component-styles | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-component-styles.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/consistent-component-styles.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/consistent-component-styles) | 0 | 0 | 0 | 1 | 🔧 |  |  |
| prefer-signals | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-signals.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-signals.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-signals) | 0 | 0 | 0 | 1 | 🔧 |  |  |




#### 💻 ng-apexcharts-demo

| 📏 Rule | 📚 | 📄 | 🧪 | Recommended<br>⚠️ Warnings | Recommended<br>⚠️ Warnings<br>Fixables | Recommended<br>⚠️ Warnings<br>With Suggestions | Recommended<br>💥 Errors | Recommended<br>💥 Errors<br>Fixables | Recommended<br>💥 Errors<br>With Suggestions | All<br>⚠️ Warnings | All<br>⚠️ Warnings<br>Fixables | All<br>⚠️ Warnings<br>With Suggestions | All<br>💥 Errors | All<br>💥 Errors<br>Fixables | All<br>💥 Errors<br>With Suggestions | 🔧 | ✅ | 💡 |
| --- | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| prefer-on-push-component-change-detection | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-on-push-component-change-detection.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-on-push-component-change-detection.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-on-push-component-change-detection) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 |  |  | 💡 |
| consistent-component-styles | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-component-styles.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/consistent-component-styles.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/consistent-component-styles) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 0 | 🔧 |  |  |
| prefer-signals | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-signals.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-signals.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-signals) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 🔧 |  |  |


#### 💻 ng-apexcharts


> [!WARNING]
> The project pass linting



### 🖊️ mean

**Info from repo**:
- **URL**: <https://github.com/linnovate/mean>
- **LastCommit**:
	- **Hash**: 5c12e1303c911345f17229ce0b5efbfd3e0a32df
	- **Author**: Bob Conan
	- **Message**: Update README.md, fix typos (#2073)
	- **Date**: Thu Nov 7 16:59:52 2024 -0600

| 📏 Rule | 📚 | 📄 | 🧪 | Recommended<br>⚠️ Warnings | Recommended<br>⚠️ Warnings<br>Fixables | Recommended<br>⚠️ Warnings<br>With Suggestions | Recommended<br>💥 Errors | Recommended<br>💥 Errors<br>Fixables | Recommended<br>💥 Errors<br>With Suggestions | All<br>⚠️ Warnings | All<br>⚠️ Warnings<br>Fixables | All<br>⚠️ Warnings<br>With Suggestions | All<br>💥 Errors | All<br>💥 Errors<br>Fixables | All<br>💥 Errors<br>With Suggestions | 🔧 | ✅ | 💡 |
| --- | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| prefer-on-push-component-change-detection | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-on-push-component-change-detection.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-on-push-component-change-detection.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-on-push-component-change-detection) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 6 | 0 | 6 |  |  | 💡 |
| consistent-component-styles | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-component-styles.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/consistent-component-styles.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/consistent-component-styles) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 5 | 5 | 0 | 🔧 |  |  |
| use-injectable-provided-in | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/use-injectable-provided-in.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/use-injectable-provided-in.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/use-injectable-provided-in) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 |  |  | 💡 |
| prefer-signals | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-signals.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-signals.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-signals) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 🔧 |  |  |




### 🖊️ angular-16-crud-example

**Info from repo**:
- **URL**: <https://github.com/bezkoder/angular-16-crud-example>
- **LastCommit**:
	- **Hash**: e760ebb02fd950b478b0fa863e767b672929b10d
	- **Author**: tienbku
	- **Message**: first commit
	- **Date**: Thu May 25 15:57:13 2023 +0700

| 📏 Rule | 📚 | 📄 | 🧪 | Recommended<br>⚠️ Warnings | Recommended<br>⚠️ Warnings<br>Fixables | Recommended<br>⚠️ Warnings<br>With Suggestions | Recommended<br>💥 Errors | Recommended<br>💥 Errors<br>Fixables | Recommended<br>💥 Errors<br>With Suggestions | All<br>⚠️ Warnings | All<br>⚠️ Warnings<br>Fixables | All<br>⚠️ Warnings<br>With Suggestions | All<br>💥 Errors | All<br>💥 Errors<br>Fixables | All<br>💥 Errors<br>With Suggestions | 🔧 | ✅ | 💡 |
| --- | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| prefer-on-push-component-change-detection | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-on-push-component-change-detection.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-on-push-component-change-detection.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-on-push-component-change-detection) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 4 |  |  | 💡 |
| consistent-component-styles | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-component-styles.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/consistent-component-styles.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/consistent-component-styles) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 4 | 0 | 🔧 |  |  |
| prefer-signals | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-signals.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-signals.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-signals) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 🔧 |  |  |




### 🖊️ QuickApp

**Info from repo**:
- **URL**: <https://github.com/emonney/QuickApp>
- **LastCommit**:
	- **Hash**: 435f959f6d3ef510fef831e64cb6ebe03494a944
	- **Author**: Ebenezer Monney
	- **Message**: removed stylePreprocessorOptions from test config
	- **Date**: Sun Dec 1 13:21:23 2024 +0000

| 📏 Rule | 📚 | 📄 | 🧪 | Recommended<br>⚠️ Warnings | Recommended<br>⚠️ Warnings<br>Fixables | Recommended<br>⚠️ Warnings<br>With Suggestions | Recommended<br>💥 Errors | Recommended<br>💥 Errors<br>Fixables | Recommended<br>💥 Errors<br>With Suggestions | All<br>⚠️ Warnings | All<br>⚠️ Warnings<br>Fixables | All<br>⚠️ Warnings<br>With Suggestions | All<br>💥 Errors | All<br>💥 Errors<br>Fixables | All<br>💥 Errors<br>With Suggestions | 🔧 | ✅ | 💡 |
| --- | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| prefer-on-push-component-change-detection | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-on-push-component-change-detection.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-on-push-component-change-detection.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-on-push-component-change-detection) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 19 | 0 | 19 |  |  | 💡 |
| use-injectable-provided-in | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/use-injectable-provided-in.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/use-injectable-provided-in.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/use-injectable-provided-in) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 7 | 0 | 7 |  |  | 💡 |
| no-forward-ref | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/no-forward-ref.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/no-forward-ref.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/no-forward-ref) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |  |  |  |




### 🖊️ ng-three-template

**Info from repo**:
- **URL**: <https://github.com/JohnnyDevNull/ng-three-template>
- **LastCommit**:
	- **Hash**: 31fec97f2b3a25561f68b845a3aa63b64b4c70c2
	- **Author**: JohnnyDevNull
	- **Message**: Update README.md
	- **Date**: Thu May 2 12:10:19 2024 +0200

| 📏 Rule | 📚 | 📄 | 🧪 | Recommended<br>⚠️ Warnings | Recommended<br>⚠️ Warnings<br>Fixables | Recommended<br>⚠️ Warnings<br>With Suggestions | Recommended<br>💥 Errors | Recommended<br>💥 Errors<br>Fixables | Recommended<br>💥 Errors<br>With Suggestions | All<br>⚠️ Warnings | All<br>⚠️ Warnings<br>Fixables | All<br>⚠️ Warnings<br>With Suggestions | All<br>💥 Errors | All<br>💥 Errors<br>Fixables | All<br>💥 Errors<br>With Suggestions | 🔧 | ✅ | 💡 |
| --- | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| use-component-view-encapsulation | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/use-component-view-encapsulation.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/use-component-view-encapsulation.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/use-component-view-encapsulation) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 7 | 0 | 7 |  |  | 💡 |
| no-empty-lifecycle-method | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/no-empty-lifecycle-method.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/no-empty-lifecycle-method.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/no-empty-lifecycle-method) | 0 | 0 | 0 | 5 | 0 | 5 | 0 | 0 | 0 | 5 | 0 | 5 |  | ✅ | 💡 |
| prefer-signals | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-signals.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-signals.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-signals) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 🔧 |  |  |




### 🖊️ gojs-angular-basic

**Info from repo**:
- **URL**: <https://github.com/NorthwoodsSoftware/gojs-angular-basic>
- **LastCommit**:
	- **Hash**: 6662f0a49e70f94c5705521dffa1af845256726f
	- **Author**: Simon Sarris
	- **Message**: corrected inspector
	- **Date**: Fri Jan 31 10:42:13 2025 -0500

| 📏 Rule | 📚 | 📄 | 🧪 | Recommended<br>⚠️ Warnings | Recommended<br>⚠️ Warnings<br>Fixables | Recommended<br>⚠️ Warnings<br>With Suggestions | Recommended<br>💥 Errors | Recommended<br>💥 Errors<br>Fixables | Recommended<br>💥 Errors<br>With Suggestions | All<br>⚠️ Warnings | All<br>⚠️ Warnings<br>Fixables | All<br>⚠️ Warnings<br>With Suggestions | All<br>💥 Errors | All<br>💥 Errors<br>Fixables | All<br>💥 Errors<br>With Suggestions | 🔧 | ✅ | 💡 |
| --- | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| prefer-signals | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-signals.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-signals.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-signals) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 5 | 0 | 0 | 🔧 |  |  |
| prefer-on-push-component-change-detection | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-on-push-component-change-detection.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-on-push-component-change-detection.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-on-push-component-change-detection) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 3 |  |  | 💡 |
| no-output-on-prefix | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/no-output-on-prefix.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/no-output-on-prefix.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/no-output-on-prefix) | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |  | ✅ |  |
| consistent-component-styles | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-component-styles.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/consistent-component-styles.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/consistent-component-styles) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 2 | 0 | 🔧 |  |  |
| prefer-output-readonly | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-output-readonly.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-output-readonly.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-output-readonly) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 2 |  |  | 💡 |
| use-lifecycle-interface | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/use-lifecycle-interface.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/use-lifecycle-interface.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/use-lifecycle-interface) | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 0 | 🔧 |  |  |




### 🖊️ angular-ionic-ngxs-movies

**Info from repo**:
- **URL**: <https://github.com/abritopach/angular-ionic-ngxs-movies>
- **LastCommit**:
	- **Hash**: 8f02cdce74b58725f3010362e926a38688cf48f2
	- **Author**: Adrián Brito Pacheco
	- **Message**: Merge pull request #98 from abritopach/develop
	- **Date**: Thu Feb 8 22:43:28 2024 +0000

| 📏 Rule | 📚 | 📄 | 🧪 | Recommended<br>⚠️ Warnings | Recommended<br>⚠️ Warnings<br>Fixables | Recommended<br>⚠️ Warnings<br>With Suggestions | Recommended<br>💥 Errors | Recommended<br>💥 Errors<br>Fixables | Recommended<br>💥 Errors<br>With Suggestions | All<br>⚠️ Warnings | All<br>⚠️ Warnings<br>Fixables | All<br>⚠️ Warnings<br>With Suggestions | All<br>💥 Errors | All<br>💥 Errors<br>Fixables | All<br>💥 Errors<br>With Suggestions | 🔧 | ✅ | 💡 |
| --- | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| prefer-standalone-component | ❌ | ❌ | ❌ | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 11 | 11 | 0 | ❌ | ❌ | ❌ |
| prefer-on-push-component-change-detection | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-on-push-component-change-detection.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-on-push-component-change-detection.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-on-push-component-change-detection) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 11 | 0 | 11 |  |  | 💡 |
| use-component-view-encapsulation | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/use-component-view-encapsulation.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/use-component-view-encapsulation.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/use-component-view-encapsulation) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 10 | 0 | 10 |  |  | 💡 |
| relative-url-prefix | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/relative-url-prefix.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/relative-url-prefix.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/relative-url-prefix) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 7 | 0 | 0 |  |  |  |
| sort-ngmodule-metadata-arrays | ❌ | ❌ | ❌ | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 6 | 6 | 0 | ❌ | ❌ | ❌ |
| use-injectable-provided-in | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/use-injectable-provided-in.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/use-injectable-provided-in.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/use-injectable-provided-in) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 4 |  |  | 💡 |




### 🖊️ angular-17-crud-example

**Info from repo**:
- **URL**: <https://github.com/bezkoder/angular-17-crud-example>
- **LastCommit**:
	- **Hash**: c0af324c915716b34f61ae10acae98092ec8570a
	- **Author**: tienbku
	- **Message**: update references
	- **Date**: Sun Feb 4 15:39:28 2024 +0700

| 📏 Rule | 📚 | 📄 | 🧪 | Recommended<br>⚠️ Warnings | Recommended<br>⚠️ Warnings<br>Fixables | Recommended<br>⚠️ Warnings<br>With Suggestions | Recommended<br>💥 Errors | Recommended<br>💥 Errors<br>Fixables | Recommended<br>💥 Errors<br>With Suggestions | All<br>⚠️ Warnings | All<br>⚠️ Warnings<br>Fixables | All<br>⚠️ Warnings<br>With Suggestions | All<br>💥 Errors | All<br>💥 Errors<br>Fixables | All<br>💥 Errors<br>With Suggestions | 🔧 | ✅ | 💡 |
| --- | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| prefer-on-push-component-change-detection | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-on-push-component-change-detection.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-on-push-component-change-detection.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-on-push-component-change-detection) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 4 |  |  | 💡 |
| consistent-component-styles | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-component-styles.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/consistent-component-styles.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/consistent-component-styles) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 3 | 0 | 🔧 |  |  |
| prefer-signals | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-signals.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-signals.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-signals) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 | 🔧 |  |  |




### 🖊️ angular-basics-project

**Info from repo**:
- **URL**: <https://github.com/ako-tech/angular-basics-project>
- **LastCommit**:
	- **Hash**: 504cab8f87defbbaf6462988956b8176861ba802
	- **Author**: akotech
	- **Message**: update playlist link
	- **Date**: Sun Oct 24 18:47:33 2021 +0200

| 📏 Rule | 📚 | 📄 | 🧪 | Recommended<br>⚠️ Warnings | Recommended<br>⚠️ Warnings<br>Fixables | Recommended<br>⚠️ Warnings<br>With Suggestions | Recommended<br>💥 Errors | Recommended<br>💥 Errors<br>Fixables | Recommended<br>💥 Errors<br>With Suggestions | All<br>⚠️ Warnings | All<br>⚠️ Warnings<br>Fixables | All<br>⚠️ Warnings<br>With Suggestions | All<br>💥 Errors | All<br>💥 Errors<br>Fixables | All<br>💥 Errors<br>With Suggestions | 🔧 | ✅ | 💡 |
| --- | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| prefer-on-push-component-change-detection | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-on-push-component-change-detection.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-on-push-component-change-detection.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-on-push-component-change-detection) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 |  |  | 💡 |
| consistent-component-styles | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-component-styles.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/consistent-component-styles.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/consistent-component-styles) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 0 | 🔧 |  |  |




### 🖊️ Angular-Full-Stack

**Info from repo**:
- **URL**: <https://github.com/DavideViolante/Angular-Full-Stack>
- **LastCommit**:
	- **Hash**: 64a8ed9eb474c08896cbc6b436a810739c6a534e
	- **Author**: DavideViolante
	- **Message**: chore(deps): upgrade to angular v19
	- **Date**: Wed Jan 22 09:38:49 2025 +0100

| 📏 Rule | 📚 | 📄 | 🧪 | Recommended<br>⚠️ Warnings | Recommended<br>⚠️ Warnings<br>Fixables | Recommended<br>⚠️ Warnings<br>With Suggestions | Recommended<br>💥 Errors | Recommended<br>💥 Errors<br>Fixables | Recommended<br>💥 Errors<br>With Suggestions | All<br>⚠️ Warnings | All<br>⚠️ Warnings<br>Fixables | All<br>⚠️ Warnings<br>With Suggestions | All<br>💥 Errors | All<br>💥 Errors<br>Fixables | All<br>💥 Errors<br>With Suggestions | 🔧 | ✅ | 💡 |
| --- | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| prefer-standalone | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-standalone.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-standalone.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-standalone) | 0 | 0 | 0 | 12 | 12 | 0 | 0 | 0 | 0 | 12 | 12 | 0 | 🔧 | ✅ |  |
| prefer-on-push-component-change-detection | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-on-push-component-change-detection.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-on-push-component-change-detection.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-on-push-component-change-detection) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 12 | 0 | 12 |  |  | 💡 |
| use-injectable-provided-in | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/use-injectable-provided-in.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/use-injectable-provided-in.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/use-injectable-provided-in) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 5 | 0 | 5 |  |  | 💡 |
| consistent-component-styles | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-component-styles.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/consistent-component-styles.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/consistent-component-styles) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 4 | 0 | 🔧 |  |  |
| prefer-signals | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-signals.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-signals.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-signals) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 0 | 🔧 |  |  |




### 🖊️ play-scala-angular-seed

**Info from repo**:
- **URL**: <https://github.com/playframework/play-scala-angular-seed>
- **LastCommit**:
	- **Hash**: 814ab8bc3a2002edcf71952c7aed7eaf635a54b4
	- **Author**: Matthias Kurz
	- **Message**: Merge pull request #88 from scala-steward/update/play-filters-helpers-3.0.7
	- **Date**: Thu Mar 13 23:39:41 2025 +0100

| 📏 Rule | 📚 | 📄 | 🧪 | Recommended<br>⚠️ Warnings | Recommended<br>⚠️ Warnings<br>Fixables | Recommended<br>⚠️ Warnings<br>With Suggestions | Recommended<br>💥 Errors | Recommended<br>💥 Errors<br>Fixables | Recommended<br>💥 Errors<br>With Suggestions | All<br>⚠️ Warnings | All<br>⚠️ Warnings<br>Fixables | All<br>⚠️ Warnings<br>With Suggestions | All<br>💥 Errors | All<br>💥 Errors<br>Fixables | All<br>💥 Errors<br>With Suggestions | 🔧 | ✅ | 💡 |
| --- | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| prefer-on-push-component-change-detection | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-on-push-component-change-detection.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-on-push-component-change-detection.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-on-push-component-change-detection) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 2 |  |  | 💡 |
| consistent-component-styles | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-component-styles.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/consistent-component-styles.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/consistent-component-styles) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 2 | 0 | 🔧 |  |  |
| use-injectable-provided-in | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/use-injectable-provided-in.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/use-injectable-provided-in.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/use-injectable-provided-in) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 |  |  | 💡 |




### 🖊️ angular-realworld-example-app

**Info from repo**:
- **URL**: <https://github.com/gothinkster/angular-realworld-example-app>
- **LastCommit**:
	- **Hash**: 2555e2f86dd85f6b9e3a34e720bb46689c8646f8
	- **Author**: Gerome Grignon
	- **Message**: remove demo link
	- **Date**: Mon Dec 9 09:26:42 2024 +0100

| 📏 Rule | 📚 | 📄 | 🧪 | Recommended<br>⚠️ Warnings | Recommended<br>⚠️ Warnings<br>Fixables | Recommended<br>⚠️ Warnings<br>With Suggestions | Recommended<br>💥 Errors | Recommended<br>💥 Errors<br>Fixables | Recommended<br>💥 Errors<br>With Suggestions | All<br>⚠️ Warnings | All<br>⚠️ Warnings<br>Fixables | All<br>⚠️ Warnings<br>With Suggestions | All<br>💥 Errors | All<br>💥 Errors<br>Fixables | All<br>💥 Errors<br>With Suggestions | 🔧 | ✅ | 💡 |
| --- | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| prefer-on-push-component-change-detection | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-on-push-component-change-detection.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-on-push-component-change-detection.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-on-push-component-change-detection) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 16 | 0 | 16 |  |  | 💡 |
| prefer-signals | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-signals.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-signals.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-signals) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 9 | 0 | 0 | 🔧 |  |  |
| component-max-inline-declarations | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/component-max-inline-declarations.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/component-max-inline-declarations.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/component-max-inline-declarations) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 6 | 0 | 0 |  |  |  |
| prefer-output-readonly | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-output-readonly.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-output-readonly.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-output-readonly) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 3 |  |  | 💡 |
| no-output-native | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/no-output-native.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/no-output-native.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/no-output-native) | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |  | ✅ |  |
| directive-selector | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/directive-selector.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/directive-selector.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/directive-selector) | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |  |  |  |
| consistent-component-styles | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-component-styles.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/consistent-component-styles.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/consistent-component-styles) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 0 | 🔧 |  |  |
| no-duplicates-in-metadata-arrays | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/no-duplicates-in-metadata-arrays.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/no-duplicates-in-metadata-arrays.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/no-duplicates-in-metadata-arrays) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |  |  |  |




### 🖊️ angular-example-app

**Info from repo**:
- **URL**: <https://github.com/Ismaestro/angular-example-app>
- **LastCommit**:
	- **Hash**: b43fcab316a8a4c87549eca67a8b7d915f850434
	- **Author**: ismaestro
	- **Message**: fix(tools): solve stylelint issues
	- **Date**: Sat Feb 1 07:47:16 2025 +0100

| 📏 Rule | 📚 | 📄 | 🧪 | Recommended<br>⚠️ Warnings | Recommended<br>⚠️ Warnings<br>Fixables | Recommended<br>⚠️ Warnings<br>With Suggestions | Recommended<br>💥 Errors | Recommended<br>💥 Errors<br>Fixables | Recommended<br>💥 Errors<br>With Suggestions | All<br>⚠️ Warnings | All<br>⚠️ Warnings<br>Fixables | All<br>⚠️ Warnings<br>With Suggestions | All<br>💥 Errors | All<br>💥 Errors<br>Fixables | All<br>💥 Errors<br>With Suggestions | 🔧 | ✅ | 💡 |
| --- | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| runtime-localize | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/runtime-localize.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/runtime-localize.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/runtime-localize) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 21 | 0 | 0 |  |  |  |




### 🖊️ angular-gridster2

**Info from repo**:
- **URL**: <https://github.com/tiberiuzuld/angular-gridster2>
- **LastCommit**:
	- **Hash**: 59e2b0de4dc71983f874e208f3466ba6ebb3fac4
	- **Author**: Tiberiu Zuld
	- **Message**: chore: fix npm repository url
	- **Date**: Thu Dec 5 09:26:29 2024 +0200

#### 🧮 Total

| 📏 Rule | 📚 | 📄 | 🧪 | Recommended<br>⚠️ Warnings | Recommended<br>💥 Errors | All<br>⚠️ Warnings | All<br>💥 Errors | 🔧 | ✅ | 💡 |
| --- | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| use-component-view-encapsulation | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/use-component-view-encapsulation.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/use-component-view-encapsulation.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/use-component-view-encapsulation) | 0 | 0 | 0 | 28 |  |  | 💡 |
| prefer-on-push-component-change-detection | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-on-push-component-change-detection.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-on-push-component-change-detection.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-on-push-component-change-detection) | 0 | 0 | 0 | 3 |  |  | 💡 |
| consistent-component-styles | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-component-styles.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/consistent-component-styles.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/consistent-component-styles) | 0 | 0 | 0 | 3 | 🔧 |  |  |
| prefer-output-readonly | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-output-readonly.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-output-readonly.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-output-readonly) | 0 | 0 | 0 | 3 |  |  | 💡 |
| sort-lifecycle-methods | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/sort-lifecycle-methods.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/sort-lifecycle-methods.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/sort-lifecycle-methods) | 0 | 0 | 0 | 2 |  |  |  |




#### 💻 gridster-app

| 📏 Rule | 📚 | 📄 | 🧪 | Recommended<br>⚠️ Warnings | Recommended<br>⚠️ Warnings<br>Fixables | Recommended<br>⚠️ Warnings<br>With Suggestions | Recommended<br>💥 Errors | Recommended<br>💥 Errors<br>Fixables | Recommended<br>💥 Errors<br>With Suggestions | All<br>⚠️ Warnings | All<br>⚠️ Warnings<br>Fixables | All<br>⚠️ Warnings<br>With Suggestions | All<br>💥 Errors | All<br>💥 Errors<br>Fixables | All<br>💥 Errors<br>With Suggestions | 🔧 | ✅ | 💡 |
| --- | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| use-component-view-encapsulation | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/use-component-view-encapsulation.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/use-component-view-encapsulation.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/use-component-view-encapsulation) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 25 | 0 | 25 |  |  | 💡 |


#### 💻 angular-gridster2

| 📏 Rule | 📚 | 📄 | 🧪 | Recommended<br>⚠️ Warnings | Recommended<br>⚠️ Warnings<br>Fixables | Recommended<br>⚠️ Warnings<br>With Suggestions | Recommended<br>💥 Errors | Recommended<br>💥 Errors<br>Fixables | Recommended<br>💥 Errors<br>With Suggestions | All<br>⚠️ Warnings | All<br>⚠️ Warnings<br>Fixables | All<br>⚠️ Warnings<br>With Suggestions | All<br>💥 Errors | All<br>💥 Errors<br>Fixables | All<br>💥 Errors<br>With Suggestions | 🔧 | ✅ | 💡 |
| --- | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| prefer-on-push-component-change-detection | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-on-push-component-change-detection.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-on-push-component-change-detection.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-on-push-component-change-detection) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 3 |  |  | 💡 |
| consistent-component-styles | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-component-styles.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/consistent-component-styles.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/consistent-component-styles) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 3 | 0 | 🔧 |  |  |
| use-component-view-encapsulation | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/use-component-view-encapsulation.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/use-component-view-encapsulation.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/use-component-view-encapsulation) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 3 |  |  | 💡 |
| prefer-output-readonly | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-output-readonly.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-output-readonly.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-output-readonly) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 3 |  |  | 💡 |
| sort-lifecycle-methods | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/sort-lifecycle-methods.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/sort-lifecycle-methods.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/sort-lifecycle-methods) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |  |  |  |




### 🖊️ ngx-quill

**Info from repo**:
- **URL**: <https://github.com/KillerCodeMonkey/ngx-quill>
- **LastCommit**:
	- **Hash**: e7ea1915838ae668f588be4d71d40d63b7b27611
	- **Author**: KillerCodeMonkey
	- **Message**: chore: bump version
	- **Date**: Mon Feb 24 09:57:07 2025 +0100

| 📏 Rule | 📚 | 📄 | 🧪 | Recommended<br>⚠️ Warnings | Recommended<br>⚠️ Warnings<br>Fixables | Recommended<br>⚠️ Warnings<br>With Suggestions | Recommended<br>💥 Errors | Recommended<br>💥 Errors<br>Fixables | Recommended<br>💥 Errors<br>With Suggestions | All<br>⚠️ Warnings | All<br>⚠️ Warnings<br>Fixables | All<br>⚠️ Warnings<br>With Suggestions | All<br>💥 Errors | All<br>💥 Errors<br>Fixables | All<br>💥 Errors<br>With Suggestions | 🔧 | ✅ | 💡 |
| --- | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| no-output-on-prefix | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/no-output-on-prefix.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/no-output-on-prefix.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/no-output-on-prefix) | 0 | 0 | 0 | 9 | 0 | 0 | 0 | 0 | 0 | 9 | 0 | 0 |  | ✅ |  |
| prefer-output-readonly | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-output-readonly.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-output-readonly.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-output-readonly) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 9 | 0 | 9 |  |  | 💡 |
| component-selector | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/component-selector.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/component-selector.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/component-selector) | 0 | 0 | 0 | 3 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 0 |  |  |  |
| prefer-on-push-component-change-detection | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-on-push-component-change-detection.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-on-push-component-change-detection.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-on-push-component-change-detection) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 3 |  |  | 💡 |
| consistent-component-styles | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-component-styles.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/consistent-component-styles.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/consistent-component-styles) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 3 | 0 | 🔧 |  |  |
| prefer-signals | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-signals.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-signals.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-signals) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 2 | 🔧 |  |  |
| no-forward-ref | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/no-forward-ref.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/no-forward-ref.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/no-forward-ref) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |  |  |  |
| component-max-inline-declarations | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/component-max-inline-declarations.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/component-max-inline-declarations.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/component-max-inline-declarations) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |  |  |  |
| use-component-view-encapsulation | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/use-component-view-encapsulation.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/use-component-view-encapsulation.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/use-component-view-encapsulation) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 2 |  |  | 💡 |




### 🖊️ ngx-toastr

**Info from repo**:
- **URL**: <https://github.com/scttcper/ngx-toastr>
- **LastCommit**:
	- **Hash**: e688d8039158bc83a9fe4ac08589f2ab8c550466
	- **Author**: Chris Barr
	- **Message**: docs: fix demo to show progress for pink toast (#1023)
	- **Date**: Tue Aug 27 17:04:26 2024 -0400

| 📏 Rule | 📚 | 📄 | 🧪 | Recommended<br>⚠️ Warnings | Recommended<br>⚠️ Warnings<br>Fixables | Recommended<br>⚠️ Warnings<br>With Suggestions | Recommended<br>💥 Errors | Recommended<br>💥 Errors<br>Fixables | Recommended<br>💥 Errors<br>With Suggestions | All<br>⚠️ Warnings | All<br>⚠️ Warnings<br>Fixables | All<br>⚠️ Warnings<br>With Suggestions | All<br>💥 Errors | All<br>💥 Errors<br>Fixables | All<br>💥 Errors<br>With Suggestions | 🔧 | ✅ | 💡 |
| --- | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| component-max-inline-declarations | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/component-max-inline-declarations.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/component-max-inline-declarations.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/component-max-inline-declarations) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 11 | 0 | 0 |  |  |  |
| prefer-on-push-component-change-detection | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-on-push-component-change-detection.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-on-push-component-change-detection.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-on-push-component-change-detection) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 6 | 0 | 6 |  |  | 💡 |
| component-class-suffix | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/component-class-suffix.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/component-class-suffix.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/component-class-suffix) | 0 | 0 | 0 | 5 | 0 | 0 | 0 | 0 | 0 | 5 | 0 | 0 |  | ✅ |  |
| sort-ngmodule-metadata-arrays | ❌ | ❌ | ❌ | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 3 | 0 | ❌ | ❌ | ❌ |




### 🖊️ angular-fontawesome

**Info from repo**:
- **URL**: <https://github.com/FortAwesome/angular-fontawesome>
- **LastCommit**:
	- **Hash**: 88ea9db3780a4a86d34f69920105166d914497ea
	- **Author**: Yaroslav Admin
	- **Message**: Release 1.0.0
	- **Date**: Thu Nov 21 00:00:00 2024 +0100

#### 🧮 Total

| 📏 Rule | 📚 | 📄 | 🧪 | Recommended<br>⚠️ Warnings | Recommended<br>💥 Errors | All<br>⚠️ Warnings | All<br>💥 Errors | 🔧 | ✅ | 💡 |
| --- | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| prefer-signals | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-signals.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-signals.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-signals) | 0 | 0 | 0 | 37 | 🔧 |  |  |
| prefer-on-push-component-change-detection | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-on-push-component-change-detection.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-on-push-component-change-detection.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-on-push-component-change-detection) | 0 | 0 | 0 | 10 |  |  | 💡 |
| sort-lifecycle-methods | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/sort-lifecycle-methods.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/sort-lifecycle-methods.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/sort-lifecycle-methods) | 0 | 0 | 0 | 2 |  |  |  |
| no-lifecycle-call | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/no-lifecycle-call.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/no-lifecycle-call.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/no-lifecycle-call) | 0 | 0 | 0 | 1 |  |  |  |
| consistent-component-styles | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-component-styles.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/consistent-component-styles.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/consistent-component-styles) | 0 | 0 | 0 | 1 | 🔧 |  |  |




#### 💻 angular-fontawesome

| 📏 Rule | 📚 | 📄 | 🧪 | Recommended<br>⚠️ Warnings | Recommended<br>⚠️ Warnings<br>Fixables | Recommended<br>⚠️ Warnings<br>With Suggestions | Recommended<br>💥 Errors | Recommended<br>💥 Errors<br>Fixables | Recommended<br>💥 Errors<br>With Suggestions | All<br>⚠️ Warnings | All<br>⚠️ Warnings<br>Fixables | All<br>⚠️ Warnings<br>With Suggestions | All<br>💥 Errors | All<br>💥 Errors<br>Fixables | All<br>💥 Errors<br>With Suggestions | 🔧 | ✅ | 💡 |
| --- | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| prefer-signals | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-signals.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-signals.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-signals) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 37 | 0 | 0 | 🔧 |  |  |
| prefer-on-push-component-change-detection | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-on-push-component-change-detection.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-on-push-component-change-detection.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-on-push-component-change-detection) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 6 | 0 | 6 |  |  | 💡 |
| sort-lifecycle-methods | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/sort-lifecycle-methods.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/sort-lifecycle-methods.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/sort-lifecycle-methods) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 | 0 |  |  |  |
| no-lifecycle-call | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/no-lifecycle-call.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/no-lifecycle-call.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/no-lifecycle-call) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |  |  |  |


#### 💻 demo

| 📏 Rule | 📚 | 📄 | 🧪 | Recommended<br>⚠️ Warnings | Recommended<br>⚠️ Warnings<br>Fixables | Recommended<br>⚠️ Warnings<br>With Suggestions | Recommended<br>💥 Errors | Recommended<br>💥 Errors<br>Fixables | Recommended<br>💥 Errors<br>With Suggestions | All<br>⚠️ Warnings | All<br>⚠️ Warnings<br>Fixables | All<br>⚠️ Warnings<br>With Suggestions | All<br>💥 Errors | All<br>💥 Errors<br>Fixables | All<br>💥 Errors<br>With Suggestions | 🔧 | ✅ | 💡 |
| --- | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| prefer-on-push-component-change-detection | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-on-push-component-change-detection.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-on-push-component-change-detection.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-on-push-component-change-detection) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 4 |  |  | 💡 |
| consistent-component-styles | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-component-styles.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/consistent-component-styles.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/consistent-component-styles) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 0 | 🔧 |  |  |




### 🖊️ angular-calendar

**Info from repo**:
- **URL**: <https://github.com/mattlewis92/angular-calendar>
- **LastCommit**:
	- **Hash**: 987fa74220e84d85265b01e53e248932ad1a3da6
	- **Author**: Matt Lewis
	- **Message**: chore: update angular.json config
	- **Date**: Wed Aug 21 18:37:18 2024 +0100

#### 🧮 Total

| 📏 Rule | 📚 | 📄 | 🧪 | Recommended<br>⚠️ Warnings | Recommended<br>💥 Errors | All<br>⚠️ Warnings | All<br>💥 Errors | 🔧 | ✅ | 💡 |
| --- | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| prefer-signals | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-signals.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-signals.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-signals) | 0 | 0 | 0 | 156 | 🔧 |  |  |
| relative-url-prefix | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/relative-url-prefix.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/relative-url-prefix.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/relative-url-prefix) | 0 | 0 | 0 | 43 |  |  |  |
| prefer-output-readonly | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-output-readonly.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-output-readonly.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-output-readonly) | 0 | 0 | 0 | 29 |  |  | 💡 |
| component-max-inline-declarations | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/component-max-inline-declarations.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/component-max-inline-declarations.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/component-max-inline-declarations) | 0 | 0 | 0 | 28 |  |  |  |
| prefer-on-push-component-change-detection | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-on-push-component-change-detection.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-on-push-component-change-detection.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-on-push-component-change-detection) | 0 | 0 | 0 | 24 |  |  | 💡 |
| consistent-component-styles | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-component-styles.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/consistent-component-styles.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/consistent-component-styles) | 0 | 0 | 0 | 18 | 🔧 |  |  |
| use-injectable-provided-in | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/use-injectable-provided-in.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/use-injectable-provided-in.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/use-injectable-provided-in) | 0 | 0 | 0 | 13 |  |  | 💡 |
| use-component-view-encapsulation | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/use-component-view-encapsulation.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/use-component-view-encapsulation.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/use-component-view-encapsulation) | 0 | 0 | 0 | 12 |  |  | 💡 |
| use-component-selector | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/use-component-selector.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/use-component-selector.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/use-component-selector) | 0 | 0 | 0 | 6 |  |  |  |
| sort-lifecycle-methods | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/sort-lifecycle-methods.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/sort-lifecycle-methods.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/sort-lifecycle-methods) | 0 | 0 | 0 | 3 |  |  |  |
| no-host-metadata-property | ❌ | ❌ | ❌ | 0 | 1 | 0 | 1 | ❌ | ❌ | ❌ |




#### 💻 demos

| 📏 Rule | 📚 | 📄 | 🧪 | Recommended<br>⚠️ Warnings | Recommended<br>⚠️ Warnings<br>Fixables | Recommended<br>⚠️ Warnings<br>With Suggestions | Recommended<br>💥 Errors | Recommended<br>💥 Errors<br>Fixables | Recommended<br>💥 Errors<br>With Suggestions | All<br>⚠️ Warnings | All<br>⚠️ Warnings<br>Fixables | All<br>⚠️ Warnings<br>With Suggestions | All<br>💥 Errors | All<br>💥 Errors<br>Fixables | All<br>💥 Errors<br>With Suggestions | 🔧 | ✅ | 💡 |
| --- | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| relative-url-prefix | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/relative-url-prefix.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/relative-url-prefix.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/relative-url-prefix) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 43 | 0 | 0 |  |  |  |
| consistent-component-styles | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-component-styles.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/consistent-component-styles.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/consistent-component-styles) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 17 | 17 | 0 | 🔧 |  |  |
| use-component-view-encapsulation | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/use-component-view-encapsulation.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/use-component-view-encapsulation.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/use-component-view-encapsulation) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 12 | 0 | 12 |  |  | 💡 |
| component-max-inline-declarations | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/component-max-inline-declarations.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/component-max-inline-declarations.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/component-max-inline-declarations) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 11 | 0 | 0 |  |  |  |
| prefer-signals | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-signals.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-signals.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-signals) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 7 | 0 | 0 | 🔧 |  |  |
| use-injectable-provided-in | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/use-injectable-provided-in.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/use-injectable-provided-in.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/use-injectable-provided-in) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 7 | 0 | 7 |  |  | 💡 |
| prefer-on-push-component-change-detection | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-on-push-component-change-detection.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-on-push-component-change-detection.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-on-push-component-change-detection) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 4 |  |  | 💡 |
| prefer-output-readonly | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-output-readonly.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-output-readonly.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-output-readonly) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 3 |  |  | 💡 |


#### 💻 angular-calendar

| 📏 Rule | 📚 | 📄 | 🧪 | Recommended<br>⚠️ Warnings | Recommended<br>⚠️ Warnings<br>Fixables | Recommended<br>⚠️ Warnings<br>With Suggestions | Recommended<br>💥 Errors | Recommended<br>💥 Errors<br>Fixables | Recommended<br>💥 Errors<br>With Suggestions | All<br>⚠️ Warnings | All<br>⚠️ Warnings<br>Fixables | All<br>⚠️ Warnings<br>With Suggestions | All<br>💥 Errors | All<br>💥 Errors<br>Fixables | All<br>💥 Errors<br>With Suggestions | 🔧 | ✅ | 💡 |
| --- | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| prefer-signals | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-signals.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-signals.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-signals) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 149 | 0 | 0 | 🔧 |  |  |
| prefer-output-readonly | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-output-readonly.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-output-readonly.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-output-readonly) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 26 | 0 | 26 |  |  | 💡 |
| prefer-on-push-component-change-detection | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-on-push-component-change-detection.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/prefer-on-push-component-change-detection.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/prefer-on-push-component-change-detection) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 0 | 20 |  |  | 💡 |
| component-max-inline-declarations | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/component-max-inline-declarations.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/component-max-inline-declarations.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/component-max-inline-declarations) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 17 | 0 | 0 |  |  |  |
| use-component-selector | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/use-component-selector.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/use-component-selector.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/use-component-selector) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 6 | 0 | 0 |  |  |  |
| use-injectable-provided-in | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/use-injectable-provided-in.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/use-injectable-provided-in.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/use-injectable-provided-in) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 6 | 0 | 6 |  |  | 💡 |
| sort-lifecycle-methods | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/sort-lifecycle-methods.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/sort-lifecycle-methods.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/sort-lifecycle-methods) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 | 0 |  |  |  |
| no-host-metadata-property | ❌ | ❌ | ❌ | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | ❌ | ❌ | ❌ |
| consistent-component-styles | [📚](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-component-styles.md) | [📄](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/consistent-component-styles.ts) | [🧪](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/tests/rules/consistent-component-styles) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 0 | 🔧 |  |  |




