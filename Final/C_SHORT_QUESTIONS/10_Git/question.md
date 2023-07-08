## Git Question A: Forking & Pull Requests

We have a repository called `exchangeRate` within the ACCSoftwareBootcamp group on github.com.  It is a working React app that converts currency values.

I have made a mistake during my last commit, where I have increased the delay within the API module unnecessarily. 

Your task is to fix it. Here are the steps involved:

1. On github.com fork the exchangeRate repository into your private area.  For example, if I had to work on this task, I would fork it to my `pmehtaaustin` area.

(Forking makes a copy of the exchangeRate repo into my private repo, where I will fix it and submit my change back to the `ACCSoftwareBootcamp/exchangeRate` repo). My private exchangeRate repo has linkages to the original exchangeRate repo.

1. Clone your private exchangeRate repo to your computer.

1. Now fix the last commit I made. How can you fix it (give exact command you used)?
git commit --amend

(Remember that a commit message will be autogenerated within the vim editor.  In order to save it, you have to hit `Esc :wq Enter` and the fix will be committed).

1. Push your fix back to your private repo.

1. Now submit your fix back to the ACCSoftwareBootcamp/exchangeRate repo as a "Pull Request".

If you successfully created a pull request and fixed the mistake, this task is successfully completed.


## Git Question B:

How do you delete a local branch after completing work on it.  How would you delete a remote branch?
To delete a local branch, use the command:
    git branch -d (name of branch)
To delete a remote branch, we can use the command:
    git push (remote name) --delete (branch name)
or we can just go to github.com and delete it there
