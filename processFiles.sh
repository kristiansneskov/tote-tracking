#!/bin/bash

FILES=xa*
COUNT=0
for f in $FILES
do
  echo "Processing $f file number $COUNT..." 
  curl -X POST 'http://localhost:8086/write?db=spongy' --data-binary @$f
#  nodejs parseDataStream.js $f
  COUNT = $((COUNT+1))
done
