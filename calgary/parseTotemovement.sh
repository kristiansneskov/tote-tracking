#All totes
grep "TOTEPOSITION" _ToteMovementRecording-150715.log | grep -v "itemId" | sed "s/ /</g" | awk -F "<" '{print $1$2substr($3,2,3 ),$9,$10}' |  sed "s/>//g" | sed "s/=//g" | sed "s/ /,/g"

#Full totes:
grep "TOTEPOSITION" _ToteMovementRecording-150715.log | grep "itemId" | sed "s/ /</g" | awk -F "<" '{print $1$2substr($3,2,3 ),$9,$10,$14}' | sed "s/>//g" | sed "s/=//g" | sed "s/ /,/g" > fullToteMovement.csv
