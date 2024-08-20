## 🚀 Git Cheat Sheet

### 📂 Getting Started with Git

| Command | Description |
| ------- | ----------- |
| `git init` | Initialize a local Git repository |
| `git clone <repo-url>` | Clone a remote repository to your local machine |
| `git remote add origin <remote-url>` | Link your local repository to a remote repository |
| `git remote set-url origin <remote-url>` | Change the remote repository URL |

### 🚀 Adding a Local Project to GitHub

| Command | Description |
| ------- | ----------- |
| `git init` | Initialize a local Git repository in the project directory |
| `git add .` | Add all files in the current directory to the staging area |
| `git commit -m "Initial commit"` | Commit the files with a message |
| `git branch -M main` | Rename the default branch to `main` |
| `git remote add origin <remote-url>` | Add the URL of the remote repository |
| `git push -u origin main` | Push the `main` branch to the remote repository |

### 📸 Basic Snapshotting

| Command | Description |
| ------- | ----------- |
| `git status` | Show the status of changes as untracked, modified, or staged |
| `git add [file-name.txt]` | Add a specific file to the staging area |
| `git add .` | Add all files and changes to the staging area |
| `git commit -m "[commit message]"` | Commit changes with a descriptive message |
| `git commit --amend -m "[new message]"` | Amend the last commit with a new message |
| `git rm -r [file-name.txt]` | Remove a file or folder from the repository |

### 🌳 Branching & Merging

| Command | Description |
| ------- | ----------- |
| `git branch` | List all local branches (the asterisk denotes the current branch) |
| `git branch -a` | List all local and remote branches |
| `git branch [branch name]` | Create a new branch |
| `git branch -d [branch name]` | Delete a local branch |
| `git checkout [branch name]` | Switch to an existing branch |
| `git checkout -b [branch name]` | Create and switch to a new branch |
| `git checkout -b [branch name] origin/[branch name]` | Create and switch to a branch tracking a remote branch |
| `git branch -m [old branch name] [new branch name]` | Rename a branch |
| `git merge [branch name]` | Merge a branch into the current branch |
| `git checkout [commit-hash]` | Check out a specific commit (detached HEAD state) |
| `git checkout -b [branch name] [commit-hash]` | Create a new branch from a specific commit |
| `git stash` | Stash the current changes for later use |
| `git stash pop` | Apply the stashed changes |
| `git stash clear` | Remove all stashed entries |

### 📤 Sharing & Updating Projects

| Command | Description |
| ------- | ----------- |
| `git push origin [branch name]` | Push a branch to the remote repository |
| `git push -u origin [branch name]` | Push a branch and set the upstream for future pushes |
| `git pull` | Fetch and merge changes from the remote repository to your current branch |
| `git pull origin [branch name]` | Pull changes from a specific branch on the remote repository |
| `git push origin --delete [branch name]` | Delete a remote branch |
| `git fetch` | Download objects and refs from another repository |
| `git fetch --all` | Fetch all branches from all remotes |

### 🔍 Inspection & Comparison

| Command | Description |
| ------- | ----------- |
| `git log` | View the commit history |
| `git log --oneline` | View the commit history in a compact format |
| `git log --graph --oneline --all` | View a graphical representation of the commit history |
| `git diff` | Show changes between the working directory and the staging area |
| `git diff [branch1]..[branch2]` | Compare differences between two branches |
| `git diff --staged` | Show changes between the staging area and the last commit |
| `git show [commit-hash]` | Show changes in a specific commit |
| `git reflog` | Show the history of HEAD (useful for recovering lost commits) |

### 🧹 Cleaning Up

| Command | Description |
| ------- | ----------- |
| `git clean -f` | Remove untracked files from the working directory |
| `git clean -fd` | Remove untracked files and directories |
| `git gc` | Cleanup unnecessary files and optimize the local repository |
| `git prune` | Remove objects that are no longer pointed to by any branch |
| `git reflog expire --expire=now --all && git gc --prune=now --aggressive` | Clean up and optimize the repository aggressively |

### 💡 Additional Useful Commands

| Command | Description |
| ------- | ----------- |
| `git cherry-pick [commit-hash]` | Apply the changes from a specific commit to the current branch |
| `git revert [commit-hash]` | Create a new commit that reverses changes made by a specific commit |
| `git rebase [branch]` | Apply commits from one branch onto another |
| `git rebase -i HEAD~[n]` | Interactively rebase the last `n` commits |
| `git blame [file-name]` | Show who made changes to each line in a file |
| `git tag [tag-name]` | Create a tag for a specific commit |
| `git tag -a [tag-name] -m "[message]"` | Create an annotated tag |
| `git push origin [tag-name]` | Push a tag to the remote repository |
