# No usage of bundlers to reduce size of application

## Description

Este *code smell* se presenta cuando una aplicación Angular no utiliza adecuadamente un bundler para reducir el tamaño del paquete final en producción. A pesar de que Angular CLI ya incluye Webpack como herramienta de *bundling*, muchos proyectos no aprovechan sus capacidades si no configuran correctamente el *build* para producción o si no usan prácticas recomendadas como:

- Lazy loading de módulos
- Importaciones específicas (en lugar de importar librerías completas)
- Pipes puras
- Uso del comando `ng build --configuration production`
- Eliminación de código muerto (*tree-shaking*)

Además, la falta de configuración adecuada en `angular.json` puede hacer que el proceso de construcción no elimine código innecesario ni optimice correctamente los recursos.

---

## Why is a code smell

- **Crea paquetes innecesariamente grandes**: que impactan directamente en el tiempo de carga.
- **Reduce el rendimiento general**: tanto del navegador como del servidor (en SSR).
- **Impacta negativamente en la experiencia del usuario**: especialmente en dispositivos móviles.
- **Ignora herramientas ya incluidas en Angular**: como optimización de dependencias y minificación.
- **Dificulta el mantenimiento del código**: al no detectar dependencias no utilizadas.

---

## Non-Compliant code example

- No usar `ng build --configuration production`
- No configurar `budgets` en `angular.json`
- Usar imports globales innecesarios (cargar toda una librería en vez de lo que se necesite):
  ```ts
  import * as lodash from 'lodash';
  ```
- Uso de carga ansiosa o '*eager*'
  ```ts
  import AdminModule from './admin/admin.module'

  const routes: Routes = [
    {
      path: 'admin',
      children: AdminModule.routes
    }
  ];
  ```

---
## Compliant code example

### Comando de build en producción

```bash
ng build --configuration production
```

### Importaciones concretas

```ts
import cloneDeep from 'lodash/cloneDeep';
```

### Lazy loading de módulos

```ts
const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }
];
```

---

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
    "fileReplacements": [
      {
        "replace": "src/environments/environment.ts",
        "with": "src/environments/environment.prod.ts"
      }
    ],
    "optimization": true,
    "outputHashing": "all",
    "sourceMap": false,
    "extractCss": true,
    "namedChunks": false,
    "aot": true,
    "extractLicenses": true,
    "vendorChunk": false,
    "buildOptimizer": true
  }
}
```
>[!tip]
> Para hacer más eficientes o pequeños estos bloques se recomienda:
> - El uso `pure` pipes para facilitar el *tree-shaking* (limpieza de código muerto).
> - Divide el código por dominios y aplica `standalone components` cuando sea posible para dividir el bundler en trozos más pequeños que se irán cargando a necesidad.
## Sources
- https://medium.com/codex/avoid-these-bad-practices-when-you-are-an-angular-developer-135323db74c7 section 4