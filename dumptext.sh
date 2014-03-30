#! /bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
files="$(find ${DIR}/nl/ -type f| grep -v voorbeeld; echo "${DIR}/_data/navigation.yml")"

for f in ${files}; do echo -e ">>>>>>>>\n$f\n>>>>>>>>\n\n"; cat $f; done
