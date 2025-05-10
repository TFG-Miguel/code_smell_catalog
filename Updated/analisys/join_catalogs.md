# Joined Catalog
|Code Smell                                                                               |Source  |Paper | Own |Total|
|:--                                                                                      |:--:    |:--:  |:--: |:--: |
|Not unsubscribe a subscription                                                           |Paper   | 8    | 3   | 11  |
|Not using LazyLoading in Modules                                                         |Paper   | 6    | 2   |  8  |
|Manual subscriptions (subscriptions in templates)                                        |Paper   | 4    | 3   |  7  |
|No usage of OnPush strategy                                                              |Paper   | 4    | 2   |  6  |
|Duplicate state across components                                                        |Paper   | 2    | 4   |  6  |
|Include logic in HTML templates                                                          |Paper   | 3    | 2   |  5  |
|No usage of trackBy                                                                      |Paper   | 2    | 2   |  4  |
|Mixing Smart/Dumb components in the same scope                                           |Paper   | 3    | 1   |  4  |
|Inheritance of a BaseComponent                                                           |Paper   | 3    | 0   |  3  |
|Include functions in HTML templates                                                      |Paper   | 2    | 1   |  3  |
|Use the same component in multiple modules                                               |Paper   | 2    | 1   |  3  |
|Nested subscriptions within other subscriptions                                          |Search  | 0    | 3   |  3  |
|Subscribe in constructor                                                                 |Paper   | 2    | 0   |  2  |
|Mixing behaviors in Angular’s Lifecycle                                                  |Paper   | 2    | 0   |  2  |
|Modify DOM directly                                                                      |Paper   | 2    | 0   |  2  |
|Give streams to children components                                                      |Paper   | 2    | 0   |  2  |
|No usage of alias for long import paths                                                  |Paper   | 2    | 0   |  2  |
|No usage of pipes                                                                        |Paper   | 2    | 0   |  2  |
|No usage of bundlers to reduce size of application                                       |Paper   | 2    | 0   |  2  |
|Use stateful streams                                                                     |Paper   | 2    | 0   |  2  |
|Not using pipeable operators* when working with rxjs                                     |Search  | 0    | 2   |  2  |
|Using toSignal() on cold observables (HTTP requests)                                     |Search  | 0    | 2   |  2  |

# Only in search and only one match
|Code Smell                                                                               | Own |
|:--                                                                                      |:--: |
|Duplicate functionality across micro frontends                                           | 1   |
|Using detectChanges instead of markForCheck                                              | 1   |
|Not using appropriate flatting operators with observables (switchMap, mergeMap, etc.)    | 1   |
|Incorrect use of toObservable() in *Signals*                                             | 1   |
|Templates with complex conditionals (If or For directives nesting)                       | 1   |
|Preloading key modules                                                                   | 1   |
|Not creating small reusable components                                                   | 1   |
|Making duplicate API calls                                                               | 1   |
|Using @Input and @Output instead of input() and output()                                 | 1   |
|Using ngOnChanges() instead of effect()                                                  | 1   |
|Using complex computed() signals                                                         | 1   |
|Using complex effects() signals                                                          | 1   |
|Excessive use of effect()                                                                | 1   |
|Using class properties inside computed() or effects()                                    | 1   |
|Passing WritableSignal as a function parameter                                           | 1   |
