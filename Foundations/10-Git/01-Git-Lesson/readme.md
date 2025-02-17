# Github Lesson for absolute beginners

## Git and Github

Let's talk about github. It is an awesome development tool which can allow  you to control different version.

## Git cheat sheet

Here you have the basic git commands which might be useful:

```bash
git --version    # Versiyonu kontrol et
git help          # Git'ten yardım al
git help commit  # Commit komutu için yardım al
git config        # Get information about configuration
git config --list # Check all what is configured
git config --global user.name "username" # Configuring git user nameuser email

git init          # Initialize git repository local machine
git status        # Check changes or status of file(s) in repository

git add filename1.txt # Adding only one file
git add filename1.txt filename2.txt # Add multiple files
git add . # Add all the files and folders to the staging area

git commit -a # Stage and write a commit message in Nano
git commit -m "commit message" # Write a commit message after staging
git commit -am "commit message" # Grab everything & skip the stage process

git log  # See the history on the repository
git log --oneline
git log -<limit>
git log --author ="name" # To check change by specific user
git log --graph # Visualize the history

git diff # Compare working copy in the repository
git diff --staged # Compare files in the staging area

git checkout -- filename # To get working copy back
git reset HEAD filename # Removes from the staging area / (unstage)
git checkout <branch-name> <path to file> # Checkout file from different branch
git checkout <commit-id> -- <path to file> # Checkout file from specific commit

git remote -v  # View remote repository-Urls
git remote add <remote name> repository-Url # Add a new remote
git push -u remote master # Push the file into github
git checkout <commit-id> -- filename #

git rm filename1 # Delete one tracked file
git mv filename1 filename2 # Delete tracked file(s)
git mv filename1 foldername/filename1 # Move file to a folder

git branch # to list branches
git branch branch-name # to create a branch
git checkout branch-name # to checkout to a certain branch
git checkout -b branch-name # to create a branch and checkout at the same time
git merge branch-name # to merge a branch to the current branch

# Simply Summary :
git checkout branch-name (origin/master)
git add .
git commit -m "sample added for example"
git push -u origin <branch-name> (master)

# Branch deleting after summary processes :
git branch -d <branch_ismi>: # Deletes the local branch
git push origin --delete <branch_ismi>: #  Deletes the branch on the remote server.
# P.S. -D option: Used for forced deletion, but should be used with caution

# git-pull - Fetch from and integrate with another repository or a local branch.
git pull origin <main_branch>


```
