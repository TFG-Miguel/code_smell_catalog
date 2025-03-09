# Análisis detallado de cada enlace
## [RoshanCloudArchitect](https://roshancloudarchitect.me/identifying-and-eliminating-code-smells-in-angular-micro-frontends-advanced-techniques-for-6f07a781f93d)
1. Duplicated Code across micro frontends\
   Uso de código duplicado con el fin de tener la misma funcionalidad en varios sitios.
   **Solución**: Uso de librerías compartidas con *Tree Shacking*
2. Inefficient Change Detection ~ Use default Change Detection instead of OnPush
3. Bloated Components: mix ui logic, business logic and state management.\
   **Solución**: Uso de *Reactive State Management*, usando Smart/Dumb components y NgRx o Akita
5. Complex conditional logic in templates\
   Plantillas con `*ngIf` `*ngfor` profundamente anidadas.\
   **Solución**: Uso de directivas propias para reducir la complejidad
6. Improper state sharing across micro frontends\
   Compartir estados sin un protocolo claro aumenta el acoplamiento.\
   **Solución**: Uso de *Event-Driven Architecture*, a través de rxjs para compartir estados a través de publicaciones y suscripciones.
7. Unoptimized Module Loading\
   **Solución**: Uso del *lazy loading* y *preload key modules*, usar `RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })`
## [Medium](https://medium.com/@robert.maiersilldorff/code-smells-in-angular-deep-dive-part-i-d63dd5f5215e)
1. Default Change-Detection-Strategy instead of OnPush
2. Binding methods in the templates\
   **Solución**: Uso de pure `pipes` o rxjs con sus pipes, maps, y funciones como `distinctUntilChanges()` para marcar cuando activar callbacks
3. No trackBy in for directives\
   Identificar los elementos de una tabla para no rerender toda la tabla de nuevo cuando haya cambios. Antes de angular17 con una función pura, después basta con una propiedad y track en vez de trackBy la cual no es opcional.
4. The use of detectChanges instead of markForCheck
5. Multiple subscriptions. Suscripciones dentro de otras suscripciones. Usando `distinctUntilChanged` combinado con `shareReplay` o eliminar suscripciones en las plantillas.\
   Mientras que las suscripciones estén manejadas mediante `async-pipe` no hay necesidad unsubscribe los observables, mientras que si hay suscripciones manuales en el componente `takeUntil` junto con el subject tiene que usarse.
   >[!Warning]
   >Desde angular 16, las suscripciones no necesitan de una desuscripción, sin embargo hay que usar `takeUntilDestroyed` dentro del pipe
## [Zydesoft](https://zydesoft.com/must-know-clean-code-principles-in-angular/)
1. Pipeable operators. \
   Asegurarse de usar pipeable mientras se usen operadores rxjs 
2. Not utilize proper operators\
   Asegurar usar los operadores adecuados para cada situación cuando se trata de operadores de aplanado con observables.
3. Use trackBy
4. Clear out the subscription\
   Asegurar de eliminar suscripciones con los operadores `take` o `takeUntil`
5. Restrain owning subscriptions inside subscriptions\
   Combinar suscripciones con operaciones como `combineLatest`, `withLatestFrom`.
6. Tiny reusable components
7. Suscribe in template\
   Usar `async` en plantillas html
8. Lazy load
9. No business logic in component
10. Keep template free form logic
11. Avoid duplicate API Calls
12. State management.
    Usar `@ngrx/store` y `@ngrx/effects`
## [Dev](https://dev.to/vixero/common-mistakes-that-backend-programmers-make-in-angular-434d)
Se comentan varios code smells pero más bien genéricos, específicos de ts o adaptados a angular.
- RxJs: Observables and higher-order observables
  - Utilizar rxjs en vez de promise y async/wait. Uso de `from` o `defer`
  - Anidamiento de suscripciones uso de operadores adecuados
  - Anidamiento de Promise async/wait dentro de suscripciones rxjs
  - Usar observables y operaciones de manejo para evitar mezclar los 3 tipos
## [Devlopapa](https://developapa.com/signals/)
- Buenas Prácticas con Signals
  - Usar `input()` y `output()` en lugar de `@Input()` y `@Output()`.
  - Todo valor en la plantilla debe ser un Signal.
  - Usar `effect()` en lugar de `ngOnChanges()`.
  - Definir dependencias de Signals primero para mejorar la depuración.
  - Dividir Signals computados complejos en estructuras más pequeñas.
- Code Smells y Malas Prácticas
  - Evitar el uso excesivo de `effect()`, puede indicar un mal flujo de datos.
  - No usar propiedades de clase en Signals computados o efectos.
  - No pasar `WritableSignal` como parámetro a funciones.
  - Evitar `toObservable()` de RxJS, puede causar efectos inesperados.
  - Evitar `toSignal()` de RxJS en observables fríos (como peticiones HTTP).
## [DavidBoothe](https://davidboothe.com/2024/08/getting-started-with-angular-signals-a-comprehensive-guide/)
- Complex Effects
- Llamar repetidamente a la función `toSignal(observable)`
## [BlogEyas](https://blog.eyas.sh/2018/12/use-asyncpipe-when-possible/)
- Uso de `async` pipe en directivas `if`, `as` y `else` incluso en las antiguas `ng...`

<center>
<h2>Revise el resultado <a href="./source/own_catalog.md">aquí</a></h2>
</center>