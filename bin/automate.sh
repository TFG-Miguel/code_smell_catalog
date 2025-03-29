#!/bin/bash

# Check the args
if [ "$#" -lt 2 ] && { [[ -z "$REPOS" ]] || [[ -z "$ANALISYS_REPO" ]]; }; then
  echo "Usage: $0 <repos_dir> <reports_dir>"
  exit 1
fi

NODE_REPORT=$ANALISYS_BIN/report.js

if [ ! -e "$ANALISYS_BIN/automate.sh" ]; then
  echo "No bin found for analisys. Please found the code_smell_catalog repo and execute \`source setup\` on it"
  return -1
elif [[ ! -e "$NODE_REPORT" ]]; then
  echo "report.js node program not found"
  return -1
fi

# Dir args
REPOS_DIR="${1:-$REPOS}"           # Dir which contains the repos files
REPORTS_DIR="${2:-$ANALISYS_REPO}" # Dir in which will be save the final report
REPORT_FILE="${3:-report.json}"
resBR=lint.before.recommended
resBA=lint.before.all
resAR=lint.after.recommended
resAA=lint.after.all
json_tmp=/tmp/tmp_json.json
json_tmp2=/tmp/tmp_json2.json

# Change the Angular-ESlint rules scope, by default try to change recommended to all, if -i is pressent in second arg it's inverted
function change_mode() {
  local file="$1"
  # Modos de ESLint
  local src='recommended'
  local dest='all'

  if [[ "$2" == "-i" ]]; then
    local tmp="$src"
    src="$dest"
    dest="$tmp"
  fi

  if [[ "$file" == *.json ]]; then
    preffix="plugin:@angular-eslint/"
    pattern="s|${preffix}${src}|${preffix}${dest}|"
  else
    preffix="..angular.config.ts"
    pattern="s|${preffix}${src^}|${preffix}${dest^}|"
  fi

  sed -i $pattern $file
}

# Generate the individual repo report
function generate_report() {
  # Get the last commit data on JSON format
  local url_repo=$(git config --get remote.origin.url)
  local data_repo=$(git log -1 --pretty=format:'{"commit": "%H", "author": "%an", "date": "%ad", "message": "%s"}')
  local json_file_tmp=/tmp/tmp.report.json

  jq -cn \
    --argjson data "$data_repo" \
    --arg url $url_repo \
    '{ 
          repo: { HEAD: $data, url: $url }, 
          before: { },
          after: { }
        }' >$json_tmp

  for file in lint.*.*; do
    if [[ -f "$file" ]]; then
      local project_name when mode

      when=$(echo "$file" | cut -d '.' -f 2)
      mode=$(echo "$file" | cut -d '.' -f 3)

      cat "$file" | while IFS= read -r lining && IFS= read -r json_content; do
        echo $json_content > $json_file_tmp
        project_name=$(echo $lining | sed 's/Linting \"\(.*\)\".../\1/')

        # echo name=$project_name when=$when mode=$mode
        if ! jq -e --arg when "$when" --arg project "$project_name" '.[$when][$project]' $json_tmp >/dev/null; then
          # Si no existe, insertar la clave con el valor
          jq \
            --arg when "$when" \
            --arg project "$project_name" \
            '.[$when] += { ($project): {recommended: [], all:[]} }' $json_tmp >$json_tmp2
          mv $json_tmp2 $json_tmp
        fi
        jq <$json_tmp \
          --arg when "$when" \
          --arg mode "$mode" \
          --arg project "$project_name" \
          --argfile data "$json_file_tmp" \
          '.[$when][$project][$mode] = $data' >$json_tmp2
        mv $json_tmp2 $json_tmp
      done
    fi
  done

  cat $json_tmp
}

