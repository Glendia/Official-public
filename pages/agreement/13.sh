#!/bin/bash

for ((i = 1; i <= 15; i++))
do
    random_number=$(shuf -i 10000000-99999999 -n 1)
    touch "${random_number}.md"
done
