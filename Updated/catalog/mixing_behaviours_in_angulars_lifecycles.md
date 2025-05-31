# `ngOnChanges` misconceptions
## Description
Este *code smell* se refiere al uso conjunto y mal estructurado de los métodos `ngOnChanges` y `ngDoCheck` del ciclo de vida de Angular, en especial cuando no se comprende bien cómo y cuándo se activan. Aunque ambos hooks están diseñados para reaccionar a cambios, tienen **finalidades distintas** y comportamientos muy diferentes. Mezclar lógica entre ellos suele generar código redundante, confuso o ineficiente.

- `ngOnChanges` tiene como propósito principal **detectar cambios en propiedades marcadas con `@Input`**. Se ejecuta únicamente cuando la **referencia completa del objeto cambia**. No detectará cambios en campos internos si la referencia del objeto no se ha modificado. Muchos desarrolladores asumen incorrectamente que funciona para cualquier tipo de cambio, lo cual no es cierto.
  
- `ngDoCheck`, en cambio, se dispara **en cada ciclo de detección de cambios** y permite implementar una **detección personalizada**, incluso cuando no cambian las referencias. Es útil cuando se necesita observar mutaciones internas o comparar propiedades profundamente. Sin embargo, su uso frecuente lo hace propenso a introducir errores de rendimiento o lógica si no se gestiona correctamente.

Por tanto, en caso de necesitar observar campos internos o cambios dentro de objetos inmutables, `ngDoCheck` es apropiado. Si solo se necesita reaccionar ante un cambio de valor (por referencia), `ngOnChanges` es más claro, eficiente y declarativo. [lifecycles-hooks]

> [!note]
> En caso de necesitar usar ngDoCheck, por el posible impacto en el rendimiento se recomienda utilizar de manera adecuada ChangeDetectionStrategy estableciéndola a OnPush y usando de manera adecuada la notificación de cambios.
>
> En los ejemplos de código no se empleará esta estrategia pero en caso de usarla plantee las siguientes situaciones:
> - Clonado de objeto con propiedad modificada (`{updated: true, ...old}`), esto modificará la referencia por lo que sí que será identificada por `ngOnChanges`.
> - Uso de Observables, en linea con la consideración anterior.
> - Forzar la actualización del componente (`ChangeDetectorRef.markForCheck()`). Debido a las responsabilidades que se adquieren al emplearlo se recomienda usarlo como última opción, prefiriendo alguna de las dos anteriores.

## Why is it a code smell

- **Violación del principio de responsabilidad única**: Se combinan o duplican responsabilidades entre `ngDoCheck` y `ngOnChanges`, creando una arquitectura frágil y confusa.
- **Complejidad innecesaria**: El uso de `ngDoCheck` para lógica que puede manejarse con `ngOnChanges` dificulta el mantenimiento y la comprensión del flujo de datos.
- **Malentendidos sobre `ngOnChanges`**: Es común asumir erróneamente que detecta cambios profundos, cuando solo responde a cambios de referencia. Esto puede provocar inconsistencias entre el estado interno y la UI.
- **Falsa percepción de reactividad**: El uso `ngOnChanges` como reemplazo general, según lo comentado en el punto anterior, puede ocultar fallos en la propagación de cambios o en la gestión del estado por una mala comprensión sobre el funcionamiento de este hook.
- **Impacto en el rendimiento**: `ngDoCheck` se ejecuta en cada ciclo de detección de cambios. Un abuso de este sin necesidad o un uso sin restricciones puede implicar comparaciones costosas e innecesarias.
- **Desaprovechamiento del framework**: Mientras que `ngOnChanges` entrega un objeto `SimpleChanges` ya estructurado, `ngDoCheck` requiere que el desarrollador implemente manualmente la lógica de comparación.
- **Dificultad en pruebas y depuración**: La lógica de detección dispersa entre hooks hace más difícil testear, depurar y mantener el código.

----
## Non-Compliant code example
### Bad use of `ngOnChanges`
```ts
// parent.component.ts
@Component({
  selector: 'app-parent',
  template: `
    <app-child [user]="user"></app-child>
    <button (click)="updateAge()">Update Age</button>
  `
})
export class ParentComponent {
  user = { name: 'Pepe', age: 25 };

  updateAge() {
    // Make an internal change, ngOnChanges will not detect this change
    this.user.age += 1;
  }
}
```
```ts
// child.component.ts
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<p>{{ user.name }} - {{ user.age }}</p>`
})
export class ChildComponent implements OnChanges {
  @Input() user: { name: string; age: number };

  ngOnChanges(changes: SimpleChanges) {
    if (changes['user']) {
      console.log('User input changed!');
    }
  }
}
```
### Bad use of `ngDoCheck`
```ts
// parent.component.ts
@Component({
  selector: 'app-parent',
  template: `
    <app-child [name]="userName"></app-child>
    <button (click)="changeName()">Change Name</button>
  `
})
export class ParentComponent {
  userName = 'Pepe';

  changeName() {
    // Ref change, both lifecycles will detect this change
    this.userName = 'Juan';
  }
}
```
```ts
// child.component.ts
import { Component, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<p>{{ name }}</p>`,
})
export class ChildComponent implements DoCheck {
  @Input() name: string;
  private previousName: string;

  ngDoCheck() {
    if (this.name !== this.previousName) {
      console.log('Name changed:', this.name);
      this.previousName = this.name;
    }
  }
}
```
---
## Compliant code example
### Right use of `ngDoCheck`
```ts
// child.component.ts
import { 
  Component, 
  Input, 
  DoCheck,
  KeyValueDiffers 
  } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<p>{{ user.name }} - {{ user.age }}</p>`
})
export class ChildComponent implements DoCheck {
  @Input() user: { name: string; age: number };
  
  private differ: any;

  constructor(private differs: KeyValueDiffers) {}

  ngOnInit() {
    this.differ = this.differs.find(this.user).create();
  }

  ngDoCheck() {
    const changes = this.differ.diff(this.user);
    if (changes) {
      console.log('User object changed internally');
    }
  }
}
```
### Right use of `ngOnChange`
```ts
// child.component.ts
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<p>{{ name }}</p>`
})
export class ChildComponent implements OnChanges {
  @Input() name: string;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['name']) {
      console.log('Name changed:', this.name);
    }
  }
}
```
## Sources
- https://chudovo.com/most-common-angular-mistakes-every-developer-should-avoid/ section 6
- https://medium.com/@OPTASY.com/what-are-the-5-most-common-angular-mistakes-that-developers-make-53f6d7c5bf65 section 1

[lifecycles-hooks]:https://v17.angular.io/guide/lifecycle-hooks#lifecycle-event-sequence