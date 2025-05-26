# Joined Catalog
| Code Smell                                        | Paper| Own | Total| Sources              | 
| :--                                               | :--: | :--:| :--: | ---                  | 
| Not unsubscribe a subscription                    | 8    | 2   | 10   | [[3].5,[7]]          | 
| Unoptimized module loading                        | 6    | 2   | 08   | [[1],[3].10]         | 
| **God Component**                                 | 7    | 0   | 07   |                      | 
| Default change detection instead OnPush           | 4    | 3   | 07   | [[1],[2],[4]]        | 
| **Nested subscriptions**                          | 5    | 1   | 06   | [[3].6]              | 
| Manual subscriptions                              | 4    | 2   | 06   | [[3].9,[7]]          | 
| Mixing Smart and Dumb components                  | 3    | 3   | 06   | [[1].3,[3].7, [3].12]| 
| Include functions in templates                    | 4    | 1   | 05   | [[2]]                | 
| Inheritance over composition                      | 3    | 1   | 04   | [[4]]                | 
| Include logic in templates                        | 3    | 1   | 04   | [[1].4]              | 
| No usage of trackBy                               | 2    | 2   | 04   | [[2],[3]]            | 
| Subscribe in constructor                          | 2    | 1   | 03   | [[7]]                | 
| Duplicate state across components                 | 2    | 1   | 03   | [[1].6]              | 
| Use a component in multiple modules               | 2    | 1   | 03   | [[1].1]              | 
| Mixing behaviors in Angular’s Lifecycle           | 2    | 0   | 02   |                      | 
| Give streams to children components               | 2    | 0   | 02   |                      | 
| Long import paths instead of alias                | 2    | 0   | 02   |                      | 
| No usage of bundlers to reduce size of application| 2    | 0   | 02   |                      | 
| Modify DOM directly                               | 2    | 0   | 02   |                      | 
| Use stateful streams                              | 2    | 0   | 02   |                      | 
| Multiple subscriptions                            | 0    | 2   | 02   | [[2],[7]]            | 

## Limbo
| Code Smell                                                   | Paper| Own | Total| Sources| 
| :--                                                          | :--: | :--:| :--: | ---    | 
| **Include logic instead of rxjs operators**                  | 3    | 0   | 03   |        | 
| Not using pipeable operators                                 | 0    | 1   | 01   | [[3].1]| 
| Not usage of proper rxjs operators                           | 0    | 1   | 01   | [[3].2]| 
| Usage of async/await and Promises instead of RXJs or mix them| 0    | 1   | 01   | [[4]]  |                        

# Descartados


| Code Smell                                                             | Paper| Own | Total| Sources| 
| :--                                                                    | :--: | :--:| :--: | --     | 
| Usage of detectChanges instead of markForCheck                         | 0    | 1   | 01   | [[2]]  | 
| No usage of input and output signals                                   | 0    | 1   | 01   | [[5]]  | 
| Usage of non signal values in templates                                | 0    | 1   | 01   | [[5]]  | 
| Usage of `@Input()` and `@Output()` instead `model`                    | 0    | 1   | 01   | [[5]]  | 
| Usage of `OnChange` instead of effect                                  | 0    | 1   | 01   | [[5]]  | 
| Complex signals                                                        | 0    | 1   | 01   | [[5]]  | 
| Abusive usage of effect                                                | 0    | 1   | 01   | [[5]]  | 
| Usage of computed signals or effects in class properties               | 0    | 1   | 01   | [[5]]  | 
| Usage of WritableSignal as function parameter                          | 0    | 1   | 01   | [[5]]  | 
| Usage of toObservable                                                  | 0    | 1   | 01   | [[5]]  | 
| Usage of toSignal on Colds observables                                 | 0    | 1   | 01   | [[5]]  | 
| Complex effects                                                        | 0    | 1   | 01   | [[6]]  | 
| Not using asyncPipe on for, if and else directives to manage load state| 0    | 1   | 01   | [[7]]  | 

[1]:https://roshancloudarchitect.me/identifying-and-eliminating-code-smells-in-angular-micro-frontends-advanced-techniques-for-6f07a781f93d
[2]:https://medium.com/@robert.maiersilldorff/code-smells-in-angular-deep-dive-part-i-d63dd5f5215e
[3]:https://zydesoft.com/must-know-clean-code-principles-in-angular/
[4]:https://dev.to/vixero/common-mistakes-that-backend-programmers-make-in-angular-434d
[5]:https://developapa.com/signals/
[6]:https://davidboothe.com/2024/08/getting-started-with-angular-signals-a-comprehensive-guide/
[7]:https://blog.eyas.sh/2018/12/use-asyncpipe-when-possible/