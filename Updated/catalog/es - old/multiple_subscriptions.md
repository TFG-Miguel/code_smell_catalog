# Multiple subscriptions

## Description

Este *code smell* aparece cuando se realizan **múltiples suscripciones a un mismo `Observable`**, ya sea:

- De forma explícita (`.subscribe()`) en diferentes partes del componente.
- De forma implícita en la plantilla HTML usando varias veces el pipe `async` sobre el mismo `Observable`.

Este patrón puede provocar **efectos secundarios no deseados**, especialmente si el `Observable` es **"cold"** (como una llamada HTTP), ya que se ejecutará cada vez que se suscriba, duplicando peticiones, procesamiento o eventos.

En Angular, esto suele suceder cuando se utiliza `async` más de una vez sobre el mismo `Observable` sin compartir su resultado. La solución es **compartir el stream** mediante operadores como `shareReplay` o `publishReplay(1), refCount()` para **caché local**, o almacenar el resultado intermedio en una variable.

---

## Why is a code smell

- **Dispara múltiples ejecuciones innecesarias**: llamadas HTTP, timers, cálculos, etc.
- **Produce efectos secundarios duplicados**: como acciones duplicadas o renderizados extra.
- **Complica el rastreo de errores**: múltiples flujos activos sobre el mismo origen.
- **Reduce el rendimiento**: más operaciones, más suscripciones, más renders.
- **Rompe la reactividad limpia**: ya que el `Observable` deja de ser predecible.

---

## Non-Compliant code example

```ts
@Component({
  selector: 'journey-list-item',
  templateUrl: './journey-list-item.component.html',
  styleUrls: ['./journey-list-item.component.scss'],
})
export class JourneyListItemComponent {
  @Input() 
  set journeyId(value: number) {
    this.journeyId$.next(value);
  }
  @Output() addAction = new EventEmitter<void>();
  
  private journeyId$ = new BehaviorSubject<Journey | undefined>(undefined);
  journey$ = this.journeyId$.pipe(
              switchMap((id) => this.journeyService.getJourney(id))
             );
}
```

```html
<h1>{{(journey$ | async).title}}</h1>
<div *ngIf="let journey of (journey$ | async)">
    <span>journey?.description</span>
</div>
```

---

## Compliant code example
### Trabajar con la misma suscripción

```html
<ng-container *ngIf="journey$ | async as journey">
  <h1>{{ journey.title }}</h1>
  <p>{{ journey.description }}</p>
</ng-container>
```
De esta manera se almacena la suscripción en la variable journey y solo se solicita una vez la suscripción.

### Usar `shareReplay(1)` y `distinctUntilChanged()`
```ts
@Component({
  selector: 'journey-list-item',
  templateUrl: './journey-list-item.component.html',
  styleUrls: ['./journey-list-item.component.scss'],
})
export class JourneyListItemComponent implements OnDestroy {

  @Input()
  set journeyId(value: number) {
    this.journeyId$.next(value);
  }
  @Output() addAction = new EventEmitter<void>();
  
  private readonly journeyId$ = new BehaviorSubject<Journey | undefined>(undefined);
  journey$ = this.journeyId$.pipe(
      distinctUntilChanged(),
      switchMap((id) => this.journeyService.getJourney(id)),
      shareReplay(1) // Replay much times as needed subscriptions
  );
}
```

>[!note]
> En caso de que se haga una suscripción manual, se deberá gestionar la suscripción mediante [`takeUntilDestroyed`](#angular-16-con-takeuntildestroyed) (o `takeUntil` y un evento que notifique de la destrucción del componente, es mejor evitar disponiendo de `takeUntilDestroyed`).


### Usar `publishReplay(1)` y `refCount()`
Esta solución permite cachear la petición y emplearla en varios sitios habiendo realizado una única petición.
```ts
pageTitle = this.route.params.pipe(
    map((params) => params["id"]),
    flatMap((id) =>
        this.http.get(`api/pages/${id}/title`, { responseType: "text" })
    ),
    publishReplay(1),
    refCount()
);
```

```html
<h1>{{pageTitle | async}}</h1>
<p>You are viewing {{pageTitle | async}}.</p>
```


### Angular 16+ con `takeUntilDestroyed`

```ts
@Component({...})
export class JourneyListItemComponent {
  journey: Journey | undefined;

  constructor(private journeyService: JourneyService) {
    this.journeyId$.pipe(
      distinctUntilChanged(),
      switchMap(id => this.journeyService.getJourney(id)),
      shareReplay(1),
      takeUntilDestroyed()
    ).subscribe(journey => this.journey = journey);
  }
}
```
## Sources
- https://medium.com/@robert.maiersilldorff/code-smells-in-angular-deep-dive-part-i-d63dd5f5215e section 5
- https://blog.eyas.sh/2018/12/use-asyncpipe-when-possible/