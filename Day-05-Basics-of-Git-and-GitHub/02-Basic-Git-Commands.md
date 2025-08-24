# 02 — Git Commands Cheat Sheet (with examples)

> Keep this close. It’s short, practical, and shows you can *do* Git, not just talk about it.

## Setup (do once per machine)
```bash
git config --global user.name "Hassan Bin Waqar"
git config --global user.email "hassan.binnwaqar@protonmail.com"
git config --global init.defaultBranch main
git config --global pull.rebase false
git config --global core.autocrlf input   # safe default for mac/linux; use 'true' on Windows if needed

Create or clone
git init                         # make current folder a repo
git clone <url>                  # clone an existing repo

Status & diffs
git status                       # what's changed/staged?
git diff                         # see unstaged differences
git diff --staged                # see staged differences

Stage & unstage
git add .                        # stage everything
git add <file>                   # stage specific file
git restore --staged <file>      # unstage file (keep changes)

Commit
git commit -m "feat: add navbar component"
git commit -am "fix: quick hotfix"   # stage tracked files + commit

Branching & switching
git branch                       # list branches
git switch -c feature/landing    # create & switch
git switch main                  # switch to main
# older syntax:
git checkout -b feature/landing
git checkout main

Merge & rebase
git merge feature/landing        # merge into current branch
git rebase main                  # replay commits on top of main (on your feature branch)

Remotes & sync
git remote -v
git remote add origin <url>
git fetch origin
git pull origin main
git push -u origin main          # set upstream for the first push
git push                         # subsequent pushes

Stash (quickly shelve work)
git stash                        # stash working changes
git stash list
git stash pop                    # reapply and remove from stash

Undo safely
git restore <file>               # discard unstaged local changes in file
git revert <commit>              # create a new commit that undoes <commit>
git reset --soft HEAD~1          # undo last commit, keep changes staged
git reset --hard HEAD~1          # ⚠️ discard last commit & changes

Logs & history
git log --oneline --graph --decorate --all
git blame <file>
git show <commit>

Tags (releases)
git tag v1.0.0
git push origin v1.0.0

Clean (remove untracked)
git clean -fd                    # ⚠️ deletes untracked files & folders

Aliases (bonus)
git config --global alias.st "status -sb"
git config --global alias.lg "log --oneline --graph --decorate --all"
git config --global alias.co "checkout"
git config --global alias.br "branch"
git config --global alias.cm "commit -m"
