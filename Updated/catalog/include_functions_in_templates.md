# Include functions in templates

## Description

Este *code smell* se da cuando se realizan llamadas a funciones directamente dentro de las plantillas Angular, especialmente dentro de expresiones de interpolación (`{{ }}`) o directivas estructurales (`*ngIf`, `*ngFor`), puede provocar importantes problemas de rendimiento y dificultar el mantenimiento del código. Aunque parezca conveniente, estas funciones se ejecutan en cada ciclo de detección de cambios (*change detection*), lo que puede generar múltiples invocaciones innecesarias y consecuencias no deseadas.

Para evitarlo, se recomienda:

- Extraer las funciones a propiedades calculadas (`getters`) o variables evaluadas previamente en el componente.
- Usar `pipes` personalizadas puras para realizar transformaciones declarativas en la vista.

> [!NOTE]
> Existe una regla en `@angular-eslint` que asegura que las pipes personalizadas sean puras ([no-pipes-impure](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/rules/no-pipe-impure.ts)), lo que está relacionado con este code smell, aunque no lo cubre por completo.

## Why is a code smell

- **Degrada el rendimiento**: las funciones se ejecutan múltiples veces durante el ciclo de vida del componente.
- **Oculta problemas de eficiencia**: es difícil detectar problemas de rendimiento al revisar solo el HTML.
- **Reduce la legibilidad**: el template se vuelve más difícil de seguir con expresiones complejas.
- **Dificulta el testeo**: no se puede controlar cuándo y cuántas veces se ejecutan las funciones.

---
## Non-Compliant code example

```html
<div *ngIf="isAdult(user)">
  Bienvenido, {{ user.name.toUpperCase() }}!
</div>

<p>Fecha: {{ formatDate(createdAt) }}</p>
```
---
## Compliant code example
```html
<div *ngIf="isAdultUser">
  Bienvenido, {{ user.name | uppercaseName }}!
</div>

<p>Fecha: {{ formattedDate }}</p>
```
A través del uso de propiedades calculadas o valores previamente calculados
```ts
@Component({ 
  selector: 'app-example',
  templateUrl: './newsletter.component.html',
  imports: [UppercaseNamePipe]
 })
export class ExampleComponent {
  get isAdultUser(): boolean {
    return this.user.age > 18 && !this.isBanned(this.user);
  }

  formattedDate:string = ''
  updateFormattedDate(): void {
    this.formattedDate = this.formatDate(this.createdAt);
  }
}
```
O a través de pipes personalizados puros
```ts
@Pipe({
  name: 'uppercaseName',
  pure: true
})
export class UppercaseNamePipe implements PipeTransform {
  transform(name: string): string {
    return name.toUpperCase();
  }
}
```