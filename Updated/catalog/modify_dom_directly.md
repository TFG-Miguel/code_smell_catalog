# Modify DOM directly

## Description

Este *code smell* ocurre cuando se modifica directamente el DOM mediante APIs nativas del navegador como `document.querySelector`, `document.getElementById`, `innerHTML`, `appendChild` o bibliotecas como `jQuery`, así como cuando se accede directamente al DOM con `ElementRef.nativeElement`.

Angular es un framework basado en un modelo **declarativo y reactivo**. Proporciona mecanismos seguros, escalables y testables para reflejar cambios de estado en la vista a través de su sistema de plantillas, directivas, bindings y encapsulación. Saltarse estos mecanismos para manipular manualmente el DOM **rompe las abstracciones del framework**, introduce riesgos de seguridad, reduce la mantenibilidad y complica el testing.

En lugar de manipular el DOM directamente, Angular promueve el uso de:

- **Propiedades de plantilla y bindings estructurados** (`[hidden]`, `[style]`, `[class]`, `[attr.disabled]`, `[innerHTML]`, etc.)
- **Directivas estructurales y de atributos** (`*ngIf`, `*ngFor`, `ngClass`, `ngStyle`)
- **Directivas personalizadas** para manipulación compleja
- **`Renderer2`** como mecanismo seguro y desacoplado para casos justificados
- **`ElementRef` sólo con sanitización y en escenarios muy controlados**


## Why is a code smell

- **Rompe el modelo declarativo de Angular**: al modificar directamente el DOM se ignora el sistema de bindings, cambiando el estado de la vista fuera del flujo natural de Angular.
- **Compromete la seguridad de la aplicación**: el uso de `innerHTML` sin sanitización puede permitir ataques XSS (*Cross-Site Scripting*).
- **Limita la compatibilidad entre plataformas**: el código puede fallar en entornos de renderizado como SSR (*Server-Side Rendering*), Web Workers o Angular Universal.
- **Dificulta la mantenibilidad**: acceder al DOM directamente acopla el código a la estructura interna del HTML, que puede cambiar.
- **Complica la testabilidad**: el acceso directo al DOM hace que los tests sean frágiles y menos predecibles.
- **Viola el principio de separación de responsabilidades**: mezcla lógica de presentación con manipulación directa del entorno.

---

## Non-Compliant code example

```ts
ngAfterViewInit(): void {
  const input = document.querySelector('.input');
  if (input) {
    input.setAttribute('disabled', 'true');
    input.classList.add('resaltado');
  }

  const container = document.getElementById('main');
  if (container) {
    container.innerHTML = '<p>Hola</p>';
  }
}
```

---

## Compliant code example

### Usar bindings declarativos

```ts
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestComponent {
  isDisabled = true;
  isHighlighted = true;
  htmlContent = this.sanitizer.bypassSecurityTrustHtml('<p>Hola</p>');

  constructor(private sanitizer: DomSanitizer) {}
}
```

```html
<!-- Declarativo y seguro -->
<input [disabled]="isDisabled" [ngClass]="{ 'resaltado': isHighlighted }" />
<div [innerHTML]="htmlContent"></div>
```

### Directiva personalizada

```ts
@Directive({
  selector: '[appAutoFocus]'
})
export class AutoFocusDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.el.nativeElement.focus();
  }
}
```

```html
<input appAutoFocus />
```

### Manipulación controlada con Renderer2

```ts
@Component({ ... })
export class ButtonComponent implements AfterViewInit {
  @ViewChild('myBtn') buttonRef!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.renderer.setAttribute(this.buttonRef.nativeElement, 'disabled', 'true');
    this.renderer.addClass(this.buttonRef.nativeElement, 'resaltado');
  }
}
```

```html
<button #myBtn>Haz clic</button>
```

---

## Sources
- https://www.tatvasoft.com/outsourcing/2021/07/top-angular-developer-pitfalls.html section 1.4
- https://rules.sonarsource.com/typescript/RSPEC-6268/ 
- https://chudovo.com/most-common-angular-mistakes-every-developer-should-avoid/ section 1 (*Direct DOM Manipulation*) and 2 (*Using jQuery with Angular*)
- https://medium.com/@OPTASY.com/what-are-the-5-most-common-angular-mistakes-that-developers-make-53f6d7c5bf65 section 4