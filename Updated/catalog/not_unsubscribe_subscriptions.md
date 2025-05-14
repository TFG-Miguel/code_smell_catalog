# Not Unsubscribing Subscriptions

## Description

En los componentes que se suscriben a observables (manual) y no se desuscriben, antes de que el componente se destruya, están expuestos una **fuga de memoria** o un comportamiento inesperado por un callback desencadenada por la respuesta de un valor de la suscripción, puesto que la suscripción se mantiene activa incluso tras la destrucción de la vista. 

Con el tiempo, estas suscripciones "zombies" se acumularán produciendo consumos de recursos innecesarios degradando el rendimiento de nuestra aplicación.

## Why is a code smell

1. **Retención de memoria:** Cada suscripción no cancelada impide que el recolector de basura libere los recursos asociados, provocando un incremento constante del uso de memoria.
2. **Impacto en rendimiento:** Con el tiempo, el exceso de suscripciones activas ralentiza la aplicación y puede originar comportamientos inesperados, como callbacks ejecutándose en componentes destruidos.
3. **Difícil de depurar:** Identificar y localizar fugas de memoria por suscripciones olvidadas es complejo, especialmente en aplicaciones grandes con múltiples puntos de suscripción.

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
    // Suscripción sin cancelación posterior
    this.dataService.getData()
      .subscribe(value => {
        this.data = value;
      });
  }

  // No hay ngOnDestroy ni unsubscribe()
}
```

Este fragmento muestra una suscripción en `ngOnInit` sin el correspondiente `unsubscribe()` en `ngOnDestroy`, lo que provoca la fuga de memoria.

## Compliant code example
Para solucionar este code smell tenemos las siguientes soluciones:

### 1. Cancelar manualmente en `ngOnDestroy`

Empleando el método de ciclo de vida `ngOnDestroy` (se ejecuta cada vez que el componente se destruye) realizamos una desuscripción explicita de manera que liberamos los recursos.

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
    // Cancelación explícita de la suscripción
    this.sub.unsubscribe();
  }
}
```

### 2. Usar patrón `takeUntil` [1]
Otra opción es emplear la utilidad `takeUntil` ofrecida por el paquete `rxjs`. 

Esta funcionalidad nos permite automatizar la cancelación de suscripciones. Lo que logramos con esta utilidad es que la suscripción sigue emitiendo valores hasta que se reciba *notify* pasado por parámetro; en dicho momento, el propio método se desuscribirá de la suscripción. 

Es especialmente útil en componentes con varios observables.

```typescript
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-example',
  template: `<p>{{ data }}</p>`,
})
export class ExampleComponent implements OnInit, OnDestroy {
  displayText:any
  private subDestroyed$ = new Subject();

  public ngOnInit (): void {
    myObservable$.pipe(
        map(value => value.item),
        take(1),
        // Queremos mantener la suscripción hasta que el componente se destruya
        takeUntil(this.subDestroyed$)
      ).subscribe(item => this.displayText = item);
  }

  ngOnDestroy (): void {
    // Emite y completa para cancelar todas las suscripciones ligadas
    this.subDestroyed$.next();
    this.subDestroyed$.complete();
  }
}
```

### 3. Utilizar el  `AsyncPipe` en la plantilla [2]
Otra solución que maneja de manera automática la suscripción y cancelación de la misma tras la destrucción del componente es el uso del `async` *pipe* en la plantilla html sobre el propio observable.

```typescript
// En el componente
@Component()
export class Foo {
    someStringToDisplay = someObservable.pipe(map(/*...*/));
}

// En la plantilla HTML
<span>{{someStringToDisplay | async}}</span>
```

El **async pipe** maneja automáticamente la suscripción y la cancelación al destruir el componente, reduciendo la necesidad de lógica manual en el código TypeScript ([Angular Training][2]).

[1]: https://zydesoft.com/must-know-clean-code-principles-in-angular/
[2]: https://blog.eyas.sh/2018/12/use-asyncpipe-when-possible/

