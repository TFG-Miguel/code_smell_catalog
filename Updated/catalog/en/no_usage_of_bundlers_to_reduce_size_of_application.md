# No usage of bundlers to reduce size of application

## Description

Este *code smell* se presenta cuando una aplicación Angular no aprovecha correctamente las herramientas y configuraciones disponibles para minimizar el tamaño del paquete final que se entrega al cliente. Esto incluye una mala configuración del `build`, la ausencia de técnicas como el *lazy loading*, o el uso ineficiente de librerías externas.

A partir de Angular 9 se introdujo **Ivy**, un nuevo compilador y motor de renderizado que permite generar paquetes significativamente más pequeños, gracias a su capacidad de eliminar código no utilizado (**tree-shaking**) y de compilar los componentes de forma más granular. Desde Angular 12, Ivy se convirtió en el único motor de renderizado disponible, pero para aprovechar al máximo sus ventajas es necesario seguir ciertas prácticas específicas de optimización:

- Uso del comando `ng build --configuration production`
- Eliminación de imports globales innecesarios
- Uso de pipes puros (`pure: true`)
- Aplicación de *lazy loading* de módulos y componentes
- Configuración adecuada de presupuestos (*budgets*) en `angular.json`
- Separación lógica por dominios, usando `standalone components` si es posible

Estas acciones permiten reducir el tamaño de los *bundles* generados, lo que repercute en tiempos de carga más rápidos, mejor experiencia de usuario y mayor eficiencia en dispositivos móviles o de bajo rendimiento.

---

## Why is a code smell

- **Genera paquetes excesivamente grandes**: lo que incrementa el tiempo de descarga, análisis y ejecución en el navegador.
- **Desaprovecha las ventajas de Ivy**: al no permitir que el compilador elimine dependencias innecesarias ni optimice los componentes.
- **Rompe el principio de modularidad progresiva**: al cargar todo el código de la aplicación desde el inicio.
- **Impacta negativamente en la experiencia de usuario**: especialmente en conexiones lentas o dispositivos de gama baja.
- **Dificulta el mantenimiento y escalado**: al no tener visibilidad ni límites claros sobre el tamaño y peso de los distintos artefactos generados.

---

## Non-Compliant code example

- No usar `ng build --configuration production`

- No configurar `budgets` en `angular.json`

- Importar librerías completas innecesariamente:

  ```ts
  // Impossible Tree-shaking
  import * as lodash from 'lodash';
  ```

- Uso de carga ansiosa (*eager loading*) de módulos grandes:

  ```ts
  import { AdminModule } from './admin/admin.module';

  const routes: Routes = [
    {
      path: 'admin',
      children: AdminModule.routes
    }
  ];
  ```

---

## Compliant code example

### Comando de build optimizado

```bash
ng build --configuration production
```

### Importaciones específicas

```ts
// Effective Tree-shaking
import cloneDeep from 'lodash/cloneDeep'; 
```

### Lazy loading de módulos

```ts
const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then(m => m.AdminModule)
  }
];
```

### Configuración de budgets (`angular.json`)

```json
"configurations": {
  "production": {
    "budgets": [
      {
        "type": "initial",
        "maximumWarning": "2mb",
        "maximumError": "5mb"
      },
      {
        "type": "anyComponentStyle",
        "maximumWarning": "6kb"
      }
    ],
    "optimization": true,
    "outputHashing": "all",
    "aot": true,
    "extractCss": true,
    "namedChunks": false,
    "extractLicenses": true,
    "vendorChunk": false,
    "buildOptimizer": true,
    "sourceMap": false
  }
}
```

---

> [!Tip]
> Para hacer bloques más pequeños, y por tanto eficientes, se recomienda:
> - **Usar pipes puros** para permitir a Ivy eliminar código no referenciado:
>   ```ts
>   @Pipe({ name: 'uppercaseName', pure: true })
>   export class UppercaseNamePipe implements PipeTransform {
>     transform(name: string): string {
>       return name.toUpperCase();
>     }
>   }
>   ```
> - **Dividir código por dominios**, usando componentes independientes (`standalone`) cuando sea posible para favorecer la fragmentación del bundle.

## Sources
- https://medium.com/codex/avoid-these-bad-practices-when-you-are-an-angular-developer-135323db74c7 section 4 (*Shake your code*)