# Nested Subscriptions
> [!Note]
> There are already two eslint plugins for lint rxjs use. Specifically, for this code smell we have the following rules, being practically the same:
> - https://github.com/cartant/eslint-plugin-rxjs/blob/main/docs/rules/no-nested-subscribe.md
> - https://github.com/JasonWeinzierl/eslint-plugin-rxjs-x/blob/main/docs/rules/no-nested-subscribe.md

Meter también https://alex-klaus.com/angular-code-review/ .3 subsection

## Description
Las *Nested Subscriptions* ocurren cuando se realizan suscripciones anidadas dentro de otras suscripciones en código Angular, lo cual lleva a una estructura piramidal difícil de leer, mantener y testear. Este enfoque ignora el potencial de composición reactiva de RxJS.


## Why is a code smell
- Hace que el código sea difícil de leer y mantener.
- Complica la gestión de errores y el *unsubscribe* adecuado.
- Viola los principios de la programación reactiva.
- Aumenta el acoplamiento entre operaciones asincrónicas.
- Dificulta la reutilización de flujos de datos.
- Es propenso a errores sutiles de ejecución múltiple o perdida de suscripciones.


----
## Non-Compliant code example
```ts
this.userService.getUser().subscribe(user => {
  this.orderService.getOrders(user.id).subscribe(orders => {
    this.orders = orders;
  });
});
```
---
## Compliant code example

```ts
this.userService.getUser().pipe(
  switchMap(user => this.orderService.getOrders(user.id))
).subscribe(orders => {
  this.orders = orders;
});
```
---
## Sources 
-  https://www.freecodecamp.org/news/best-practices-for-a-clean-and-performant-angular-application-288e7b39eb6f/ section 9
-  https://blog.brecht.io/rxjs-best-practices-in-angular/ section 6
-  https://www.slideshare.net/slideshow/rxjs-best-bad-practices-for-angular-developers/233392471 section 6
-  https://www.thinktecture.com/angular/rxjs-antipattern-1-nested-subs/ 
-  https://www.sourceallies.com/2020/11/state-management-anti-patterns/ section 4
-  https://zydesoft.com/must-know-clean-code-principles-in-angular/ section 6