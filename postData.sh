#!/bin/bash
curl -X POST 'http://localhost:8086/write?db=spongy' --data-binary $1
