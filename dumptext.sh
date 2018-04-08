#! /bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
files="$(find ${DIR}/nl/ -type f| grep -v voorbeeld; echo "${DIR}/_data/linkcode.yml"; echo "${DIR}/_data/menu.yml")"

for f in ${files}; do 
  e="${f##*.}"
  echo -e ">>>>>>>>\n$f\n[$e]\n>>>>>>>>\n\n"; 
  if [ "$e" != "pdf" ]; then
    cat $f; 
  else
    echo "-- TEXT NIET TUSSENGEVOEGD -- ";
  fi
done
