#!/bin/zsh

# http://askubuntu.com/questions/482916/rsync-exclude-hidden-files-doesnt-work
rsync --progress -avzu -e ssh --exclude='.*' --exclude='.*/' --exclude='update.zsh' . ubuntu@ellbur.com:/var/www/html/throw-away-writing

