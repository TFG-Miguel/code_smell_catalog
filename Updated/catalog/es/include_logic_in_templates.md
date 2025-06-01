# Include logic in templates
## Description
Este *code smell* se da cuando se realiza un uso excesivo de lógica en las plantillas.

Aunque las plantillas html Angular permiten usar condiciones simples, su uso excesivo o anidado con lógica compleja (como múltiples comparaciones, estructuras condicionales anidadas o negaciones encadenadas) convierte la vista en algo difícil de leer, mantener y probar.

Esto incluye también el abuso de directivas como `*ngIf`, `*ngFor`, `ngSwitch` con condiciones complejas, y estructuras que deberían delegarse al componente o encapsularse mediante directivas personalizadas.

Para mejorar la claridad del template se recomienda:

- Delegar la lógica al componente mediante propiedades precalculadas para lógicas complejas o resultados que no cambian frecuentemente o `getters`, si su lógica no es muy costosa o sus resultados cambian muy seguido, aunque se recomienda evitar su uso si es posible.
- Encapsular condiciones en **directivas estructurales personalizadas** para mantener las plantillas declarativas.

## Why is a code smell

- **Rompe la separación de responsabilidades**: mezcla lógica con presentación.
- **Reduce la legibilidad**: dificulta entender qué hace la plantilla a simple vista.
- **Complica la depuración**: errores en condiciones anidadas son difíciles de rastrear.
- **Aumenta la complejidad**: estructuras condicionales profundas crean vistas difíciles de mantener.
- **Reduce la reutilización**: las condiciones complejas embebidas no son reutilizables ni testeables.

---
## Non-Compliant code example

```ts
@Component({
  template: `
    <p *ngIf="role==='developer'"> Status: Developer </p>
  `
})
export class TestComponent implements OnInit {
  public ngOnInit (): void {
    this.role = 'developer';
  }
}
```
---
## Compliant code example

### Mover la lógica al componente

```ts
@Component({
  template: `
    <p *ngIf="showDeveloperStatus"> Status: Developer </p>
  `
})
export class TestComponent implements OnInit {
  this.role = 'developer';
  // Precalculated value
  this.showDeveloperStatus = true;

  ngOnInit (): void {
    this.updateStatus();
  }
  
  private updateStatus() {
    this.showDeveloperStatus = this.role === 'develop';
  }
}
```

### Usar directivas personalizadas

```ts
@Directive({
  selector: '[appIfAdultUser]'
})
export class IfAdultUserDirective {
  @Input() set appIfAdultUser(user: User) {
    const isAdult = user.age > 18;
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

---
## Sources
- https://www.freecodecamp.org/news/best-practices-for-a-clean-and-performant-angular-application-288e7b39eb6f/ section 17
- https://levelup.gitconnected.com/refactoring-angular-applications-be18a7ee65cb section 4.3