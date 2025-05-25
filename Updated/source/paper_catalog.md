| Code Smell                                                        | Count| Sources                                                                                                                  | Not 100% match                                                                    | 
| :--                                                               | :--: | --                                                                                                                       | ---                                                                               | 
| Not unsubscribe a subscription                                    | 8    | [[1].1], [[2].3], [[8].3], [[10].6], [[12].1.1], [[15].4], [[16].2.3], [[16].4.1], [[17].5], [[18].3], [[23].3], [[25].2]| [[8]]                                                                             | 
| **God Component**                                                 | 7    | [[3].4], [[4].1], [[6].5]                                                                                                | [[7].6], [[8].1], [[12].1.2]                                                      | 
| Not using LazyLoading in Modules                                  | 6    | [[3].7], [[6].4], [[9].7], [[10].8], [[16].2.1]                                                                          |                                                                                   | 
| **Nested subscriptions**                                          | 5    | [[10].9], [[17].6], [[18].6], [[20]], [[23].4]                                                                           |                                                                                   |
| Manual subscriptions (subscriptions in templates)                 | 4    | [[3].5], [[10].5], [[16].2.3], [[17].7]                                                                                  |                                                                                   | 
| No usage of OnPush strategy                                       | 4    | [[1].3], [[2].2]                                                                                                         |                                                                                   | 
| Inheritance of a BaseComponent                                    | 3    | [[16].1.1], [[19]], [[26]]                                                                                               |                                                                                   | 
| Mixing Smart/Dumb components in the same scope                    | 3    | [[3].3], [[9].1], [[16].1.2]                                                                                             | [[10].12, [10].13]                                                                | 
| **Include logic instead of rxjs operators**                       | 3    | [[1].4], [[18].10]                                                                                                       | [[10].3] usar operadores desde operadores, [[10].7] operadores adecuados, [[17].2]| 
| Include logic in HTML templates                                   | 3    | [[10].17], [[16].4.3]                                                                                                    |                                                                                   | 
| Subscribe in constructor                                          | 2    | [[18].2]                                                                                                                 |                                                                                   | 
| Mixing behaviors in Angular’s Lifecycle (ngOnChanges vs ngDoCheck)| 2    | [[15].6], [[25].1]                                                                                                       |                                                                                   | 
| Include functions in HTML templates                               | 2    | [[2].2], [[16].2.2]                                                                                                      |                                                                                   | 
| Give streams to children components                               | 2    | [[17].8], [[18].5]                                                                                                       |                                                                                   | 
| No usage of alias for long import paths                           | 2    | [[6].1]                                                                                                                  |                                                                                   | 
| No usage of pipes                                                 | 2    | [[4].7], [[8].2]                                                                                                         |                                                                                   | 
| No usage of bundlers to reduce size of application (>9)           | 2    | [[8].4]                                                                                                                  |                                                                                   | 
| No usage of trackBy                                               | 2    | [[1].2], [[10].1]                                                                                                        |                                                                                   | 
| Use the same component in multiple modules                        | 2    | [[12].1.6], [[15].3], [[25].5]                                                                                           |                                                                                   | 
| Modify DOM directly                                               | 2    | [[12].1.4], [[14]], [[15].1], [[25].4]                                                                                   |                                                                                   | 
| Duplicate state across components                                 | 2    | [[23].1, [23].2]                                                                                                         | [[10].19]                                                                         | 
| Use stateful streams (!compartir estados intermedios)             | 2    | [[21]], [[23].5]                                                                                                         |                                                                                   | 

Revisar [3].1 multiples soluciones (funciones puras, composición sobre herencia, rxjs, OnPush, observable + asyncPipe, gestión de estado ngrx)

> [!Note]
> [5] is paid, however [6] is the same website but free of charge. Therefore [6] will be used.
> [Fuente 27 actualizada][27]: "https://indepth.dev/posts/1189/angular-bad-practices-revisited/ -> https://angular.love/angular-bad-practices-revisited"
> [Fuente 28 actualizada][28]: "https://www.bytelimes.com/why-you-should-avoid-type-assertions-in-typescript/ -> https://web.archive.org/web/20231208231505/https://www.bytelimes.com/why-you-should-avoid-type-assertions-in-typescript/"

Revisar [15], [23]

[22]: AsyncPipe, combine streams

[1]:https://marcoslooten.com/blog/4-common-angular-mistakes/
[2]:https://alex-klaus.com/angular-code-review/
[3]:https://dev.to/this-is-angular/7-deadly-sins-of-angular-1n2j
[4]:https://codeburst.io/angular-bad-practices-eab0e594ce92
[CP5]:https://devm.io/angular/sngular-codesmell-smell-001
[6]:https://javascript-conference.com/blog/angular-code-smells/
[7]:https://www.codelord.net/2015/09/30/angular-2-preparation-controller-code-smells/
[8]:https://medium.com/codex/avoid-these-bad-practices-when-you-are-an-angular-developer-135323db74c7
[9]:https://angular-enterprise.com/en/ngpost/courses/bad-practices/
[10]:https://www.freecodecamp.org/news/best-practices-for-a-clean-and-performant-angular-application-288e7b39eb6f/
[NR11]:https://thecodebuzz.com/continuous-code-quality-in-angular-7-applications-using-sonar/
[12]:https://www.tatvasoft.com/outsourcing/2021/07/top-angular-developer-pitfalls.html
[NR13]:https://dev.to/thinkster/code-smell-too-many-parameters-435e
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
[NU24]:https://medium.com/google-developers/the-single-biggest-angular-and-firebase-code-smell-and-how-to-fix-it-a0d1ef96ca65
[25]:https://medium.com/@OPTASY.com/what-are-the-5-most-common-angular-mistakes-that-developers-make-53f6d7c5bf65
[26]:https://dev.to/this-is-angular/you-dont-want-a-basecomponent-in-your-app-23hn
[NU27]:https://angular.love/angular-bad-practices-revisited 
[NR28]:https://web.archive.org/web/20231208231505/https://www.bytelimes.com/why-you-should-avoid-type-assertions-in-typescript/
