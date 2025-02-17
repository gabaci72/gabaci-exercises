# JavaScript-Exercises-TOP
# Notes to myself
# Cheatsheet

Step 1: Install Git

```bash
sudo apt update
sudo apt upgrade
```
2.Install Git
```bash
sudo add-apt-repository ppa:git-core/ppa
sudo apt update
sudo apt install git
```
3.Verify version
```bash
git --version
```
Step 2: Configure Git and GitHub
I went to GitHub.com and created an account! During the account setup, it asked me for an email address. This needs to be a real email and will be used by default to identify your contributions. If you are privacy conscious or just don’t want our email address to be publicly available, make sure we tick the following two boxes on the Email Settings page after you have signed in:
```bash
X Keep my email adresses private
X Block command line pushes that expose my email 
```
With the private email:
```bash
git config --global user.name "Your Name"
git config --global user.email "yourname@example.com"
```
If we opted to use the private GitHub email address, the second command will look something like this:
```bash
git config --global user.email "123456789+odin@users.noreply.github.com" # Remember to use your own private GitHub email here.
```
GitHub recently changed the default branch on new repositories from master to main. Change the default branch for Git using this command:
```bash
git config --global init.defaultBranch main
```
To enable colorful output with git, type
```bash
git config --global color.ui auto
```
We’ll also likely want to set your default branch reconciliation behavior to merging.
```bash
git config --global pull.rebase false
```
To verify that things are working properly, enter these commands and verify whether the output matches your name and email address.
```bash
git config --get user.name
git config --get user.email
```
Create an SSH key:

We check if we have an SSH key.
```bash
ls ~/.ssh/id_ed25519.pub
```
If we do not have an Ed25519 algorithm SSH key, we create one in the terminal with this command.
```bash
ssh-keygen -t ed25519
```
Now you need to copy your public SSH key. To do this, we’re going to use a command called cat to read the file to the console.
```basj
cat ~/.ssh/id_ed25519.pub
```
Highlight and copy the entire output from the command. If you followed the instructions above, the output will likely begin with ssh-ed25519 and end with your username@hostname.
Now, go back to GitHub in your browser window and paste the key you copied into the key field. Keep the key type as Authentication Key and then, click Add SSH key. You’re done! You’ve successfully added your SSH key!

https://docs.github.com/en/authentication/connecting-to-github-with-ssh/testing-your-ssh-connection?platform=linux

Testing your SSH connection
After you've set up your SSH key and added it to GitHub, you can test your connection
Open Terminal.

Enter the following:
```bash
ssh -T git@github.com
# Attempts to ssh to GitHub
```
If Egee SSH is correct, press the letter y and then type "yes" and press enter.


