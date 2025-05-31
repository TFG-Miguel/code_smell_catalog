# Include logic instead of rxjs operators
## Description
Este code smell ocurre cuando se introduce lógica condicional, filtrado, transformación o cualquier tipo de manipulación directamente dentro del `subscribe()` o funciones auxiliares, en lugar de usar operadores de RxJS como `filter`, `map`, `tap`, etc. Esto rompe el estilo declarativo de RxJS y degrada la calidad del código.

This code smell happens when logic such as filtering, conditional checks, or transformations are written inside `subscribe()` instead of using proper RxJS operators like `filter`, `map`, or `tap`. It goes against the declarative nature of reactive programming and leads to poor readability and maintainability.

## Why is a code smell
- Viola el enfoque declarativo de RxJS.
- Reduce la claridad del flujo de datos.
- Dificulta la composición y reutilización de observables.
- Mezcla lógica de transformación con efectos secundarios.
- Hace más difícil detectar errores lógicos o flujos inesperados.
- Provoca `subscribes` inflados con múltiples responsabilidades.

----
## Non-Compliant code example
```ts
obs$.pipe(
  map(v => v * 10)
).subscribe(v => {
  if (v < 50) {
    console.log("OK");
  }
});
```

## Compliant code example
```ts
obs$.pipe(
  map(v => v * 10),
  filter(v => v < 50)
).subscribe(v => {
  console.log("OK");
});
```


## Sources
- https://www.slideshare.net/slideshow/rxjs-best-bad-practices-for-angular-developers/233392471 section 10