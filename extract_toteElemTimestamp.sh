grep "TOTEPOSITION" _ToteMovementRecording-150624.log | sed "s/ /</g" | awk -F "<" "{print $1$2$3,$9,$10}" | sed "s/>//g" | sed "s/=//g" | sed "s/ /,/g" > tracking.log
