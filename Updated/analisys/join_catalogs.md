# Joined Catalog
| Code Smell                                        | Paper| Own | Total| A                                                                                                | Sources                | 
| :--                                               | :--: | :--:| :--: | ---                                                                                              | ---                    | 
| Not unsubscribe a subscription                    | 8    | 2   | 10   | [1].1, [2].3, [8].3, [10].6, [12].1.1, [15].4, [16].2.3, [16].4.1, [17].5, [18].3, [23].3, [25].2| [N3].5, [N7]           | 
| Unoptimized module loading                        | 6    | 2   | 08   | [3].7, [6].4, [9].7, [10].8, [16].2.1                                                            | [N1], [N3].10          | 
| God Component                                     | 7    | 0   | 07   | [3].4, [4].1, [6].5, [8].1, [10].13, [12].1.2                                                    |                        | 
| Default change detection instead OnPush           | 4    | 3   | 07   | [1].3, [2].2                                                                                     | [N1], [N2], [N4]       | 
| Nested subscriptions                              | 5    | 1   | 06   | [10].9, [17].6, [18].6, [20], [23].4                                                             | [N3].6                 | 
| Manual subscriptions                              | 4    | 2   | 06   | [3].5, [10].5, [16].2.3, [17].7                                                                  | [N3].9, [N7]           | 
| Mixing Smart and Dumb components                  | 3    | 3   | 06   | [3].3, [9].1, [16].1.2, [10].12                                                                  | [N1].3, [N3].7, [N3].12| 
| Include functions in templates                    | 4    | 1   | 05   | [2].2, [16].2.2                                                                                  | [N2]                   | 
| Inheritance over composition                      | 3    | 1   | 04   | [16].1.1, [19], [26]                                                                             | [N4]                   | 
| Include logic in templates                        | 3    | 1   | 04   | [10].17, [16].4.3                                                                                | [N1].4                 | 
| No usage of trackBy                               | 2    | 2   | 04   | [1].2, [10].1                                                                                    | [N2], [N3]             | 
| Include logic instead of rxjs operators           | 3    | 0   | 03   | [18].10                                                                                          |                        | 
| Subscribe in constructor                          | 2    | 1   | 03   | [18].2                                                                                           | [N7]                   | 
| Duplicate state across components                 | 2    | 1   | 03   | [10].19, [23].1, [23].2                                                                          | [N1].3, [N1].6         | 
| Use a component in multiple modules               | 2    | 1   | 03   | [12].1.6, [15].3, [25].5                                                                         | [N1].1, [N1].3         | 
| Mixing behaviors in Angular’s Lifecycle           | 2    | 0   | 02   | [15].6, [25].1                                                                                   |                        | 
| Give streams to children components               | 2    | 0   | 02   | [17].8, [18].5                                                                                   |                        | 
| Long import paths instead of alias                | 2    | 0   | 02   | [6].1                                                                                            |                        | 
| No usage of bundlers to reduce size of application| 2    | 0   | 02   | [8].4                                                                                            |                        | 
| Modify DOM directly                               | 2    | 0   | 02   | [12].1.4, [14], [15].1, [25].4                                                                   |                        | 
| Use stateful streams                              | 2    | 0   | 02   | [21], [23].5                                                                                     |                        | 
| No usage of pipes                                 | 2    | 0   | 02   | [4].7, [8].2                                                                                     |                        | 
| Multiple subscriptions                            | 0    | 2   | 02   |                                                                                                  | [N2],[N7]              |

