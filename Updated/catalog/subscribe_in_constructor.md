# Subscribe in constructor

## Description

Este code smell se da cuando, por necesidad de requerir una suscripción durante toda la vida del componente, la suscripción se realiza en el constructor en vez de en el lifecycle `ngOnInit`. 

Ya las buenas practicas nos recomiendan respetar el ciclo de vida definido por angular y además de promover mantener los constructores ligeros y libres de lógica.


>[!note]
>Si la suscripción no es estrictamente necesaria y solo se emplea en la visualización de datos se puede plantear eliminar la suscripción y trabajar con la `async` pipe.
>
>Véase [Manual subscription](manual_subscriptions.md).

## Why is a code smell

- **Rompe el principio de responsabilidad única**: el constructor debe usarse solo para la inicialización básica del objeto, no para ejecutar lógica.
- **Dificulta el testeo**: al suscribirse automáticamente al crear la instancia, no se puede probar fácilmente el componente sin que se activen efectos secundarios.
- **Complica el ciclo de vida**: no respeta el flujo natural del ciclo de vida de Angular (`ngOnInit`), lo que puede generar problemas si otros elementos aún no están inicializados.
- **Riesgo de fugas de memoria**: es más fácil olvidar cancelar la suscripción si no se sigue una estructura clara como en `ngOnDestroy`.


---
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
---
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