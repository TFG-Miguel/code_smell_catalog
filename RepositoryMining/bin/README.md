# README

## Descripción
Este sistema permite analizar y modificar la configuración de múltiples repositorios mediante la ejecución de un conjunto de scripts automatizados. Se encarga de cambiar configuraciones, ejecutar análisis y generar reportes detallados del estado de cada repositorio.

## Instalación y Configuración
1. **Configurar el entorno:**
   - Ejecutar el siguiente comando para configurar el entorno:
     ```bash
     source setup
     ```

2. **Definir la ruta de los repositorios:**
   - Se debe indicar la ruta donde se encuentran los repositorios.
   - El directorio especificado debe contener carpetas intermedias que representen la fuente.
   - Dentro de cada fuente, se ubican los repositorios.

## Funcionamiento
1. **Ejecución del análisis:**
   - Se ejecuta el programa `bass analice repus`, el cual realizará las siguientes acciones:
     - Ejecutará uno a uno los repositorios.
     - Modificará la configuración de `slint` para alternar entre los modos `all` y `recommended`.
     - Reportará cada cambio realizado.
     - Ejecutará un `fix` intermedio tras cada cambio.

2. **Generación de resultados:**
   - Se generará un archivo JSON que almacenará:
     - Los resultados de ambos análisis (`all` y `recommended`).
     - Información del repositorio.
     - Commit actual.
     - Nombre del usuario que realizó la operación.
     - Fecha y otros metadatos relevantes.

3. **Consolidación de los datos:**
   - Una vez analizados todos los repositorios, los resultados se consolidarán en un fichero específico para cada usuario.

4. **Generación del reporte final:**
   - Se ejecutará el siguiente comando:
     ```bash
     node repot
     ```
   - Este proceso analizará los resultados almacenados y generará un `README` con el análisis detallado de cada directorio de repositorios, así como un resumen global.

## Rollback
Si es necesario restaurar el estado inicial de los repositorios y eliminar la información generada (salvo la que se puede reescribir), se debe ejecutar:
   ```bash
   rollback
   ```
Este comando devolverá los repositorios a su estado original y limpiará la información almacenada.

## Conclusión
Este sistema facilita el análisis y gestión de múltiples repositorios de manera automatizada, asegurando la documentación de los cambios realizados y permitiendo una reversión rápida en caso necesario.

