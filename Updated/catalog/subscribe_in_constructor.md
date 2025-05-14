# Subscribe in constructor

## Description

Muchas suscripciones pueden ser necesarias durante toda la vida del componente por lo que es necesario disponer de este valor desde que se crea el componente. 

Esto nos da la idea de que debemos realizar la suscripción en métodos que se ejecuten en la creación del componente (`constructor` y `ngOnInit`). 

Pero lo ideal es hacerlo en el segundo método, `ngOnInit`, ya que lo ideal es respetar el ciclo de vida definido por angular y debido a que es una de las buenas prácticas del framework (promueven mantener los constructores ligeros y libres de lógica).



## Why is a code smell

- **Rompe el principio de responsabilidad única**: el constructor debe usarse solo para la inicialización básica del objeto, no para ejecutar lógica.
- **Dificulta el testeo**: al suscribirse automáticamente al crear la instancia, no se puede probar fácilmente el componente sin que se activen efectos secundarios.
- **Complica el ciclo de vida**: no respeta el flujo natural del ciclo de vida de Angular (`ngOnInit`), lo que puede generar problemas si otros elementos aún no están inicializados.
- **Riesgo de fugas de memoria**: es más fácil olvidar desuscribirse si no se sigue una estructura clara como en `ngOnDestroy`.

## Non-Compliant code example

```ts
@Component({ ... })
export class UserComponent {
  user: User | null = null;

  constructor(private userService: UserService) {
    this.userService.getUser().subscribe(user => {
      this.user = user;
    });
  }
}
```

## Compliant code example

### Mover la suscripción a `ngOnInit`

```ts
@Component({ ... })
export class UserComponent implements OnInit {
  user: User | null = null;
  private userSubscription: Subscription | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userSubscription = this.userService.getUser().subscribe(user => {
      this.user = user;
    });
  }

  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}
```

### Eliminar suscripción

Si la suscripción no es estrictamente necesaria y solo se emplea en la visualización de datos se puede plantear eliminar la suscripción y trabajar con la `async` pipe.

Véase [Not unsubscribe subscription](not_unsubscribe_subscriptions.md).