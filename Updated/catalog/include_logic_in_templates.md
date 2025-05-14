# Include logic in templates
## Description
Este code smell se da cuando se realiza un uso excesivo de lógica en las plantillas.

Aunque las plantillas html Angular permiten usar condiciones simples, su uso excesivo o anidado con lógica compleja (como múltiples comparaciones, estructuras condicionales anidadas o negaciones encadenadas) convierte la vista en un lugar difícil de leer, mantener y probar.

Esto incluye también el abuso de directivas como `*ngIf`, `*ngFor`, `ngSwitch` con condiciones complejas, y estructuras que deberían delegarse al componente o encapsularse mediante directivas personalizadas.

Para mejorar la claridad del template se recomienda:

- Delegar la lógica al componente mediante `getters` o propiedades preparadas.
- Encapsular condiciones en **directivas estructurales personalizadas** para mantener las plantillas declarativas.

## Why is a code smell

- **Rompe la separación de responsabilidades**: mezcla lógica con presentación.
- **Reduce la legibilidad**: dificulta entender qué hace la plantilla a simple vista.
- **Complica la depuración**: errores en condiciones anidadas son difíciles de rastrear.
- **Aumenta la complejidad**: estructuras condicionales profundas crean vistas difíciles de mantener.
- **Reduce la reutilización**: las condiciones complejas embebidas no son reutilizables ni testeables.

---
## Non-Compliant code example

```html
<div *ngIf="user.age > 18 && !isBanned(user)">
  Bienvenido, {{ user.name }}!
</div>
```
---
## Compliant code example

### Mover la lógica al componente

```ts
@Component({ 
  selector: 'app-example',
  templateUrl: './newsletter.component.html',
  imports: [UppercaseNamePipe]
 })
export class TextComponent {
  user:User

  get isAdultUser(): boolean {
    return this.user.age > 18 && !this.isBanned(this.user);
  }

  private isBanned(user:User): boolean { 
    return false;
  }
}
```

```html
<div *ngIf="isAdultUser">
  Bienvenido, {{ user.name }}!
</div>
```

### Usar directivas personalizadas

```ts
@Directive({
  selector: '[appIfAdultUser]'
})
export class IfAdultUserDirective {
  @Input() set appIfAdultUser(user: User) {
    const isAdult = user.age > 18 && !this.isBanned(user);
    this.viewContainer.clear();
    if (isAdult) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  private isBanned(user: User): boolean {
    return false;
  }
}
```

```html
<div *appIfAdultUser="user">
  Bienvenido, {{ user.name }}!
</div>
```

