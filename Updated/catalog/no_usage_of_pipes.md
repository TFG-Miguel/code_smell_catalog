# No usage of pipes
## Description
Este *code smell* aparece cuando se omite el uso de **pipes** (*pure pipes* siempre que sea posible) de Angular para transformar datos en plantillas, recurriendo en su lugar a soluciones menos adecuadas como getters, llamadas a funciones dentro de la vista o propiedades duplicadas pretransformadas en el componente. Este enfoque rompe el flujo declarativo de Angular, dificulta el mantenimiento y puede afectar el rendimiento, especialmente cuando se trata de transformaciones costosas o listas de datos extensas.

## Why is a code smell
- Aumenta el acoplamiento entre lógica de transformación y presentación.
- Dificulta el mantenimiento al duplicar lógica o propiedades en el componente.
- Reduce la claridad declarativa de las plantillas.
- Las funciones llamadas desde la vista se ejecutan en **cada ciclo de detección de cambios**, lo que impacta gravemente el rendimiento.
- No se aprovecha el sistema de *caching* y *memoization* de las `pure pipes`.
- Se pierde una oportunidad de reutilización clara, sencilla y optimizada.

----
## Non-Compliant code example
```ts
@Component({
  selector: 'app-prices',
  template: `
    <ul>
      <li *ngFor="let price of prices">
        {{ formatPrice(price) }}
      </li>
    </ul>
  `
})
export class PricesComponent {
  prices = [9.99, 25.5, 100];

  formatPrice(value: number): string {
    return `${value.toFixed(2)} €`;
  }
}
```

## Compliant code example

```ts
// price-format.pipe.ts
@Pipe({ name: 'priceFormat', pure: true })
export class PriceFormatPipe implements PipeTransform {
  transform(value: number): string {
    return `${value.toFixed(2)} €`;
  }
}
```

```ts
@Component({
  selector: 'app-prices',
  template: `
    <ul>
      <li *ngFor="let price of prices">
        {{ price | priceFormat }}
      </li>
    </ul>
  `
})
export class PricesComponent {
  prices = [9.99, 25.5, 100];
}
```
## Sources
- https://codeburst.io/angular-bad-practices-eab0e594ce92 section 7
- https://medium.com/codex/avoid-these-bad-practices-when-you-are-an-angular-developer-135323db74c7 section 2