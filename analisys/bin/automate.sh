#!/bin/bash

# Verificar si se pasaron los parámetros necesarios
if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <repos_dir> <reports_dir>"
    exit 1
fi

# Directorios que se pasan como parámetros
REPOS_DIR="$1"
REPORTS_DIR="$2"

# Modos de ESLint 
ANGULAR_PLUGIN="plugin:@angular-eslint"
ALL_MODE="$ANGULAR_PLUGIN/all"
RECOMMENDED_MODE="$ANGULAR_PLUGIN/recommended"

# Recorremos todos los repositorios
for repo in "$REPOS_DIR"/*; do
    if [ -d "$repo" ]; then
        echo "Procesando repo: $repo"
        
        # Acceder al repositorio
        cd "$repo" || continue

        # Buscar el primer archivo de configuración de eslint
        ESLINT_CONFIG=$(find . -type f \( -name ".eslintrc.json" -or -name "eslint.json" -or -name "eslint.config.js" -or -name "eslint.config.mjs" \) | tail -n 1)

        REPO_DIR_NAME=$(dirname $ESLINT_CONFIG)
        cd REPO_DIR_NAME

        if [ -z "$ESLINT_CONFIG" ]; then
            echo "No se encontró configuración de ESLint en $repo"
            continue
        fi

        echo "Configuración encontrada en: $ESLINT_CONFIG"

        # Establecer el modo '@angular-eslint/recommended'
        sed -i "s|$ALL_MODE|$RECOMMENDED_MODE|" $ESLINT_CONFIG

        # Ejecutar el linting con el modo recomendado
        ng lint --format=json > lint.before.recommended

        # Establecer el modo '@angular-eslint/all'
        sed -i "s|$RECOMMENDED_MODE|$ALL_MODE|" $ESLINT_CONFIG

        # Ejecutar el linting con el modo all
        ng lint --format=json > lint.before.all

        # Ejecutar el comando para corregir errores autocorregibles
        ng lint --fix >/dev/null 2>&1

        # Establecer el modo '@angular-eslint/recommended' nuevamente
        sed -i "s|$ALL_MODE|$RECOMMENDED_MODE|" $ESLINT_CONFIG

        # Ejecutar el linting con el modo recomendado después de la corrección
        ng lint --format=json > lint.after.recommended

        # Establecer el modo '@angular-eslint/all' nuevamente
        sed -i "s|$RECOMMENDED_MODE|$ALL_MODE|" $ESLINT_CONFIG

        # Ejecutar el linting con el modo all después de la corrección
        ng lint --format=json > lint.after.all

        # Obtener el último commit de git
        COMMIT_INFO=$(git log -1 --pretty=%h)

        # Generar el reporte con el programa Node.js
        node genreporeport "$COMMIT_INFO" "$REPO_DIR_NAME.report.json"

        echo "Reporte generado para el repositorio: $repo"

        cd - > /dev/null 2>&1
    fi
done

# Ejecutar el programa node genreport después de procesar todos los repositorios
node genreport

echo "Proceso completado para todos los repositorios"

#!/bin/bash

# Función para generar el reporte para cada repositorio
generate_report() {
    local repo_name="$1"
    local repo_dir="$2"

    # Cambiar al directorio del repositorio
    cd "$repo_dir" || exit

    # Obtener el último commit con git log -1 en formato JSON
    local data_repo
    data_repo=$(git log -1 --pretty=format:'{"commit": "%H", "author": "%an", "date": "%ad", "message": "%s"}')

    # Inicializar un JSON vacío para el resultado
    local result=""

    # Recorrer todos los ficheros lint.{where}.{mode}
    for file in lint.*.*; do
        if [[ -f "$file" ]]; then
            # Leer las primeras dos líneas del archivo
            local project_name
            local json_content
            project_name=$(head -n 1 "$file" | sed 's/Linting \(.*\) .../\1/')
            json_content=$(sed -n '2p' "$file")

            # Extraer los "where" y "mode" del nombre del archivo
            local where mode
            where=$(echo "$file" | cut -d '.' -f 2)
            mode=$(echo "$file" | cut -d '.' -f 3)

            # Generar el JSON en el formato especificado
            result=$(jq -n \
                --arg where "$where" \
                --arg mode "$mode" \
                --arg project "$project_name" \
                --argjson json "$json_content" \
                --argjson data_repo "$data_repo" \
                '{
                    ($where): {
                        ($mode): [
                            {
                                ($project): $json
                            }
                        ]
                    },
                    repo: $data_repo
                }')
        fi
    done

    # Guardar el resultado en un archivo JSON con el nombre del repositorio
    echo "$result" > "/tmp/repos/$repo_name.report.json"
}

# Directorios de repositorios pasados como parámetros
repos=("$@")

# Recorrer cada repositorio y generar el reporte
for repo_dir in "${repos[@]}"; do
    # Obtener el nombre del repositorio
    repo_name=$(basename "$repo_dir")

    # Llamar a la función para generar el reporte
    generate_report "$repo_name" "$repo_dir"
done
