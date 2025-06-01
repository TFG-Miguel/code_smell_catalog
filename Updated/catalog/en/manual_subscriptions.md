# Manual subscriptions
## Description
Este *code smell* se da cuando se realizan suscripciones manuales en vez de aprovechar la abstracción de las suscripciones en plantillas (a través del pipe `async`) siempre que sea posible, ya que en ciertos casos (como llamadas http que se realizan una única vez, *cold observables*).

Manejar las suscripciones manuales desde un componente (`.subscribe()`) conlleva la responsabilidad de cancelar la suscripción de manera que no produzca lagunas de memoria, con los riesgos que conlleva. Véase [not unsubscribe subscriptions](not_unsubscribe_subscriptions.md).

El uso de esta pipe nos simplifica el manejo de la suscripción, ya que se encarga de realizar la suscripción y cancelarla y limpiar la suscripción de forma transparente cuando el componente es destruido.

De esta manera logramos un código más limpio, simplificado y menos propenso a riesgos por el manejo de suscripciones.

## Why is a code smell
- **Riesgo de fuga de memoria**: Al ser el programador el responsable de asegurar la cancelación de la suscripción puede que no se realice correctamente y se produzcan fugas de memoria.
- **Complejidad**: Debido a que el programador es responsable de realizar la cancelación, este debe implementar la lógica necesaria para poder cancelar de manera adecuada la suscripción, haciendo que la cantidad de código crezca y se dificulte su mantenimiento.
- **Posible inconsistencia del dato**: La suscripción manual en el componente puede introducir errores cuando los datos sufren cambios fuera de la suscripción.

---
## Non-Compliant code example
```typescript
@Component({
  template: '<span>{{someStringToDisplay}}</span>'
})
export class Foo implements OnInit {
  someStringToDisplay = "";

  ngOnInit() {
    someObservable
      .pipe(
        takeUntilDestroyed(), 
        map(/* ... */)
      ).subscribe((next) => {
        this.someStringToDisplay = next;
        this.ref.markForCheck();
      });
  }
}


// Or manually
@Component({
  template: '<span>{{someStringToDisplay}}</span>'
})
export class Foo implements OnInit, OnDestroy {
  someStringToDisplay = "";
  private subscription = Subscription.EMPTY;

  ngOnInit() {
    this.subscription = someObservable
      .pipe(map(/*...*/))
      .subscribe((next) => {
        this.someStringToDisplay = next;
        this.ref.markForCheck();
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

``` 
---
## Compliant code example
```typescript
@Component({
  template: '<span>{{someStringToDisplay$ | async}}</span>'
})
export class Foo {
    someStringToDisplay$ = someObservable.pipe(map(/*...*/));
}
```

[1]:https://zydesoft.com/must-know-clean-code-principles-in-angular/
[2]:https://blog.eyas.sh/2018/12/use-asyncpipe-when-possible/

----
## Sources
- https://dev.to/this-is-angular/7-deadly-sins-of-angular-1n2j 5º sin
- https://www.freecodecamp.org/news/best-practices-for-a-clean-and-performant-angular-application-288e7b39eb6f/ section 5
- https://levelup.gitconnected.com/refactoring-angular-applications-be18a7ee65cb section 2.3 (second solution for *Memory Leaks*)
- https://blog.brecht.io/rxjs-best-practices-in-angular/ section 7 (*Avoiding manual subscribes in Angular*)
- https://zydesoft.com/must-know-clean-code-principles-in-angular/ section 9
- https://blog.eyas.sh/2018/12/use-asyncpipe-when-possible/