# Mixing Smart and Dumb components
## Description
*Este code smell* se da cuando un componente crece incluyendo lógica de negocio, llamadas HTTP, gestión de estado y responsabilidad de presentación en un solo lugar, se vuelve difícil de mantener y probar. 

El patrón de **Smart (container)** y **Dumb (presentational) Components** propone separar las responsabilidades:
- Los **Smart Components** se encargan de obtener datos, manejar el estado y coordinar servicios.
- Los **Dumb Components** sólo se ocupan de mostrar datos recibidos vía `@Input` y emitir eventos simples con `@Output`.

De esta manera logramos un componente *dump* desacoplado de la lógica recogida en el *smart* dotando, de esta manera, al componente *dump* de una mayor reusabilidad.
## Why is a code smell
- **Violación de la responsabilidad única**: Un componente monolítico hace demasiadas cosas (business logic + UI) y se aleja del principio SOLID de Single Responsibility (SRP).
- **Dificultad para pruebas unitarias**: Probar un componente que mezcla lógica de negocio y presentación requiere montar servicios y dependencias innecesarias.
- **Reutilización limitada**: La lógica y la vista están acopladas, impidiendo usar la parte de UI en otros contextos sin arrastrar dependencias y pudiendo llegar a duplicar código debido a su baja reutilización.
- **Mantenimiento complejo**: Cada cambio en la lógica de negocio o en la presentación obliga a revisar un único archivo masivo, aumentando riesgo de errores.

---
## Non-Compliant code example
```typescript 
@Component({
  selector: 'app-home',
  template: `
    <h2>All Lessons</h2>
    <h4>Total Lessons: {{lessons.length}}</h4>
    <div class="lessons-list-container v-h-center-block-parent">
        <table class="table lessons-list card card-strong">
            <tbody>
            <tr *ngFor="let lesson of lessons" (click)="selectLesson(lesson)">
                <td class="lesson-title"> {{lesson.description}} </td>
                <td class="duration">
                    <i class="md-icon duration-icon">access_time</i>
                    <span>{{lesson.duration}}</span>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
`,
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  lessons: Lesson[];

  constructor(private lessonsService: LessonsService) {  }

  ngOnInit() {
    this.lessonsService.findAllLessons()
      .pipe(tap(console.log))
      .subscribe(
        lessons => this.allLessons = lessons
      );
  }

  selectLesson(lesson) { ... }
}

```
---
## Compliant code example
### Dump component (Presentational)
```typescript
import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Lesson} from "../shared/model/lesson";

@Component({
  selector: 'lessons-list',
  template: `
      <table class="table lessons-list card card-strong">
          <tbody>
          <tr *ngFor="let lesson of lessons" (click)="selectLesson(lesson)">
              <td class="lesson-title"> {{lesson.description}} </td>
              <td class="duration">
                  <i class="md-icon duration-icon">access_time</i>
                  <span>{{lesson.duration}}</span>
              </td>
          </tr>
          </tbody>
      </table>  
  `,
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent {

  @Input()
  lessons: Lesson[];

  @Output('lesson')
  lessonEmitter = new EventEmitter<Lesson>();

  selectLesson(lesson:Lesson) {
    this.lessonEmitter.emit(lesson);
  }

}
```
### Smart component (Container / Business logic)
```typescript
import { Component, OnInit } from '@angular/core';
import {LessonsService} from "../shared/model/lessons.service";
import {Lesson} from "../shared/model/lesson";

@Component({
  selector: 'app-home',
  template: `
      <h2>All Lessons</h2>
      <h4>Total Lessons: {{lessons.length}}</h4>
      <div class="lessons-list-container v-h-center-block-parent">
          <lessons-list [lessons]="lessons" (lesson)="selectLesson($event)"></lessons-list>
      </div>
`,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lessons: Lesson[];

  constructor(private lessonsService: LessonsService) {   }

  ngOnInit() { ... }

  selectLesson(lesson) { ... }
}
```

[1]:https://blog.angular-university.io/angular-2-smart-components-vs-presentation-components-whats-the-difference-when-to-use-each-and-why/

[3]:https://zydesoft.com/must-know-clean-code-principles-in-angular/

[4]:https://blog.stackademic.com/angular-smart-dumb-components-118f557b667c
[5]:https://jackthenomad.com/how-to-write-good-composable-and-pure-components-in-angular-2-1756945c0f5b
[6]:https://tejas-variya.medium.com/smart-vs-dumb-components-in-angular-the-secret-to-scalable-apps-49c2f49103eb

----
## Sources
- https://dev.to/this-is-angular/7-deadly-sins-of-angular-1n2j section 3
- https://angular-enterprise.com/en/ngpost/courses/bad-practices/ section 1
- https://levelup.gitconnected.com/refactoring-angular-applications-be18a7ee65cb section 1.2
- https://www.freecodecamp.org/news/best-practices-for-a-clean-and-performant-angular-application-288e7b39eb6f/ section 12
- https://roshancloudarchitect.me/identifying-and-eliminating-code-smells-in-angular-micro-frontends-advanced-techniques-for-6f07a781f93d section 3
- https://zydesoft.com/must-know-clean-code-principles-in-angular/ section 7
- https://zydesoft.com/must-know-clean-code-principles-in-angular/ section 12