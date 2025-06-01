
# Not using lazy loading

## Description

El *lazy loading* es un patrón de diseño que retrasa la importación e inicialización de módulos o componentes, directivas o pipes `standalone` (considerados módulos autocontenidos) en Angular hasta el momento en que el usuario accede a la ruta que los utiliza. 

Este *code smell* se da cuando se prescinde de este patron, provocando que la aplicación agrupe todos los módulos en un único bundle que se descarga al iniciar la aplicación, haciendo más lenta la carga inicial.

## Why is a code smell

- **Tiempos de carga inicial elevados:** Al cargar todo el código de la aplicación de forma ansiosa (eagerly), se aumenta el tiempo hasta el primer render, perjudicando la experiencia en redes lentas.
- **Mayor consumo de memoria:** El navegador debe mantener en memoria todos los módulos, aunque algunos jamás se lleguen a usar durante la sesión.
- **Peor percepción:** Bundles grandes pueden bloquear la renderización, generando una percepción de lentitud.
- **Escalabilidad limitada:** A medida que crece la aplicación, añadir nuevas funcionalidades sin separar por módulos diferidos infla aún más el bundle, complicando el mantenimiento y la optimización.

---
## Non-Compliant code example
```typescript
import { HomeComponent } from './home/home.component';
@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent,
      },
    ]),
  ],
})
export class AppModule {}
```
En este ejemplo, el componente HomeComponent se carga y se incluyen en el bundle principal, descargándose aunque el usuario nunca navegue a su ruta.

---
## Compliant code example
```typescript
@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'home',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
      },
    ]),
  ],
})
export class AppModule {}
```
El `lazy loading` se logra a través de la definición del método `Route.loadComponent` con lo que indicamos a angular que debe ejecutar como carga cuando se consulte esa ruta, de esta manera podemos agrupar secciones de la web en módulos (ya sean módulos propiamente o componentes standalone), logrando de esta manera una carga progresiva del contenido agrupado en módulos de la web.

[1]:https://v17.angular.io/guide/lazy-loading-ngmodules 
[2]:https://angular.dev/reference/migrations/route-lazy-loading

---
## Sources
- https://dev.to/this-is-angular/7-deadly-sins-of-angular-1n2j 7º sin (*Eagerly loading all features*)
- https://javascript-conference.com/blog/angular-code-smells/ section 4 (*Loading Speed*)
- https://angular-enterprise.com/en/ngpost/courses/bad-practices/ 7º point (*lack of splitting in modules, especially lazy modules...*)
- https://www.freecodecamp.org/news/best-practices-for-a-clean-and-performant-angular-application-288e7b39eb6f/ section 8
- https://levelup.gitconnected.com/refactoring-angular-applications-be18a7ee65cb section 2.1 (*Lazy Loading Feature Modules*)
- https://roshancloudarchitect.me/identifying-and-eliminating-code-smells-in-angular-micro-frontends-advanced-techniques-for-6f07a781f93d 
- https://zydesoft.com/must-know-clean-code-principles-in-angular/ section 10