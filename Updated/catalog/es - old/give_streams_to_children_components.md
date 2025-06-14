# Give streams to children components

## Description

Este *code smell* ocurre cuando se pasa un `Observable` o `Subject` directamente como `@Input()` a un componente hijo, en lugar de enviarle los datos ya consumidos (por ejemplo, con `async`) o encapsular la lógica de suscripción dentro del componente padre.

Aunque técnicamente es válido pasar streams a los hijos, es acoplamiento innecesario del componente hijo al conocimiento de RxJS y que lo obliga a manejar suscripciones, estados intermedios o transformaciones que deberían resolverse en niveles superiores.

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
Siguiendo con la linea anterior, si se usa el stream como input para varios componentes, se puede encapsular de la siguiente forma:

```ts
@Component({
  template: `
    <ng-container *ngIf="users$ | async as users">
      <child-component [users]="users"></child-component>
      <child-component-2 [users]="users"></child-component-2>
    </ng-container>
  `
})
export class ContainerComponent {
  users$ = this.userService.getUsers();
}
```
De esta forma se realiza una única suscripción que es aprovechada y empleada en todos los componentes con inputs.

## Sources
- https://blog.brecht.io/rxjs-best-practices-in-angular/ section 8 (*Don’t pass streams to components directly*)
- https://www.slideshare.net/slideshow/rxjs-best-bad-practices-for-angular-developers/233392471 section 5 (*Don't pass streams to components*)