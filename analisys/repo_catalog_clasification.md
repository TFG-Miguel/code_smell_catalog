# Tabla para la clasificación de reglas
| Regla | AUTO | SEMI | MANUAL | Notas |
| --- | :--: | :--: | :--: | --- |
| relative-url-prefix                       | ✅ |   |   | Con la pega de que solo adpatará las url no las corregirá si no son validas o si son absolutas `(\[A-Z]:/ | /)` |
| component-max-inline-declarations         | ✅ |   |   | Puede extraerse la información pero en caso de `templates` y `styles` con `template strings` no se extaería la información por lo que no se modificará y en el caso de las animaciones las dependencias entre ficheros podrían no ser validas (generando dependencias circulares).<br>Se podría evaluar el `template` y establecerlo |
| no-output-on-prefix                       | ✅ |   |   | El impacto podría ser dañino si es parte de la filosofía del proyecto pero debe ser supervisado por el usuario |
| sort-lifecycle-methods                    | ✅ |   |   | Supervisar el impacto pero debería poder ser automática |
| no-empty-lifecycle-method                 | ✅ |   |   | Eliminar métodos vacios |
| no-duplicates-in-metadata-arrays          | ✅ |   |   | Corrección automática, eliminar esos duplicados |
| use-injectable-provided-in                | ✅ | ⚠ |   | Es autosolucionable mientras que no el provideIn dependa del contexto o si hay configuraciones concretas (usar por defecto `provideIn: 'root'`) |
| component-class-suffix                    | ✅ | ⚠ |   | El sujifo podría variar cuando haya varias posibilidades |
| component-selector                        | ✅ | ⚠ |   | La configuración en formato arrays podría dar problemas |
| directive-selector                        | ✅ | ⚠ |   | La configuración en formato arrays podría dar problemas |
| no-lifecycle-call                         | ✅ | ⚠ |   | ¿Eliminar la llamada? Esta podría ocasionar una ruptura en la lógica |
| runtime-localize                          |   | ⚠ |   | Podría ser solucionable si solo es encapsular el `localize` o agregar un `readonly` reemplazando un posible prefijo `static` a una variable de ambito de clase<br>Además se debería utilizar una estrategia por defecto debido a que hay varias permitidas, lo considero más una sugerencia|
| prefer-on-push-component-change-detection |    | ⚠ |   | Depende de si el programador ha implementado alguna lógica concreta |
| use-component-view-encapsulation          |    | ⚠ |   | Depende de si el programador ha implementado alguna lógica concreta |
| use-component-selector                    |   | ⚠ |   | Se puede dar un nombre automático en base al componente |
| prefer-output-readonly                    |   | ⚠ | ❗ | La solución de agregar un readonly está ya implementado como sugerencia por que ciertos cambios requieren la intervención del usuario para no dañar la lógica |
| no-output-native                          |   |   | ❗ | Se podría sugerir nombres pero no creo que se pueda sabar la información oportuna del contexto para generar la sugerencia |
| no-forward-ref                            |   |   | ❗ | Requiere contexto, solo se puodría avisar al usuario |