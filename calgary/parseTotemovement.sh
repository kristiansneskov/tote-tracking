grep "TOTEPOSITION" _ToteMovementRecording-150715.log | sed "s/ /</g" | awk -F "<" '{print $1$2substr($3,2,3 ),$9,$10}' |  sed "s/>//g" | sed "s/=//g" | sed "s/ /,/g"