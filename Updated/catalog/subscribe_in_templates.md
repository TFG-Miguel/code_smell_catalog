# Subscribe in templates
## Description
Manejar las suscripciones manuales desde un componente (`.subscribe()`) conlleva la responsabilidad de cancelar manualmente la suscripción ante la destrucción del componente (`ngOnDestroy`) con los riesgos que conlleva. Véase [not unsubscribe subscriptions](not_unsubscribe_subscriptions.md).

Debido a esto esto es una buena practica realizar las suscripciones dentro de las plantillas a través del pipe `async`.  Esta nos simplifica el manejo de la suscripción, ya que al declararla, se encarga de realizar la suscripción y en caso de que se destruya el componente se encargará de limpiar la suscripción de forma transparente.

De esta manera logramos un código más limpio, simplificado y menos propenso a riesgos por el manejo de suscripciones.

## Why is a code smell
- **Riesgo de fuga de memoria**: Al ser el programador el responsable de asegurar la cancelación de la suscripción puede que no se realice correctamente y se produzcan fugas de memoria.
- **Complejidad**: Debido a que el programador es responsable de realizar la cancelación, este debe implementar la lógica necesaria para poder cancelar de manera adecuada la suscripción, haciendo que la cantidad de código crezca y se dificulte su mantenimiento.
- **Posible inconsistencia del dato**: La suscripción manual en el componente puede introducir errores cuando los datos sufren cambios fuera de la suscripción.
## Non-Compliant code example
```typescript
// In template
<span>{{someStringToDisplay}}</span>

// In component
@Component()
export class Foo implements OnInit, OnDestroy {
  someStringToDisplay = "";
  private readonly onDestroy = new ReplaySubject<void>(1);

  ngOnInit() {
    someObservable
      .pipe(takeUntil(this.onDestroy), map(/* ... */))
      .subscribe((next) => {
        this.someStringToDisplay = next;
        this.ref.markForCheck();
      });
  }

  ngOnDestroy() {
    this.onDestroy.next(undefined);
  }
}

// Other example
@Component()
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

## Compliant code example
```typescript
// In template
<span>{{someStringToDisplay | async}}</span>

// In component
@Component()
export class Foo {
    someStringToDisplay = someObservable.pipe(map(/*...*/));
}
```

[1]:https://zydesoft.com/must-know-clean-code-principles-in-angular/
[2]:https://blog.eyas.sh/2018/12/use-asyncpipe-when-possible/