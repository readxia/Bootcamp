clone: https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository
1. git init
2. git branch (potentially to make sure you are on the right one)
3. git clone (ssh url, click on code button, not url of the website)
hopefully that worked!

ssh key: https://gist.github.com/xirixiz/b6b0c6f4917ce17a90e00f9b60566278
1. ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

2. Copy the contents of the public SSH key

macOS:
pbcopy < ~/.ssh/id_rsa.pub

GNU/Linux (requires the xclip package)
xclip -sel clip < ~/.ssh/id_rsa.pub

Windows Command Line:
type %userprofile%\.ssh\id_rsa.pub | clip

Git Bash on Windows / Windows PowerShell:
cat ~/.ssh/id_rsa.pub | clip

3. go to github and put the key (copied to your clipboard) in the ssh key (settings > ssh) place

4. run this command VVV
ssh-add ~/.ssh/id_rsa