# Descartados
| Code Smell                                                             | Paper| Own | Total| Sources|
| :--                                                                    | :--: | :--:| :--: | --     |
| Usage of detectChanges instead of markForCheck                         | 0    | 1   | 01   | [N2]   |
| No usage of input and output signals                                   | 0    | 1   | 01   | [N5]   |
| Usage of non signal values in templates                                | 0    | 1   | 01   | [N5]   |
| Usage of `@Input()` and `@Output()` instead `model`                    | 0    | 1   | 01   | [N5]   |
| Usage of `OnChange` instead of effect                                  | 0    | 1   | 01   | [N5]   |
| Complex signals                                                        | 0    | 1   | 01   | [N5]   |
| Abusive usage of effect                                                | 0    | 1   | 01   | [N5]   |
| Usage of computed signals or effects in class properties               | 0    | 1   | 01   | [N5]   |
| Usage of `WritableSignal` as function parameter                        | 0    | 1   | 01   | [N5]   |
| Usage of toObservable                                                  | 0    | 1   | 01   | [N5]   |
| Usage of toSignal on Colds observables                                 | 0    | 1   | 01   | [N5]   |
| Complex effects                                                        | 0    | 1   | 01   | [N6]   |
| Not using asyncPipe on for, if and else directives to manage load state| 0    | 1   | 01   | [N7]   |
| Not using pipeable operators                                           | 0    | 1   | 01   | [N3].1 |
| Not usage of proper rxjs operators                                     | 0    | 1   | 01   | [N3].2 |
| Usage of async/await and Promises instead of RXJs or mix them          | 0    | 1   | 01   | [N4]   |                        

> [!Note]
> If a code smell has some sources from the same resource only will count once.
> If is mention in other code smell will not count.

[N1]:https://roshancloudarchitect.me/identifying-and-eliminating-code-smells-in-angular-micro-frontends-advanced-techniques-for-6f07a781f93d
[N2]:https://medium.com/@robert.maiersilldorff/code-smells-in-angular-deep-dive-part-i-d63dd5f5215e
[N3]:https://zydesoft.com/must-know-clean-code-principles-in-angular/
[N4]:https://dev.to/vixero/common-mistakes-that-backend-programmers-make-in-angular-434d
[N5]:https://developapa.com/signals/
[N6]:https://davidboothe.com/2024/08/getting-started-with-angular-signals-a-comprehensive-guide/
[N7]:https://blog.eyas.sh/2018/12/use-asyncpipe-when-possible/

[1]:https://marcoslooten.com/blog/4-common-angular-mistakes/
[2]:https://alex-klaus.com/angular-code-review/
[3]:https://dev.to/this-is-angular/7-deadly-sins-of-angular-1n2j
[4]:https://codeburst.io/angular-bad-practices-eab0e594ce92
[6]:https://javascript-conference.com/blog/angular-code-smells/
[8]:https://medium.com/codex/avoid-these-bad-practices-when-you-are-an-angular-developer-135323db74c7
[9]:https://angular-enterprise.com/en/ngpost/courses/bad-practices/
[10]:https://www.freecodecamp.org/news/best-practices-for-a-clean-and-performant-angular-application-288e7b39eb6f/
[12]:https://www.tatvasoft.com/outsourcing/2021/07/top-angular-developer-pitfalls.html
[14]:https://rules.sonarsource.com/typescript/RSPEC-6268/
[15]:https://chudovo.com/most-common-angular-mistakes-every-developer-should-avoid/
[16]:https://levelup.gitconnected.com/refactoring-angular-applications-be18a7ee65cb
[17]:https://blog.brecht.io/rxjs-best-practices-in-angular/
[18]:https://www.slideshare.net/slideshow/rxjs-best-bad-practices-for-angular-developers/233392471
[19]:https://danywalls.com/understand-composition-and-inheritance-in-angular
[20]:https://www.thinktecture.com/angular/rxjs-antipattern-1-nested-subs/
[21]:https://www.thinktecture.com/en/angular/rxjs-antipattern-2-state/
[22]:https://www.thinktecture.com/en/angular/rxjs-antipattern-3-async-pipe/
[23]:https://www.sourceallies.com/2020/11/state-management-anti-patterns/
[25]:https://medium.com/@OPTASY.com/what-are-the-5-most-common-angular-mistakes-that-developers-make-53f6d7c5bf65
[26]:https://dev.to/this-is-angular/you-dont-want-a-basecomponent-in-your-app-23hn

<!--
\[(\[\d+\](\.\d+)*(,\s*\[\d+\](\.\d+)*)*)\]
-->