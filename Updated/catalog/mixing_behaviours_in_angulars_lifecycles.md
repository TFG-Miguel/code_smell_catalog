# Mixing behaviors in Angular’s Lifecycle

## Description

Este *code smell- ocurre cuando se hace un uso incorrecto, inconsistente o desorganizado de los métodos del ciclo de vida de Angular, por ejemplo:

* Ejecutar lógica de negocio (como suscripciones o llamadas HTTP) en `ngAfterViewInit` en lugar de `ngOnInit`.
* Mezclar múltiples responsabilidades dentro de un mismo hook, como cargar datos, configurar listeners, manipular el DOM y enviar métricas en el mismo `ngOnInit`.
* Ejecutar lógica dependiente del DOM antes de que Angular haya renderizado completamente la vista.

Este patrón provoca componentes menos legibles, más frágiles y difíciles de testear, ya que el comportamiento del componente depende del orden y momento de ejecución de código que puede no estar bien separado.

## Why is a code smell

- **Rompe el ciclo de vida natural**: ejecutar lógica en hooks inadecuados puede fallar silenciosamente.
- **Reduce la claridad del código**: es difícil entender qué hace exactamente cada fase del componente.
- **Fomenta condiciones de carrera**: por ejemplo, acceder a `ViewChild` antes de `ngAfterViewInit`.
- **Complica el testeo**: mezclar comportamientos interfiere en la validación aislada.
- **Dificulta el mantenimiento**: agrupar demasiada lógica en un mismo hook hace que el código crezca descontroladamente.

## Non-Compliant code example

```ts
Component({...})
export class TestComponent {

  ngAfterViewInit(): void {
    this.userService.getUser().subscribe(user => {
        this.user = user;
    });

    this.analytics.track('UserComponent loaded');

    window.addEventListener('scroll', this.handleScroll);
  }
}
```


## Compliant code example

```ts
@Component({...})
export class TestComponent {
  ngOnInit(): void {
    this.loadUser();
    this.setupAnalytics();
  }

  ngAfterViewInit(): void {
    this.setupViewListeners();
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.handleScroll);
    this.subscription.unsubscribe();
  }

  private loadUser(): void {
    this.subscription = this.userService.getUser().subscribe(user => {
      this.user = user;
    });
  }

  private setupAnalytics(): void {
    this.analytics.track('UserComponent loaded');
  }

  private setupViewListeners(): void {
    window.addEventListener('scroll', this.handleScroll);
  }
}
```

---

Este enfoque mantiene **una única responsabilidad por hook**, garantiza que el código se ejecuta en el momento adecuado, y facilita tanto el **mantenimiento como el testeo** de cada comportamiento.

¿Quieres que ahora te lo convierta a Markdown? ¿O pasamos al siguiente code smell?
