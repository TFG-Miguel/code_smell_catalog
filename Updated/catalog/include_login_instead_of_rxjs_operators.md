# Include logic instead of rxjs operators
## Description
Este *code smell* ocurre cuando se introduce lógica condicional, filtrado, transformación o cualquier tipo de manipulación directamente dentro del `subscribe()` o funciones auxiliares, en lugar de usar operadores de RxJS como `filter`, `map`, `tap`, etc. Esto rompe el estilo declarativo de RxJS y degrada la calidad del código.

## Why is a code smell

- **Rompe el paradigma declarativo de RxJS**: al insertar lógica imperativa dentro de `subscribe()`, se pierde la expresividad y la claridad que ofrecen los operadores reactivamente encadenables.
- **Reduce la legibilidad del flujo de datos**: el uso de estructuras condicionales o transformaciones ocultas en `subscribe()` dificulta entender el propósito de la secuencia de eventos.
- **Aumenta el acoplamiento y la complejidad**: al mezclar efectos secundarios con lógica de negocio, el `subscribe()` asume múltiples responsabilidades, violando el principio de separación de preocupaciones.
- **Limita la reutilización del código**: al encapsular lógica dentro de `subscribe()`, se impide la reutilización en otros flujos reactivos o su testeo unitario de forma aislada.
- **Dificulta la depuración y el testing**: los errores en lógica embebida dentro de `subscribe()` son menos trazables que en operadores separados y testeables como `filter()` o `map()`.
- **Desvía de las buenas prácticas reactivas**: una suscripción debería estar orientada únicamente a efectos secundarios terminales (UI, almacenamiento, navegación…), no a manipulación de datos.

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