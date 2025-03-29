#! /usr/bin/bash
for repo in $REPOS/*/*/; do 
  echo -e "\nREPO: $repo"
  cd $repo
  git reset --hard
  git status --short --branch
  sleep 1
done
