#!/bin/bash

FILES=x*
for f in $FILES
do
  echo "Processing $f file..."
  nodejs parseDataStream.ps $f
done