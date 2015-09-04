#!/bin/bash

FILES=xab*
COUNT=0
for f in $FILES
do
  echo "Processing $f file number $COUNT..." 
  sleep 10
  curl -X POST 'http://localhost:8086/write?db=crisplant' --data-binary @$f
#  nodejs parseDataStream.js $f
  ((COUNT=COUNT+1))
done