pwd=$PWD
# Recorremos todos los repositorios
for repo in "$REPOS_DIR"/*/*/; do
  if [ -d "$repo" ]; then
    repo_name=$(echo $repo | awk -F'/' '{print $(NF-1)}')
    repo_source=$(echo $repo | awk -F'/' '{print $(NF-2)}')
    echo "Processing repo: $repo_name [$repo_source] ($repo)"

    # Acceder al repositorio
    cd "$repo" || exit -1

    # Buscar el primer archivo de configuración de eslint
    ESLINT_CONFIG=$(find . -type f \( -name ".eslintrc.json" -or -name "eslint.json" -or -name "eslint.config.js" -or -name "eslint.config.mjs" \) ! -path "*/node_modules/*" | tail -n 1 | cut -d'/' -f2-)

    if [ -z "$ESLINT_CONFIG" ]; then
      echo "No ESLint config found in $repo"
      continue
    fi

    echo "Config found at: $ESLINT_CONFIG"

    REPO_DIR_NAME=$(dirname $ESLINT_CONFIG)
    if [[ -n "$REPO_DIR_NAME" && "$REPO_DIR_NAME" != "." ]]; then
      echo "Going into $REPO_DIR_NAME"
      cd $REPO_DIR_NAME
      ESLINT_CONFIG=$(basename $ESLINT_CONFIG)
      pwd
    fi

    echo -e "\tBefore fix recommended mode: "

    # Establecer el modo 'recommended'
    change_mode $ESLINT_CONFIG -i

    # Ejecutar el linting con el modo recomendado
    if [ ! -e $resBR ]; then
      ng lint --format=json >$resBR
      sed -i '/^$/d;/All files pass linting./d' $resBR
    else
      echo -e "\t\tProject already linted"
    fi

    echo -e "\tBefore fix all mode: "

    # Establecer el modo 'all'
    change_mode $ESLINT_CONFIG

    # Ejecutar el linting con el modo all
    if [ ! -e $resBA ]; then
      ng lint --format=json >$resBA
      sed -i '/^$/d;/All files pass linting./d' $resBA
    else
      echo -e "\t\tProject already linted"
    fi

    if [ ! -e "$resAA" ]; then
      # Ejecutar el comando para corregir errores autocorregibles
      echo -en "\tFixing automatic issues...\r"
      ng lint --fix >/dev/null 2>&1
      printf "%-80s\r" " "
      echo -e "\tFixed"
    fi

    echo -e "\tAfter fix recommended mode"

    # Establecer el modo 'recommended' nuevamente
    change_mode $ESLINT_CONFIG -i

    # Ejecutar el linting con el modo recomendado después de la corrección
    if [ ! -e $resAR ]; then
      ng lint --format=json >$resAR
      sed -i '/^$/d;/All files pass linting./d' $resAR
    else
      echo -e "\t\tProject already linted"
    fi

    echo -e "\tAfter fix all mode"

    # Establecer el modo 'all' de nuevo
    change_mode $ESLINT_CONFIG

    # Ejecutar el linting con el modo all después de la corrección
    if [ ! -e $resAA ]; then
      ng lint --format=json >$resAA
      sed -i '/^$/d;/All files pass linting./d' $resAA
    else
      echo -e "\t\tProject already linted"
    fi

    # Generar el reporte con el programa Node.js
    # generate_report | jq
    REPORT_FILE="$repo_name.report.json"
    generate_report  >$REPORT_FILE
    # generate_report > "$repo_name.report.json" 2>&1

    echo -e "Generating report for the repo $repo_name [$PWD/$REPORT_FILE]\n\n"

    cd $pwd
  fi
done

cd $REPOS_DIR
echo '{}' >$json_tmp

echo "Coping reports: "
for report_file in $(find . -type f -name "*.report.json"); do
  repo_name=$(basename $report_file | cut -d'.' -f1)
  dest_file="$REPORTS_DIR/$(basename $report_file)"
  cp $report_file $dest_file
  echo "- $(echo $report_file | cut -d'/' -f2-) --> $dest_file"
  cat $json_tmp | jq \
    --argfile report $report_file \
    --arg repo $repo_name \
    '. += { ($repo) : $report }' >$json_tmp2
  cp $json_tmp2 $json_tmp
done
dest_file=$REPORTS_DIR/$REPORT_FILE
cp $json_tmp $dest_file
echo "Global json report saved in $dest_file"
# node $NODE_REPORT $REPORTS_DIR/$REPORT_FILE
