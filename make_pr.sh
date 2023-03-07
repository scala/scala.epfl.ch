#!/bin/sh

GITHUB_REPOSITORY='scalacenter/5yimpactreport'
GITHUB_SHA='66b231c'

INPUT_DESTINATION_HEAD_BRANCH="update-5yimpactreport-2023-03-07_01h15m35s"
INPUT_DESTINATION_BASE_BRANCH="main"

if [ -z "$INPUT_PULL_REQUEST_REVIEWERS" ]
then
  PULL_REQUEST_REVIEWERS=$INPUT_PULL_REQUEST_REVIEWERS
else
  PULL_REQUEST_REVIEWERS="-r $INPUT_PULL_REQUEST_REVIEWERS"
fi

echo "Adding git commit"
git add .
if git status | grep -q "Changes to be committed"
then
  COMMIT_MESSAGE="Update from https://github.com/$GITHUB_REPOSITORY/commit/$GITHUB_SHA"

  if [ -z "$INPUT_PULL_REQUEST_MESSAGE" ]
  then
    PULL_REQUEST_MESSAGE=$COMMIT_MESSAGE
  else
    PULL_REQUEST_MESSAGE="$COMMIT_MESSAGE$(echo -e "\n\n$INPUT_PULL_REQUEST_MESSAGE")"
  fi

  git commit --message "$COMMIT_MESSAGE"
  echo "Pushing git commit"
  git push -u origin HEAD:$INPUT_DESTINATION_HEAD_BRANCH
  echo "Creating a pull request"
  gh pr create -t $INPUT_DESTINATION_HEAD_BRANCH \
               -b "$PULL_REQUEST_MESSAGE" \
               -B $INPUT_DESTINATION_BASE_BRANCH \
               -H $INPUT_DESTINATION_HEAD_BRANCH \
                  $PULL_REQUEST_REVIEWERS
else
  echo "No changes detected"
fi
