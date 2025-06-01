# No usage of pipes
## Description
Este *code smell* aparece cuando se omite el uso de **pipes** (*pure pipes* siempre que sea posible) de Angular para transformar datos en plantillas, recurriendo en su lugar a soluciones menos adecuadas como getters, llamadas a funciones dentro de la vista o propiedades duplicadas pretransformadas en el componente. 

Este enfoque rompe el flujo declarativo de Angular, dificulta el mantenimiento y puede afectar el rendimiento, especialmente cuando se trata de transformaciones costosas o listas de datos extensas.

## Why is a code smell
- **Rompe la separación de responsabilidades**: mezcla la lógica de transformación con la presentación al procesar los datos directamente en el componente o dentro del template.
- **Reduce la legibilidad declarativa de la plantilla**: el uso de funciones o getters en lugar de pipes hace que las expresiones sean más difíciles de entender a simple vista.
- **Impacta negativamente en el rendimiento**: las funciones invocadas desde el template se ejecutan en cada ciclo de detección de cambios, incluso si sus argumentos no han cambiado.
- **Dificulta el mantenimiento y la escalabilidad**: al duplicar transformaciones en múltiples componentes o controladores, se incrementa el riesgo de inconsistencias y errores.
- **Desaprovecha las ventajas del sistema de `pure pipes`**: como la memoización automática y el bajo coste computacional cuando no hay cambios en los datos de entrada.
- **Limita la reutilización de lógica transformadora**: al no encapsularla como una unidad reutilizable, testeable y declarativa como lo permite un pipe.

----
## Non-Compliant code example
```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-demonstration',
  template: `<form>
    <div>
      <label>Enter a file size</label>
      <input type="number" (change)="valuechange($event)" />
      <p>{{ formattedSize }}</p>
    </div>
  </form>`,
})
export class PipeDemonstrationComponent {
  formattedSize = '';

  public valuechange(event: any) {
    const size = Number.parseInt(event.target.value);
    this.formattedSize = (size / (1024 * 1024)).toFixed(2) + 'MB';
  }
}
```

## Compliant code example

```ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filesize' })
export default class FileSizeFormatterPipe implements PipeTransform {
  transform(size: number): string {
    return (size / (1024 * 1024)).toFixed(2) + 'MB';
  }
}
```

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-demonstration',
  template: `<form>
    <div>
      <label>Enter a file size</label>
      <input
        type="number"
        [(ngModel)]="size"
        [ngModelOptions]="{ standalone: true }"
      />
      <p>{{ size | filesize }}</p>
    </div>
  </form>`,
})
export class PipeDemonstrationComponent {
  size = 0;
}
```
## Sources
- https://codeburst.io/angular-bad-practices-eab0e594ce92 section 7 (*Not using/Misusing Pipes*)
- https://medium.com/codex/avoid-these-bad-practices-when-you-are-an-angular-developer-135323db74c7 section 2 (*Misusing or not using some Angular features*)