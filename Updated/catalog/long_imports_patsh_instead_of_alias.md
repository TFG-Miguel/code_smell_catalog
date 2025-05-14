# Long import paths instead of alias

## Description

Este *code smell* ocurre cuando se utilizan rutas de importación largas y relativas (por ejemplo, `../../../../services/user/user.service`) en lugar de definir y usar **alias de importación**. A medida que crece la estructura de carpetas de una aplicación Angular, estas rutas relativas profundas se vuelven difíciles de leer, mantener y refactorizar.

Angular (a través de TypeScript) permite definir alias personalizados en el archivo `tsconfig.json`, lo que facilita importaciones limpias, claras y estables. Usar alias ayuda a mejorar la mantenibilidad, evitar errores y facilitar la navegación entre módulos.

## Why is a code smell

- **Reduce la legibilidad**: las rutas largas son visualmente ruidosas y difíciles de seguir.
- **Dificulta el mantenimiento**: los cambios en la estructura de carpetas requieren actualizar muchas rutas.
- **Aumenta la probabilidad de errores**: es fácil equivocarse con el número de `../`.
- **Rompe la escalabilidad**: en proyectos grandes, las rutas relativas generan confusión.
- **Dificulta la navegación en el editor**: el autocompletado y la resolución de paths se vuelve menos predecible.

## Non-Compliant code example

```ts
// user.component.ts
import { UserService } from '../../../../core/services/user/user.service';
import { environment } from '../../../../environments/environment';
```


## Compliant code example

```ts
// tsconfig.json (o tsconfig.base.json)
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@core/*": ["src/app/core/*"],
      "@env": ["src/environments/environment"],
      "@shared/*": ["src/app/shared/*"]
    }
  }
}
```

```ts
// user.component.ts
import { UserService } from '@core/services/user/user.service';
import { environment } from '@env';
```

# Recomendaciones
- Define alias para carpetas comunes como `@core`, `@shared`, `@env`, `@features`, `@models`.
- Usa alias tanto en el código del proyecto como en las pruebas.

