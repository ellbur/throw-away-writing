#!/bin/zsh

rsync --progress -avzu -e ssh . ubuntu@ellbur.com:/var/www/html/throw-away-writing

