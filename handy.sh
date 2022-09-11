#!/bin/zsh

echo "Yo Human What's up how you doing? !! can i check status of your ugly written code . . . 😉 🤖 ?"

read my_status


if [ "$my_status" = "y" ]; then
  echo "Checking status"
  git status
else
  echo ""
fi


echo ""
echo "what files do you want me to add ?"

read read_my_files

echo "added files => , $read_my_files"

git add $read_my_files

echo ""
echo "what is your commit message ?"

read read_commit_message

echo ""
echo "message is =>, $read_commit_message"

git commit -m "$read_commit_message"

echo ""
echo "Are you ready to push your trash 😐 ? \n 'y-yes' 'n-no' "



read ready_to_push

if [ "$ready_to_push" = 'y' ]; then
  echo "Pushing your trash to remote"
  git push
else
  echo "Have some guts to push your code to remote!! 😂"
fi