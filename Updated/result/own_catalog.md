|**Category** |**Description** |**Count**  |
|--------------|----------------|--------------|
|**Change Detection Management**      | Default *Change Detection Strategy* instead of `OnPush`                 | 2 |
|                                     | Using `detectChanges` instead of `markForCheck`                         | 1 |
|**Use of RxJS and Observables**      | Not using *pipeable operators* when working with `rxjs`                 | 2 |
|                                     | Not using appropriate flatting operators with observables (`switchMap`, `mergeMap`, etc.)         | 1 |
|                                     | Nested subscriptions within other subscriptions                         | 3 |
|                                     | Not unsubscribing (`unsubscribe`, `takeUntil`)                          | 3 |
|                                     | Not using `async` pipe in templates                                     | 3 |
|                                     | Incorrect use of `toObservable()` in *Signals*                          | 1 |
|**Template Optimization**            | Calling methods directly in the template                                | 1 |
|                                     | Not using `trackBy` in `*ngFor`                                         | 2 |
|                                     | Business logic inside templates                                         | 2 |
|                                     | Templates with complex conditionals (`If` or `For` directives nesting)  | 1 |
|**Lazy Loading and Modularization**  | Not using `lazy loading`                                                | 2 |
|                                     | Preloading key modules                                                  | 1 |
|**State Management**                 | Not separating components into Smart/Dumb                               | 1 |
|                                     | Not using *State Management* (`NgRx` or `Akita`)                        | 4 |
|**Reusability**                      | Not creating small reusable components                                  | 1 |
|                                     | Duplicated code (same functionalities repeated across micro-frontends)  | 1 |
|                                     | Making duplicate API calls                                              | 1 |
|**Signals**                          | Using `@Input` and `@Output` instead of `input()` and `output()`        | 1 |
|                                     | Using `ngOnChanges()` instead of `effect()`                             | 1 |
|                                     | Using complex `computed()` signals                                      | 1 |
|                                     | Using complex `effects()` signals                                       | 1 |
|                                     | Excessive use of `effect()`                                             | 1 |
|                                     | Using class properties inside `computed()` or `effects()`               | 1 |
|                                     | Passing `WritableSignal` as a function parameter                        | 1 |
|                                     | Using `toSignal()` on cold observables (HTTP requests)                  | 2 |