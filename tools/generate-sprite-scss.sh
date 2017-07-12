#! /usr/bin/bash

find ../src/assets/sprites -name *.gif | egrep -o '\d+' | xargs -I '##' echo ".sprite-## { background-image: url(assets/sprites/##.gif); }" > ../src/css/sprites.scss