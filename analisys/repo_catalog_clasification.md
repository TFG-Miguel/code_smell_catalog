# Tabla para la clasificación de reglas
| Regla | AUTO | SEMI | MANUAL | Recomendada | Tiene soluciones | Notas |
| --- | :--: | :--: | :--: | :--: | :--: | --- |
| prefer-on-push-component-change-detection |    | ⚠ |    |    | 💡 | Depende de si el programador ha implementado alguna lógica concreta |
| use-component-view-encapsulation          |    | ⚠ |    |    | 💡 | Depende de si el programador ha implementado alguna lógica concreta |
| relative-url-prefix                       | 🛠 |    |    |    |    | Con la pega de que solo adpatará las url no las corregirá si no son validas o si son absolutas `(\[A-Z]:/ \| /)` |
| component-max-inline-declarations         | 🛠 |    |    |    |    | Puede extraerse la información pero en caso de `templates` y `styles` con `template strings` no se extaería la información por lo que no se modificará y en el caso de las animaciones las dependencias entre ficheros podrían no ser validas (generando dependencias circulares).<br>Se podría evaluar el `template` y establecerlo |
| prefer-output-readonly                    |    | ⚠ | ❗ |    | 💡 | La solución de agregar un readonly está ya implementado como sugerencia por que ciertos cambios requieren la intervención del usuario para no dañar la lógica |
| use-injectable-provided-in                |    | ⚠ |    |    | 💡 | Es autosolucionable mientras que no el provideIn dependa del contexto o si hay configuraciones concretas (usar por defecto `provideIn: 'root'`). Ya implementado como sugerencia |
| runtime-localize                          |    | ⚠ |    |    |    | Podría ser solucionable si solo es encapsular el `localize` o agregar un `readonly` reemplazando un posible prefijo `static` a una variable de ambito de clase<br>Además se debería utilizar una estrategia por defecto debido a que hay varias permitidas, lo considero más una sugerencia|
| no-output-on-prefix                       | 🛠 |    |    | ✅ |    | El impacto podría ser dañino si es parte de la filosofía del proyecto pero debe ser supervisado por el usuario |
| sort-lifecycle-methods                    | 🛠 |    |    |    |    | Supervisar el impacto pero debería poder ser automática |
| use-component-selector                    |    | ⚠ |    |    |    | Se puede dar un nombre automático en base al componente |
| no-empty-lifecycle-method                 |    | ⚠ |    | ✅ | 💡 | Solución ya implementada como sugerencia |
| component-class-suffix                    | 🛠 | ⚠ |    | ✅ |    | La configuración en formato arrays podría dar problemas |
| no-forward-ref                            |    |    | ❗ |    |    | Requiere contexto, solo se puodría avisar al usuario |
| component-selector                        | 🛠 | ⚠ |    |    |    | La configuración en formato arrays podría dar problemas |
| no-output-native                          |    |    | ❗ | ✅ |    | Se podría sugerir nombres pero no creo que se pueda sabar la información oportuna del contexto para generar la sugerencia |
| directive-selector                        | 🛠 | ⚠ |    |    |    | La configuración en formato arrays podría dar problemas |
| no-duplicates-in-metadata-arrays          | 🛠 |    |    |    |    | Corrección automática, eliminar esos duplicados |
| no-lifecycle-call                         | 🛠 | ⚠ |    |    |    | ¿Eliminar la llamada? Esta podría ocasionar una ruptura en la lógica |