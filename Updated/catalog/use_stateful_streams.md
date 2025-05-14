# Use stateful streams

## Description

Este *code smell* aparece cuando se abusa del almacenamiento de estado **fuera de la cadena de operadores RxJS**, es decir, cuando se guardan resultados intermedios de un stream en propiedades del componente (por ejemplo, `this.customer`, `this.code`, `this.result`) para ser reutilizados más adelante.

Aunque parezca una solución práctica, rompe el flujo reactivo y declarativo de RxJS y **convierte la lógica del stream en un sistema de efectos secundarios implícitos**. Esto hace que el código sea más difícil de razonar, más propenso a errores y más complejo de mantener.

En lugar de ello, se recomienda **transportar el estado intermedio dentro del propio stream**, componiendo un "bundle" (objeto) que encapsule todos los datos necesarios hasta el final del flujo. Esto mantiene la **pureza, consistencia y trazabilidad** del flujo de datos.

## Why is a code smell

- **Rompe la reactividad**: el estado se saca del stream y se almacena manualmente.
- **Introduce efectos secundarios**: mutaciones fuera del flujo principal que afectan su comportamiento.
- **Dificulta el razonamiento**: no es obvio cuándo se asignan valores ni en qué orden.
- **Complica el manejo de errores**: un fallo en cualquier etapa puede dejar el estado externo inconsistente.
- **Reduce la mantenibilidad**: propenso a errores y difícil de refactorizar o testear correctamente.

## Non-Compliant code example

```ts
this.route.params.pipe(
  switchMap(({ customerId }) => customerService.getCustomer(customerId)),
  tap((customer) => {
    this.customer = customer;
    this.code = makeCode(customer);
  }),
  switchMap(() => myService.retrieveByCode(this.code)),
  tap((result) => {
    this.result = result;
  }),
  switchMap(() => otherService.byCustomerAndResult(this.customer, this.result)),
).subscribe(combinedResult => {
  this.result = combinedResult;
  this.view = moreComplexComutation(this.customer, this.code, combinedResult);
});
```
## Compliant code example

```ts
createStream<number>([1, 2], 25).pipe(
  switchMap(id => requestCustomer(id)),
  switchMap((customer) => {
    const code = makeCode(customer);
    return requestByCode(code).pipe(
      map(result => ({ customer, code, result }))
    );
  }),
  switchMap(({ customer, result, ...bundle }) =>
    requestByCustomerAndResult(customer, result).pipe(
      map(combinedResult => ({ ...bundle, customer, result, combinedResult }))
    )
  )
).subscribe(({ customer, code, result, combinedResult }) => {
  updateView('customer', customer.name);
  updateView('code', code);
  updateView('result', result.result);
  updateView('combined', combinedResult);
});
```

[source](https://www.thinktecture.com/en/angular/rxjs-antipattern-2-state/)