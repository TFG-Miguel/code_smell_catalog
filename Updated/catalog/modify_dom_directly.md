# Modify DOM directly

## Description

Este *code smell* ocurre cuando se modifica el DOM directamente utilizando APIs nativas como `document.querySelector`, `document.getElementById`, `innerHTML`, `appendChild`, o accediendo manualmente al DOM mediante `ElementRef.nativeElement`.

Angular es un framework declarativo y reactivo que proporciona herramientas específicas para reflejar el estado de los componentes en la vista de forma segura y estructurada. Saltarse este sistema para acceder y modificar el DOM directamente rompe la abstracción del framework, reduce la mantenibilidad y puede comprometer la seguridad de la aplicación.

En lugar de modificar manualmente el DOM, Angular promueve el uso de:

- **Propiedades del componente vinculadas a la plantilla** (`[hidden]`, `[class]`, `[style]`, etc.)
- **Directivas estructurales** (`*ngIf`, `*ngFor`, `ngClass`, `ngStyle`)
- **Pipes** para transformar contenido dinámicamente
- **Renderer2** o `ViewChild` como último recurso en casos justificados

## Why is a code smell

- **Rompe el modelo declarativo de Angular**: se salta el binding unidireccional controlado por el framework.
- **Compromete la seguridad**: puede introducir vulnerabilidades como XSS (especialmente con `innerHTML` sin sanitizar).
- **Reduce la compatibilidad**: puede fallar en SSR (Server-Side Rendering) o en entornos limitados.
- **Dificulta el mantenimiento**: el DOM puede cambiar y romper referencias manuales.
- **Complica el testing**: los tests se vuelven más frágiles e impredecibles al depender de manipulación directa.

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

## Compliant code example

### Usar propiedades y bindings en la plantilla

```ts
@Component({...})
export class TestComponent {
  isDisabled = true;
  isHighlighted = true;
  htmlContent = '<p>Hola</p>';
}
```

```html
<input [disabled]="isDisabled" [ngClass]="{ 'resaltado': isHighlighted }" />

<!-- [innerHTML] con sanitización si es necesario -->
<div [innerHTML]="htmlContent"></div>
```

### Usar directivas personalizadas si se requiere lógica compleja

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
