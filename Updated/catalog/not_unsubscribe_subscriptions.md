# Not Unsubscribing Subscriptions

## Description

Este *code smell* ocurre cuando los componentes que se suscriben a observables (manualmente) y no cancelan la suscripción antes de que el componente se destruya; quedando expuestos una **fuga de memoria** o un comportamiento inesperado por un callback desencadenado por la respuesta de un valor de la suscripción, puesto que la suscripción se mantiene activa incluso tras la destrucción de la vista. 

Con el tiempo, estas suscripciones "zombies" se acumularán produciendo consumos de recursos innecesarios degradando el rendimiento de nuestra aplicación.

## Why is a code smell

- **Retención de memoria:** Cada suscripción no cancelada impide que el recolector de basura libere los recursos asociados, provocando un incremento constante del uso de memoria.
- **Impacto en rendimiento:** Con el tiempo, el exceso de suscripciones activas ralentiza la aplicación y puede originar comportamientos inesperados, como callbacks ejecutándose en componentes destruidos.
- **Difícil de depurar:** Identificar y localizar fugas de memoria por suscripciones olvidadas es complejo, especialmente en aplicaciones grandes con múltiples puntos de suscripción.

---
## Non-Compliant code example

```typescript
import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-example',
  template: `<p>{{ data }}</p>`,
})
export class ExampleComponent implements OnInit {
  data: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData()
      .subscribe(value => {
        this.data = value;
      });
  }
}
```

Este fragmento muestra una suscripción en `ngOnInit` sin el correspondiente `unsubscribe()` en `ngOnDestroy`, lo que provoca la fuga de memoria.

---
## Compliant code example
Para solucionar este code smell tenemos las siguientes soluciones:

### Cancelar manualmente en `ngOnDestroy`

Empleando el *lifecycle* `ngOnDestroy` (se ejecuta cada vez que el componente se destruye) realizamos una cancelación de la suscripción explicita permitiendo de manera al recolector de basura liberar los recursos correctamente.

```typescript
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from './data.service';

@Component({
  selector: 'app-example',
  template: `<p>{{ data }}</p>`,
})
export class ExampleComponent implements OnInit, OnDestroy {
  data: any;
  private sub!: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.sub = this.dataService.getData()
      .subscribe(value => {
        this.data = value;
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
```

### Usar patrón `takeUntilDestroyed`
Otra opción moderna y recomendada a partir de Angular 16 es usar el operador `takeUntilDestroyed()` ofrecido por el paquete oficial `@angular/core/rxjs-interop`.

Este operador automatiza la cancelación de suscripciones sin necesidad de declarar manualmente un `Subject` ni implementar `ngOnDestroy`. Su funcionamiento es similar al clásico `takeUntil`, pero integrado con el ciclo de vida del componente: cancela la suscripción automáticamente cuando el componente (directiva o pipe) se destruye.([takeUntilDestroyed in Angular v16][3], [Angular docs - takeUntilDestroyed][4])

Esto permite mantener el código limpio y evitar errores por suscripciones no canceladas. Además, es especialmente útil en componentes con varios observables.

```typescript
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-example',
  template: `<p>{{ data }}</p>`,
})
export class ExampleComponent implements OnInit {
  displayText:any

  public ngOnInit (): void {
    myObservable$.pipe(
        map(value => value.item),
        take(1),
        takeUntilDestroyed()
      ).subscribe(item => this.displayText = item);
  }
}
```

### Utilizar el  `AsyncPipe` en la plantilla
Otra solución es el pipe `async` en las plantilla html, que se encarga de realizar la suscripción, de un observable, y cancelación de la misma tras la destrucción del componente. Véase [Manual subscriptions](manual_subscriptions.md).

[1]: https://zydesoft.com/must-know-clean-code-principles-in-angular/
[2]: https://blog.eyas.sh/2018/12/use-asyncpipe-when-possible/
[3]: https://angular.love/takeuntildestroy-in-angular-v16
[4]: https://angular.dev/api/core/rxjs-interop/takeUntilDestroyed
[5]: https://medium.com/netanelbasal/getting-to-know-the-takeuntildestroyed-operator-in-angular-d965b7263856
