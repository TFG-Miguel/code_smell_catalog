# Give streams to children components

## Description

Este *code smell* ocurre cuando se pasa un `Observable` o `Subject` directamente como `@Input()` a un componente hijo, en lugar de enviarle los datos ya consumidos (por ejemplo, con `async`) o encapsular la lógica de suscripción dentro del componente padre.

Aunque técnicamente es válido pasar streams a los hijos, esto acopla innecesariamente al componente hijo al conocimiento de RxJS y le obliga a manejar suscripciones, estados intermedios o transformaciones que deberían resolverse en niveles superiores.

En Angular, los componentes deben recibir **datos procesados y listos para mostrar**. El trabajo con observables debe estar encapsulado en el componente que tiene el control del flujo de datos.

## Why is a code smell

- **Rompe la encapsulación**: el hijo debe conocer detalles de RxJS que no le corresponden.
- **Aumenta el acoplamiento**: el padre impone al hijo cómo debe consumir los datos.
- **Dificulta la reutilización**: el componente hijo ya no puede usarse fácilmente sin observables.
- **Complica el testeo**: hay que simular observables en lugar de pasar datos simples.
- **Rompe el patrón de unidireccionalidad de datos**: los hijos deberían ser consumidores pasivos.


---
## Non-Compliant code example

```ts
@Component({ 
    template: '<child-component [users]="users$"></child-component>'
 })
export class ParentComponent {
  users$ = this.userService.getUsers();
}
```

```ts
@Component({ 
    selector: 'child-component',
 })
export class ChildComponent {
  @Input() users!: Observable<User[]>;

  ngOnInit(): void {
    this.users.subscribe(data => { ... });
  }
}
```

---
## Compliant code example

### Resolver el observable en el padre

```ts
@Component({ 
    template: '<child-component [users]="users$ | async"></child-component>'
 })
export class ParentComponent {
  users$ = this.userService.getUsers();
}
```


```ts
@Component({ 
    selector: 'child-component'
 })
export class ChildComponent {
  @Input() users: User[] = [];
}
```

### Alternativa: encapsular lógica en componente contenedor

```ts
// contenedor.component.ts
@Component({ ... })
export class ContenedorComponent {
  users$ = this.userService.getUsers();
}
```

```html
<ng-container *ngIf="users$ | async as users">
  <child-component [users]="users"></child-component>
</ng-container>
```
## Sources
- https://blog.brecht.io/rxjs-best-practices-in-angular/ section 8
- https://www.slideshare.net/slideshow/rxjs-best-bad-practices-for-angular-developers/233392471 section 5