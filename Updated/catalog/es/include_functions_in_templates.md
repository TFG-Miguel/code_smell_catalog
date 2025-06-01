# Include functions in templates

## Description

Este *code smell* se da cuando se realizan llamadas a funciones directamente dentro de las plantillas Angular, dentro de expresiones de interpolación (`{{ }}`) o directivas estructurales (`*ngIf`, `*ngFor`).

Dichas llamadas pueden provocar importantes problemas de rendimiento y dificultar el mantenimiento del código. Aunque parezca conveniente, estas funciones se ejecutan en cada ciclo de detección de cambios (*change detection*), lo que puede generar múltiples invocaciones innecesarias y consecuencias no deseadas.

Las propiedades getters, aunque visualmente no lo parezcan, también son funciones y por tanto debe evitarse su uso, ya que su uso en plantillas implica una ejecución por cada renderizado.

Para evitarlo, se recomienda:

- Usar variables evaluadas o calculadas previamente en el componente.
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
```ts
@Component({ 
  selector: 'app-example',
  templateUrl: './newsletter.component.html',
  imports: [UppercaseNamePipe]
 })
export class ExampleComponent implements OnInit {

  @Input() user!: { name: string; age: number; };
  @Input() createdAt!: Date;
  
  // Pre calculated values have to be updated 
  // if the input source changes
  isAdultUser:boolean = false;
  formattedDate:string = '';

  ngOnInit() {
    updateIsAdultUser();
    updateFormattedDate()
  }

  private updateIsAdultUser(): void {
    this.isAdultUser = this.user.age > 18 && !this.isBanned(this.user);
  }

  private updateFormattedDate(): void {
    this.formattedDate = this.formatDate(this.createdAt);
  }
}
```
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
---
## Sources
- https://alex-klaus.com/angular-code-review/ section 2
- https://levelup.gitconnected.com/refactoring-angular-applications-be18a7ee65cb section 2.2
- https://medium.com/@robert.maiersilldorff/code-smells-in-angular-deep-dive-part-i-d63dd5f5215e section 2