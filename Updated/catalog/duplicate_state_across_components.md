# Duplicate state across components

## Description

Este _code smell_ ocurre cuando múltiples componentes mantienen una copia local del mismo estado o información, en lugar de compartir una fuente única de verdad (_single source of truth_). Esto puede parecer una solución rápida en el corto plazo, pero a medida que la aplicación crece, se vuelve difícil mantener la sincronización y coherencia entre los distintos componentes.

Los ejemplos comunes incluyen duplicar datos de usuario, estado de sesión, filtros activos o resultados de búsqueda en componentes diferentes. Este enfoque rompe el principio DRY (_Don't Repeat Yourself_) y genera código propenso a errores.

La solución adecuada suele ser:

- Extraer el estado compartido a un servicio Angular inyectable que actúe como _store_ (por ejemplo, usando `BehaviorSubject`, `RxJS`, o un _state management_ más avanzado como NgRx, Akita o Signal Store).
- Comunicar componentes a través de _Input/Output_, `@Injectable()` o `@Input()`, evitando la duplicación innecesaria.

## Why is a code smell

- **Desincronización del estado**: diferentes componentes pueden mostrar datos inconsistentes.
- **Aumento de complejidad**: se necesita lógica extra para mantener sincronizado el estado.
- **Dificultad para mantener**: los cambios en el estado deben aplicarse en múltiples lugares.
- **Dificulta la escalabilidad**: a medida que crece la aplicación, el mantenimiento se vuelve insostenible.
- **Rompe el principio de fuente única de verdad (_single source of truth_)**.

---
## Non-Compliant code example

```ts
@Component({...})
export class ComponenteA {
  user = { name: 'Ana', loggedIn: true };
}

@Component({...})
export class ComponenteB {
  user = { name: 'Ana', loggedIn: true }; // Estado duplicado e independiente
}
```
---
## Compliant code example
```ts
@Injectable({ providedIn: 'root' })
export class UserService {
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  setUser(user: User) {
    this.userSubject.next(user);
  }

  getCurrentUser(): User | null {
    return this.userSubject.getValue();
  }
}
```

```ts
@Component({...})
export class ComponenteA {
  constructor(private userService: UserService) {}

  login() {
    this.userService.setUser({ name: 'Ana', loggedIn: true });
  }
}
```

```ts
@Component({
  template: `
    <div *ngIf="user$ | async as user">
      Bienvenida, {{ user.name }}!
    </div>
  `
})
export class ComponenteB {
  user$ = this.userService.user$;

  constructor(private userService: UserService) {}
}
```