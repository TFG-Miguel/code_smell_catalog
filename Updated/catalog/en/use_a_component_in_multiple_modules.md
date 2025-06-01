# Use a component in multiple modules

## Description

Uno de los errores más comunes (y frecuentemente pasados por alto) en Angular es **intentar declarar un mismo componente en varios módulos** (`NgModule`). Angular **no permite** que un componente aparezca más de una vez en las secciones `declarations` de distintos módulos, y hacerlo provoca errores de compilación.

Este *code smell* indica una falta de organización en la estructura modular del proyecto. La solución correcta es **declarar el componente una sola vez en su propio módulo (módulo hijo), exportarlo desde ahí, e importar ese módulo donde se necesite**.


## Why is a code smell

- **Angular lo prohíbe explícitamente**: un componente no puede estar en varias `declarations`. En caso de hacerlo provoca errores en tiempo de compilación, como:
  > `Type HeroComponent is part of the declarations of 2 modules...`
- **Refleja una arquitectura inadecuada**: reutilizar un componente sin encapsularlo en un módulo propio.
- **Dificulta la escalabilidad**: errores de duplicación se acumulan a medida que crece la base de código.
- **Rompe el principio de reusabilidad modular**: los componentes compartidos deben ser independientes y bien encapsulados.

---

## Non-Compliant code example

HeroComponent se declara en dos módulos

```ts
@NgModule({
  declarations: [HeroComponent],
  exports: [HeroComponent]
})
export class AdminModule {}
```

```ts
@NgModule({
  declarations: [HeroComponent], // Ya está declarado en AdminModule
  exports: [HeroComponent]
})
export class DashboardModule {}
```

---

## Compliant code example

Declarar el componente en un módulo hijo y reutilizarlo vía `exports`/`imports`

```ts
// hero.module.ts
@NgModule({
  declarations: [HeroComponent],
  exports: [HeroComponent]
})
export class HeroModule {}
```

```ts
// admin.module.ts
@NgModule({
  imports: [HeroModule]
})
export class AdminModule {}
```

```ts
// dashboard.module.ts
@NgModule({
  imports: [HeroModule]
})
export class DashboardModule {}
```

[source]: https://www.tatvasoft.com/outsourcing/2021/07/top-angular-developer-pitfalls.html
## Sources
- https://www.tatvasoft.com/outsourcing/2021/07/top-angular-developer-pitfalls.html section 1.6
- https://chudovo.com/most-common-angular-mistakes-every-developer-should-avoid/ section 3 (*Declaring the Same Component in More than One NgModule*)
- https://medium.com/@OPTASY.com/what-are-the-5-most-common-angular-mistakes-that-developers-make-53f6d7c5bf65 section 5