# Joined Catalog
|Code Smell| Paper|Own|Total|
|:--|:--:|:--:|:--:|
|Not unsubscribe a subscription [[3].5,[7]]                                                  |8|2|10|
|Unoptimized module loading [[1],[3].10]                                                     |6|2|08|
|Default change detection instead OnPush [[1],[2],[4]]                                       |4|3|07|
|Manual subscriptions [[3].9,[7]]                                                            |4|2|06|
|Mixing Smart and Dumb components [[1].3,[3].7, [3].12]                                      |3|3|06|
|Include functions in templates [[2]]                                                        |4|1|05|
|Inheritance over composition [[4]]                                                          |3|1|04|
|Include logic in templates [[1].4]                                                          |3|1|04|
|No usage of trackBy [[2],[3]]                                                               |2|2|04|
|Subscribe in constructor [[7]]                                                              |2|1|03|
|Duplicate state across components [[1].6]                                                   |2|1|03|
|Use a component in multiple modules [[1].1]                                                 |2|1|03|
|Mixing behaviors in Angular’s Lifecycle                                                     |2|0|02|
|Give streams to children components                                                         |2|0|02|
|Long import paths instead of alias                                                          |2|0|02|
|No usage of bundlers to reduce size of application                                          |2|0|02|
|Modify DOM directly                                                                         |2|0|02|
|Use stateful streams                                                                        |2|0|02|
|Multiple subscriptions [[2],[7]]                                                            |0|2|02|

|Code Smell| Paper|Own|Total|
|:--|:--:|:--:|:--:|
|Usage of detectChanges instead of markForCheck [[2]]                                        |0|1|01|
|Not using pipeable operators [[3].1]                                                        |0|1|01|
|Not usage of proper rxjs operators [[3].2]                                                  |0|1|01|
|Nested subscriptions [[3].6]                                                                |0|1|01|
|Usage of async/await and Promises instead of RXJs or mix them [[4]]                         |0|1|01|
|No usage of input and output signals [[5]]                                                  |0|1|01|
|Usage of non signal values in templates [[5]]                                               |0|1|01|
|Usage of `@Input()` and `@Output()` instead `model` [[5]]                                   |0|1|01|
|Usage of `OnChange` instead of effect [[5]]                                                 |0|1|01|
|Complex signals [[5]]                                                                       |0|1|01|
|Abusive usage of effect [[5]]                                                               |0|1|01|
|Usage of computed signals or effects in class properties [[5]]                              |0|1|01|
|Usage of WritableSignal as function parameter [[5]]                                         |0|1|01|
|Usage of toObservable [[5]]                                                                 |0|1|01|
|Usage of toSignal on Colds observables [[5]]                                                |0|1|01|
|Complex effects [[6]]                                                                       |0|1|01|
|Not using asyncPipe on for, if and else directives to manage load state [[7]]               |0|1|01|

[1]:https://roshancloudarchitect.me/identifying-and-eliminating-code-smells-in-angular-micro-frontends-advanced-techniques-for-6f07a781f93d
[2]:https://medium.com/@robert.maiersilldorff/code-smells-in-angular-deep-dive-part-i-d63dd5f5215e
[3]:https://zydesoft.com/must-know-clean-code-principles-in-angular/
[4]:https://dev.to/vixero/common-mistakes-that-backend-programmers-make-in-angular-434d
[5]:https://developapa.com/signals/
[6]:https://davidboothe.com/2024/08/getting-started-with-angular-signals-a-comprehensive-guide/
[7]:https://blog.eyas.sh/2018/12/use-asyncpipe-when-possible/