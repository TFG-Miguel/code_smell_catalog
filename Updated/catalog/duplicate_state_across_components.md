# Duplicate state across components

## Description

Este *code smell* ocurre cuando múltiples componentes mantienen una copia local del mismo estado o información, en lugar de compartir una fuente única de verdad (*single source of truth*). Aunque puede parecer una solución rápida, este patrón se vuelve insostenible a medida que crece la complejidad de la aplicación, generando inconsistencias, redundancia y lógica dispersa.

Los ejemplos comunes incluyen duplicar datos de usuario, estado de sesión, filtros activos o resultados de búsqueda en componentes distintos. Este enfoque viola el principio DRY (*Don't Repeat Yourself*) y complica la mantenibilidad del sistema.


## Solución

La forma más adecuada de abordar este *code smell* es mediante el uso de un enfoque reactivo centralizado para el estado compartido. Las principales alternativas son:

* **RxJS**: Ideal para aplicaciones pequeñas o medianas. Utilizar `BehaviorSubject` en servicios inyectables permite crear *stores* ligeros, encapsulados y reactivos sin necesidad de librerías externas.
* **NgRx**: Recomendado para aplicaciones grandes con múltiples fuentes de estado y lógica de negocio compleja. Implementa Redux y proporciona flujo unidireccional, trazabilidad de acciones y efectos para lógica asíncrona.
* **Akita**: Alternativa moderna y más simple que NgRx, centrada en ergonomía y productividad. Especialmente útil para proyectos que requieren una solución potente pero con menor curva de aprendizaje.


## Why is a code smell

* **Desincronización del estado**: diferentes componentes pueden mostrar datos inconsistentes.
* **Aumento de complejidad**: se necesita lógica adicional para mantener sincronizados los estados.
* **Dificultad para mantener**: cualquier cambio en el estado debe replicarse manualmente en múltiples lugares.
* **Dificulta la escalabilidad**: el crecimiento de la aplicación incrementa el riesgo de errores.
* **Rompe el principio de fuente única de verdad (*single source of truth*)**.

---

## Non-Compliant code example

```ts
@Component({...})
export class ComponentA {
  user = { name: 'Ana', loggedIn: true };
}

@Component({...})
export class ComponentB {
  // Estado duplicado e independiente
  user = { name: 'Ana', loggedIn: true }; 
}
```

---

## Compliant code example
### RxJS
```ts
// user-store.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './user.model';

@Injectable({ providedIn: 'root' })
export class UserStore {
  private userSubject = new BehaviorSubject<User | null>(null);
  readonly user$ = this.userSubject.asObservable();

  setUser(user: User) {
    this.userSubject.next(user);
  }

  getUserSnapshot(): User | null {
    return this.userSubject.getValue();
  }
}
```

```ts
// component-a.component.ts
import { Component } from '@angular/core';
import { UserStore } from './user-store.service';

@Component({...})
export class ComponentA {
  constructor(private userStore: UserStore) {}

  login() {
    this.userStore.setUser({ name: 'Ana', loggedIn: true });
  }
}
```

```ts
// component-b.component.ts
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { UserStore } from './user-store.service';

@Component({
  template: `
    <div *ngIf="user$ | async as user">
      Welcome, {{ user.name }}!
    </div>
  `
})
export class ComponentB {
  user$ = this.userStore.user$;

  constructor(private userStore: UserStore) {}
}
```

### [NgRx][use_ngrx]
```ts
// user.actions.ts
import { createAction, props } from '@ngrx/store';
import { User } from './user.model';

export const login = createAction('[User] Login', props<{ user: User }>());
```

```ts
// user.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { login } from './user.actions';
import { User } from './user.model';

export interface UserState {
  user: User | null;
}

export const initialState: UserState = { user: null };

export const userReducer = createReducer(
  initialState,
  on(login, (state, { user }) => ({ ...state, user }))
);
```

```ts
// user.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UserState } from './user.reducer';

export const selectUserState = createFeatureSelector<UserState>('user');

export const selectUser = createSelector(
  selectUserState,
  (state: UserState) => state.user
);
```

```ts
// component-a.component.ts
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from './user.actions';
import { User } from './user.model';

@Component({...})
export class ComponentA {
  constructor(private store: Store) {}

  login() {
    const user: User = { name: 'Ana', loggedIn: true };
    this.store.dispatch(login({ user }));
  }
}
```

```ts
// component-b.component.ts
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectUser } from './user.selectors';
import { User } from './user.model';

@Component({
  template: `
    <div *ngIf="user$ | async as user">
      Bienvenida, {{ user.name }}!
    </div>
  `
})
export class ComponentB {
  user$: Observable<User | null>;

  constructor(private store: Store) {
    this.user$ = this.store.select(selectUser);
  }
}
```

### [Akita][use_akita]
```ts
// user.store.ts
import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { User } from './user.model';

export interface UserState extends EntityUser<User> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'user' })
export class UserStore extends EntityStore<UserState, User> {
  constructor() {
    super();
  }
}
```
```ts
// user.query.ts
import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { UserStore, UserState } from './user.store';

@Injectable({ providedIn: 'root' })
export class UserQuery extends QueryEntity<UserState> {
  constructor(protected store: UserStore) {
    super(store);
  }
}
```
```ts
// user.service.ts
import { Injectable } from '@angular/core';
import { UserStore } from './user.store';
import { UserQuery } from './user.query';
import { User } from './user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private userStore: UserStore, private userQuery: UserQuery) {}

  login(user: User) {
    this.userStore.setLoading(true);
    // Asynchronous simulated login
    setTimeout(() => {
      this.userStore.set([user]);
      this.userStore.setLoading(false);
    }, 1000);
  }
}
```
```ts
// component-a.component.ts
import { Component } from '@angular/core';
import { UserStore } from './user.store';

@Component({...})
export class ComponentA {
  constructor(private userService: UserService) {}

  login() {
    this.userService.login({ id: 1, name: 'Ana', loggedIn: true });
  }
}
```

```ts
// component-b.component.ts
import { Component } from '@angular/core';
import { UserQuery } from './user.query';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Component({
  template: `
    <div *ngIf="user$ | async as user">
      Bienvenida, {{ user.name }}!
    </div>
  `
})
export class ComponentB {
  user$: Observable<User | undefined>;

  constructor(private userQuery: UserQuery) {
    // Identify the user by the User Id
    this.user$ = this.userQuery.selectEntity(1);
  }
}
```

## Sources
- https://www.freecodecamp.org/news/best-practices-for-a-clean-and-performant-angular-application-288e7b39eb6f/ *Bigger picture $\rightarrow$ state management* section
- https://www.sourceallies.com/2020/11/state-management-anti-patterns/ section 1 and 2
- https://roshancloudarchitect.me/identifying-and-eliminating-code-smells-in-angular-micro-frontends-advanced-techniques-for-6f07a781f93d section 3 and 6

[use_ngrx]:https://medium.com/@igorm573/state-management-with-ngrx-in-angular-66ddc61cdf14
[use_akita]:https://medium.com/@ShantKhayalian/state-management-in-angular-ngrx-vs-akita-e31d81a2ec87