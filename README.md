# 🧠 Mastering Git — From Beginner to DevOps Expert

[![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/)
[![Markdown](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white)](https://www.markdownguide.org/)

> A complete, scenario-based guide to mastering Git — from setup and local commits to advanced branching, conflict resolution, and CI/CD automation.

## 🎯 What You'll Learn

- **Level 1**: Git installation, setup, and first repository
- **Level 2**: Local development, branching, and change tracking  
- **Level 3**: Team collaboration and remote workflows
- **Level 4**: Advanced operations (rebase, cherry-pick, recovery)
- **Level 5**: Repository maintenance and optimization
- **Level 6**: DevOps integration and real-world scenarios

## 📋 Table of Contents

- [Prerequisites](#-prerequisites)
- [Quick Start](#-quick-start)
- [Level 1 — Getting Started with Git](#-level-1--getting-started-with-git)
- [Level 2 — Working Locally (Snapshotting & Branching)](#-level-2--working-locally-snapshotting--branching)
- [Level 3 — Team Collaboration & Remote Work](#-level-3--team-collaboration--remote-work)
- [Level 4 — Advanced Git (Rebase, Cherry-pick, Recovery)](#-level-4--advanced-git-rebase-cherry-pick-recovery)
- [Level 5 — Repository Maintenance, Cleanup & Optimization](#-level-5--repository-maintenance-cleanup--optimization)
- [Level 6 — DevOps & Real-World Git Scenarios](#-level-6--devops--real-world-git-scenarios)
- [License](#-license)
- [Final Note](#-final-note)

## 🔧 Prerequisites

- Basic command line knowledge
- A computer with internet access
- (Optional) GitHub/GitLab/Bitbucket account for remote repositories

## 🚀 Quick Start

```bash
# 1. Check if Git is installed
git --version

# 2. Configure your identity
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# 3. Initialize a new repository
git init

# 4. Make your first commit
git add .
git commit -m "Initial commit"
```

> 💡 **New to Git?** Start with [Level 1](#-level-1--getting-started-with-git) for a complete walkthrough.

---

# ⚡ Level 1 — Getting Started with Git

Git is a **distributed version control system (DVCS)** that tracks code changes, allows collaboration, and keeps a complete history of your project.

This level covers **installation, setup, and initializing your first repository**, including connecting to remote repositories like GitHub, GitLab, or Bitbucket.

---

## 🔧 Step 1 — Git Installation & Verification

Check if Git is installed and set up your identity for commits:

```bash
# Check Git version
git --version

# Configure global username
git config --global user.name "Your Name"

# Configure global email
git config --global user.email "you@example.com"

# Verify configuration
git config --list
```

**Explanation:**

* `user.name` and `user.email` are used to identify commits you make.
* `git config --list` shows all Git configurations, including system, global, and local.

**Pro Tip:** For project-specific settings, you can override global config:

```bash
git config user.name "Project Name"
git config user.email "project@example.com"
```

---

## 🧱 Step 2 — Initialize or Clone a Repository

### 1️⃣ Initialize a New Repository

```bash
git init
```

* Creates a `.git` folder in your project — this is your local repository.
* Use `git status` to check the state of your repository.

```bash
git status
```

**Scenario:**
You have a folder `my-app` and want to start tracking it with Git:

```bash
cd my-app
git init
git status
```

---

### 2️⃣ Clone an Existing Repository

```bash
git clone <repo-url>
```

* Copies a remote repository to your local machine.
* Automatically sets up a remote called `origin`.

```bash
git clone https://github.com/username/repo.git
cd repo
git remote -v  # check remote URL
```

---

### 3️⃣ Connect to a Remote Repository

If you initialized a repository locally first, you can add a remote:

```bash
git remote add origin https://github.com/username/repo.git
git remote -v  # verify
```

**Update or change remote URL:**

```bash
git remote set-url origin https://github.com/username/new-repo.git
```

**Pro Tip:**

* `origin` is just a conventional name — you can name it anything.
* Use multiple remotes if pushing to multiple servers (e.g., GitHub + GitLab).

---

## 📝 Step 3 — First Commit & Push

### 1️⃣ Stage Files

```bash
git add <file>     # stage a single file
git add .          # stage all files in current folder
git add -p         # stage changes interactively
```

### 2️⃣ Commit Changes

```bash
git commit -m "Initial commit"
```

* `-m` adds a commit message.
* Commit messages should be **short, descriptive, and imperative** (e.g., “Add login page” not “Added login page”).

### 3️⃣ Set Default Branch

```bash
git branch -M main
```

### 4️⃣ Push to Remote

```bash
git push -u origin main
```

* `-u` sets upstream for future pushes, so next time you can just run `git push`.

---

## 🧩 Scenario 1 — Create & Push a New Project

```bash
mkdir my-project
cd my-project
git init
touch README.md
git add README.md
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/my-project.git
git push -u origin main
```

---

## 🧩 Scenario 2 — Clone & Start Working

```bash
git clone https://github.com/username/my-project.git
cd my-project
echo "console.log('Hello Git');" > index.js
git add index.js
git commit -m "Add initial JS file"
git push origin main
```

---

## 🧩 Scenario 3 — Connect Existing Project to GitHub

```bash
# You have an existing project folder
cd existing-project
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username/existing-project.git
git branch -M main
git push -u origin main
```

---

## 🔧 Additional Commands You Should Know

| Command                                         | Description                              |
| ----------------------------------------------- | ---------------------------------------- |
| `git status`                                    | Show repository status                   |
| `git log`                                       | View commit history                      |
| `git log --oneline`                             | Compact commit history                   |
| `git config --global core.editor "code --wait"` | Set VSCode as commit editor              |
| `git help <command>`                            | Show help for any Git command            |
| `git rm --cached <file>`                        | Stop tracking a file but keep it locally |

---

# ⚡ Level 2 — Working Locally (Snapshotting & Branching)

At this level, we focus on **tracking changes, committing snapshots, and managing branches locally**.
This is critical for **safe development, experimentation, and preparing for collaboration**.

---

## 📝 Step 1 — Tracking Changes

### 1️⃣ Check the status of your repo

```bash
git status
```

* Shows:

  * Untracked files
  * Modified files
  * Staged files ready for commit

---

### 2️⃣ Stage Files

| Command          | Description                                |
| ---------------- | ------------------------------------------ |
| `git add <file>` | Stage a specific file                      |
| `git add .`      | Stage all files in the current folder      |
| `git add -p`     | Stage changes interactively (line by line) |

**Scenario:**
You modified `app.js` and `index.html`, but only want to commit `app.js` now:

```bash
git add app.js
git commit -m "Fix login bug"
```

---

### 3️⃣ Commit Changes

```bash
git commit -m "Descriptive commit message"
```

* Each commit is a **snapshot of the project at a point in time**.
* Best practice: commit **small, logical units**.
* Example:

```bash
git commit -m "Add input validation to login form"
```

---

### 4️⃣ Amend Last Commit

```bash
git commit --amend -m "Updated commit message"
```

* Useful if you forgot to include a file or want to update a typo in the last commit.
* Warning: don’t amend commits that have been pushed to shared branches.

---

### 5️⃣ Remove a file from repo

```bash
git rm <file>
git commit -m "Remove unnecessary file"
```

* Use `--cached` to remove it from tracking but keep it locally:

```bash
git rm --cached <file>
```

---

## 🌳 Step 2 — Branching Basics

Branches allow you to **develop features independently** without affecting the main code.

### 1️⃣ List Branches

```bash
git branch          # Local branches
git branch -a       # Local + remote branches
```

### 2️⃣ Create & Switch Branches

```bash
git branch feature/login        # Create a branch
git checkout feature/login      # Switch to branch
git checkout -b feature/login   # Create + switch in one command
git checkout -b feature/login origin/feature/login  # Track remote branch
```

### 3️⃣ Rename Branch

```bash
git branch -m old-name new-name
```

---

### 4️⃣ Merge Branches

```bash
git checkout main
git merge feature/login
```

* Merges changes from a branch into current branch.
* Merge conflicts may appear if the same lines were modified.

### Merge Conflict Resolution

```bash
# Git will mark conflict in file
nano app.js   # edit conflict manually
git add app.js
git commit -m "Resolve merge conflict in app.js"
```

---

### 5️⃣ Delete Branch

```bash
git branch -d feature/login   # delete local branch
git push origin --delete feature/login  # delete remote branch
```

---

### 6️⃣ Stashing Changes

```bash
git stash          # save uncommitted changes temporarily
git stash list     # list all stashes
git stash pop      # apply last stash
git stash apply stash@{2}  # apply a specific stash
git stash drop stash@{2}   # remove a stash
git stash clear    # remove all stashes
```

**Scenario:**
You are mid-way through a feature but need to switch branches for a hotfix:

```bash
git stash
git checkout hotfix/header
# fix hotfix
git checkout feature/login
git stash pop
```

---

## 🧩 Step 3 — Viewing & Comparing Changes

### 1️⃣ View Commit History

```bash
git log                   # full log
git log --oneline          # compact view
git log --graph --oneline --all   # visual commit tree
```

### 2️⃣ Compare Changes

```bash
git diff                   # unstaged changes
git diff --staged          # staged changes vs last commit
git diff branchA..branchB  # compare two branches
git show <commit>          # view specific commit changes
git blame <file>           # see who changed each line
```

---

## 🧩 Step 4 — Level 2 Scenarios

### Scenario 1 — Develop Feature Safely

```bash
git checkout -b feature/search
# work on search feature
git add .
git commit -m "Implement basic search"
git push -u origin feature/search
```

### Scenario 2 — Resolve Conflicts After Merge

```bash
git checkout main
git pull origin main
git merge feature/search
# conflict occurs
# edit conflicting files
git add .
git commit -m "Resolve merge conflicts for search feature"
```

### Scenario 3 — Temporarily Switch Tasks

```bash
git stash
git checkout hotfix/button
# fix urgent button bug
git add .
git commit -m "Hotfix button bug"
git checkout feature/search
git stash pop
```

---

## 🔧 Additional Commands

| Command                          | Description                              |
| -------------------------------- | ---------------------------------------- |
| `git reflog`                     | Show history of HEAD movements           |
| `git reset --soft HEAD~1`        | Undo last commit but keep changes staged |
| `git reset --hard HEAD~1`        | Undo last commit and discard changes     |
| `git restore <file>`             | Restore file to last committed state     |
| `git tag <name>`                 | Tag current commit                       |
| `git tag -a <name> -m "message"` | Annotated tag                            |
| `git push origin <tag>`          | Push tag to remote                       |

---

# ⚡ Level 3 — Team Collaboration & Remote Work

Working in a team introduces challenges like **synchronizing code, handling conflicts, and maintaining a clean history**. This level covers **remote repositories, pushing, pulling, fetching, and collaboration workflows**.

---

## 📝 Step 1 — Understanding Remotes

A **remote repository** is a version of your project hosted on GitHub, GitLab, Bitbucket, or another server.

### 1️⃣ View Remote Repositories

```bash
git remote -v
```

* Lists configured remote repositories along with fetch/push URLs.
* `origin` is the default name for the main remote.

---

### 2️⃣ Add / Change Remote

```bash
git remote add origin <repo-url>       # add remote
git remote set-url origin <new-url>    # change remote URL
git remote remove origin               # remove remote
```

---

## 🚀 Step 2 — Pushing & Pulling

### 1️⃣ Push Branches

```bash
git push origin <branch>       # push a local branch
git push -u origin <branch>    # push and set upstream
git push origin --delete <branch> # delete remote branch
git push --all origin          # push all branches
git push --tags origin         # push all tags
```

**Pro Tip:**

* Use `-u` when first pushing a branch to set the upstream for future `git push` / `git pull`.

---

### 2️⃣ Pull Changes

```bash
git pull                       # fetch + merge from current upstream
git pull origin main            # pull a specific branch
git pull --rebase               # fetch + reapply your commits on top
```

**Scenario:**
Before starting work, always sync your local `main` with remote:

```bash
git checkout main
git pull origin main
```

---

### 3️⃣ Fetch Without Merging

```bash
git fetch                       # get latest changes from remote
git fetch --all                  # fetch all branches from all remotes
```

* `git fetch` downloads updates without changing your local files.
* Good for checking for updates before merging.

---

## 🌳 Step 3 — Branch Collaboration

### 1️⃣ Track Remote Branch

```bash
git checkout -b featureX origin/featureX
```

* Creates a local branch tracking a remote branch.
* Useful when starting work on a branch already existing on the server.

---

### 2️⃣ Merge Remote Changes

```bash
git checkout main
git fetch
git merge origin/main
```

* Alternative: `git pull` (fetch + merge)
* Avoid unnecessary merge commits using `git pull --rebase`.

---

### 3️⃣ Resolve Conflicts in Team Work

```bash
# conflict occurs during merge
nano app.js      # manually resolve
git add app.js
git commit -m "Resolve merge conflict in app.js"
```

**Pro Tip:** Use **small, frequent commits** to minimize conflicts.

---

## 🔍 Step 4 — Inspecting & Comparing Remote Changes

### 1️⃣ View Remote Branches

```bash
git branch -r      # list remote branches
git branch -a      # list local + remote branches
```

### 2️⃣ Compare Local vs Remote

```bash
git fetch
git log main..origin/main        # commits in remote not in local
git diff main..origin/main       # see actual changes
```

---

## 🧩 Step 5 — Collaboration Scenarios

### Scenario 1 — Work on Feature Branch

```bash
git checkout -b feature/login
# develop feature
git add .
git commit -m "Add login page"
git push -u origin feature/login
# open Pull Request for review
```

### Scenario 2 — Sync Local Before Starting Work

```bash
git checkout main
git pull --rebase origin main
git checkout -b feature/search
```

* Ensures your new branch is up-to-date with latest `main`.

### Scenario 3 — Collaborate with Team & Resolve Conflicts

```bash
git checkout main
git pull origin main
git checkout feature/login
git rebase main
# fix any conflicts
git add .
git rebase --continue
git push -f origin feature/login
```

> ✅ Best Practice: Only force push (`-f`) to **your feature branch**, never to `main` or shared branches.

### Scenario 4 — Delete Remote Branch After Merge

```bash
git push origin --delete feature/login
```

---

## 🔧 Step 6 — Useful Commands for Team Collaboration

| Command                         | Description                                                    |
| ------------------------------- | -------------------------------------------------------------- |
| `git fetch --prune`             | Remove remote-tracking branches that no longer exist on remote |
| `git remote show origin`        | Show detailed info about remote branches                       |
| `git pull --rebase origin main` | Reapply your local commits on top of upstream changes          |
| `git cherry -v`                 | See which commits are not yet merged                           |
| `git shortlog`                  | Summary of commits per author                                  |

---

# ⚡ Level 4 — Advanced Git (Rebase, Cherry-pick, Recovery)

Advanced Git operations allow you to **manipulate history safely, recover lost work, and keep a clean repository**, especially in large teams or production environments.

---

## 🔄 Step 1 — Rebase

Rebasing allows you to **reapply commits from one branch onto another**. It keeps history linear and clean.

### 1️⃣ Basic Rebase

```bash
git checkout feature/login
git rebase main
```

* Moves `feature/login` commits on top of `main`.
* No merge commits — cleaner history.

### 2️⃣ Interactive Rebase

```bash
git rebase -i HEAD~3
```

* Opens last 3 commits in editor.
* Options:

  * `pick` — keep commit
  * `squash` — combine commit with previous
  * `edit` — modify commit message or content
  * `drop` — remove commit

**Scenario:**
Clean up messy commits before merging to `main`:

```bash
git rebase -i HEAD~5
# squash small fixes into main commits
```

**Pro Tip:**

* Never rebase shared branches that others work on.
* Rebase is ideal for **feature branches before merging**.

---

## 🍒 Step 2 — Cherry-pick

Apply a **specific commit from one branch to another**.

```bash
git checkout main
git cherry-pick a1b2c3d
```

* Useful for **hotfixes** or **selective changes**.
* Can cherry-pick multiple commits:

```bash
git cherry-pick a1b2c3d e4f5g6h
```

**Scenario:**
Critical bug fix on `dev` branch must go to `main` immediately.

---

## 🔧 Step 3 — Reset & Restore

### 1️⃣ Undo Commits

| Command                    | Description                                      |
| -------------------------- | ------------------------------------------------ |
| `git reset --soft HEAD~1`  | Undo last commit, keep changes staged            |
| `git reset --mixed HEAD~1` | Undo last commit, unstaged changes remain        |
| `git reset --hard HEAD~1`  | Undo last commit and discard changes permanently |

**Scenario:**
You accidentally committed debug code:

```bash
git reset --soft HEAD~1
git edit files
git commit -m "Remove debug code"
```

---

### 2️⃣ Restore Files

```bash
git restore <file>              # restore file to last commit
git restore --staged <file>     # unstage file
git restore <file> --source HEAD~1  # restore file from specific commit
```

---

## 🧩 Step 4 — Stash Management (Advanced)

```bash
git stash list                   # list stashes
git stash show -p stash@{0}      # preview stash changes
git stash branch feature/temp stash@{0}  # create branch from stash
git stash drop stash@{0}         # delete a stash
git stash clear                  # remove all stashes
```

**Scenario:**
You’re mid-feature but need to fix production immediately:

```bash
git stash
git checkout hotfix/header
# fix production issue
git add .
git commit -m "Hotfix header"
git checkout feature/login
git stash pop
```

---

## 🛠️ Step 5 — Recovery & Reflog

`git reflog` tracks all HEAD movements — your safety net.

```bash
git reflog
git checkout -b recover-branch HEAD@{3}  # recover lost commit
```

**Scenario:**
You accidentally deleted a branch:

```bash
git branch -d feature/search
# oops
git reflog
git checkout -b feature/search HEAD@{2}
```

**Pro Tip:**

* Always check `reflog` before panicking — almost every commit can be recovered.

---

## 🔎 Step 6 — Reset vs Revert

* **Reset** changes history — dangerous on shared branches.
* **Revert** adds a new commit that undoes changes — safe for production.

```bash
git revert <commit>   # undo commit safely
```

**Scenario:**
Production branch has a bad commit:

```bash
git checkout main
git revert a1b2c3d
git push origin main
```

---

## 🧩 Step 7 — Level 4 Scenarios

### Scenario 1 — Rebase Feature Branch Before Merge

```bash
git checkout feature/login
git fetch origin
git rebase origin/main
# fix conflicts if any
git push -f origin feature/login
```

### Scenario 2 — Cherry-pick Hotfix

```bash
git checkout main
git cherry-pick e4f5g6h
git push origin main
```

### Scenario 3 — Recover Lost Commits

```bash
git reflog
git checkout -b recover-feature HEAD@{5}
```

### Scenario 4 — Undo Mistaken Commits

```bash
git reset --soft HEAD~2   # undo last 2 commits but keep changes staged
git commit -m "Fixed commit"
git push -f origin feature/login
```

---

## 🔧 Step 8 — Additional Advanced Commands

| Command                                                                   | Description                                               |
| ------------------------------------------------------------------------- | --------------------------------------------------------- |
| `git bisect`                                                              | Find the commit that introduced a bug using binary search |
| `git clean -fd`                                                           | Remove untracked files/directories                        |
| `git gc --aggressive`                                                     | Cleanup and optimize repo                                 |
| `git reflog expire --expire=now --all && git gc --prune=now --aggressive` | Aggressive cleanup                                        |
| `git tag -a v1.0 -m "Release"`                                            | Create annotated tag                                      |
| `git push origin --tags`                                                  | Push all tags                                             |
| `git blame <file>`                                                        | See author of each line                                   |
| `git show <commit>`                                                       | Show changes in a commit                                  |

---

# ⚡ Level 5 — Repository Maintenance, Cleanup & Optimization

Over time, repositories can accumulate **untracked files, dangling commits, and unnecessary objects**, which can slow down operations and increase size.
This level teaches **how to clean, prune, and optimize your Git repo** safely.

---

## 🧹 Step 1 — Cleaning Untracked Files

### 1️⃣ Remove Untracked Files

```bash
git clean -f
```

* `-f` = force (required)
* Removes files **not tracked by Git** in the working directory.

### 2️⃣ Remove Untracked Directories

```bash
git clean -fd
```

* `-d` = remove directories
* Safely removes folders not tracked by Git.

### 3️⃣ Preview Files Before Deleting

```bash
git clean -n
git clean -nd
```

* `-n` = dry-run; shows what will be deleted without actually deleting.

**Scenario:**
Your `node_modules/` and temporary logs are cluttering the repo:

```bash
git clean -fd
```

---

## 🛠️ Step 2 — Garbage Collection & Pruning

### 1️⃣ Optimize Repository

```bash
git gc
```

* Runs **garbage collection**, compresses objects, and cleans up unnecessary files.

### 2️⃣ Aggressive Cleanup

```bash
git gc --aggressive --prune=now
```

* Optimizes repo further, useful for very large repos.
* Compresses objects for storage efficiency.

### 3️⃣ Remove Dangling Objects

```bash
git prune
```

* Deletes unreachable objects from the object database.
* Should be used with caution.

---

## 🔍 Step 3 — Manage Stale Branches

```bash
git fetch --prune
```

* Removes remote-tracking branches that no longer exist on the remote.
* Keeps local branch list clean.

```bash
git branch -r            # list remote branches
git branch -a            # list all branches
```

**Scenario:**
After a major release, old feature branches are merged and deleted from remote:

```bash
git fetch --prune
```

---

## 🔧 Step 4 — Rewrite History (Optional / Advanced)

### 1️⃣ Remove Sensitive Data

```bash
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch secret.txt" \
  --prune-empty --tag-name-filter cat -- --all
```

* Removes sensitive files from history.
* Follow up with:

```bash
git push origin --force --all
git push origin --force --tags
```

**Pro Tip:**

* Use **BFG Repo Cleaner** for large history rewrites.
* Rewriting history affects collaborators; coordinate with team.

---

### 2️⃣ Squash Commits (History Simplification)

```bash
git rebase -i HEAD~10
```

* Squash minor/fix commits into meaningful units.
* Keeps repository clean and easier to navigate.

---

## 🧩 Step 5 — Level 5 Scenarios

### Scenario 1 — Cleanup Before Pushing to Remote

```bash
git clean -fd          # remove untracked files & folders
git gc --aggressive    # optimize repository
git status             # verify clean working directory
git push origin main
```

### Scenario 2 — Recover Disk Space in Large Repos

```bash
git prune
git gc --aggressive
du -sh .git             # check size reduction
```

### Scenario 3 — Remove Old Remote Branches

```bash
git fetch --prune
git branch -r            # verify stale branches removed
```

---

## 🔧 Step 6 — Additional Maintenance Commands

| Command                                           | Description                                 |
| ------------------------------------------------- | ------------------------------------------- |
| `git fsck`                                        | Verify integrity of objects in repository   |
| `git reflog expire --expire=now --all`            | Expire all reflog entries                   |
| `git repack -a -d --depth=250 --window=250`       | Repack objects to reduce repo size          |
| `git verify-pack -v .git/objects/pack/pack-*.idx` | Analyze packed objects                      |
| `git count-objects -v`                            | Show number of loose objects and disk usage |

---

# ⚡ Level 6 — DevOps & Real-World Git Scenarios

In professional environments, Git is not just about commits — it’s **a key tool for team workflows, releases, and automated pipelines**.
This level covers **branching strategies, hotfixes, tagging releases, and CI/CD integration tips**.

---

## 🌿 Step 1 — Branching Strategies

### 1️⃣ Git Flow (Common Workflow)

```
main
├─ develop
│  ├─ feature/login
│  └─ feature/search
└─ hotfix/header
```

* **main**: production-ready code
* **develop**: integration branch
* **feature/**: new features
* **hotfix/**: urgent fixes for production

**Commands:**

```bash
# Create and switch to feature branch
git checkout -b feature/login develop

# Push feature branch
git push -u origin feature/login
```

---

### 2️⃣ GitHub Flow (Simpler Workflow)

* All development occurs on **feature branches**
* Merged into `main` via **Pull Requests**
* Ideal for CI/CD pipelines

```bash
git checkout -b feature/signup
git add .
git commit -m "Add signup feature"
git push -u origin feature/signup
# open PR for review
```

---

## 🏷️ Step 2 — Tagging & Releases

### 1️⃣ Create Tags

```bash
git tag v1.0                 # lightweight tag
git tag -a v1.0 -m "Release v1.0"   # annotated tag
```

### 2️⃣ Push Tags to Remote

```bash
git push origin v1.0
git push origin --tags        # push all tags
```

**Scenario:**
Mark production-ready commit with a tag:

```bash
git checkout main
git tag -a v2.0 -m "Release version 2.0"
git push origin v2.0
```

---

## 🔥 Step 3 — Hotfix Workflow

### Scenario: Urgent Production Fix

```bash
# Checkout main
git checkout main

# Create hotfix branch
git checkout -b hotfix/header

# Fix issue
git add .
git commit -m "Fix header bug"

# Merge hotfix into main and develop
git checkout main
git merge hotfix/header
git push origin main

git checkout develop
git merge hotfix/header
git push origin develop

# Delete hotfix branch
git branch -d hotfix/header
git push origin --delete hotfix/header
```

* Ensures fix is applied to both production and development branches.

---

## 🔧 Step 4 — CI/CD Integration Tips

* **Feature Branches** → run automated tests
* **PR Merges** → trigger build pipeline
* **Tags** → trigger deployment pipeline
* **Hotfix Branches** → urgent deployment

**Commands / Scenarios:**

```bash
# Before merging to main
git checkout feature/login
git pull origin main --rebase   # keep branch up-to-date
git push origin feature/login

# Open PR → CI runs tests → merge on success
```

**Pro Tip:**

* Keep `main` always deployable.
* Use **protected branches** on GitHub/GitLab to prevent direct push.

---

## 🌐 Step 5 — Remote Collaboration in Large Teams

### 1️⃣ Fetch & Rebase Regularly

```bash
git fetch origin
git rebase origin/main
```

* Avoids messy merge commits.
* Keeps your feature branch current with team changes.

### 2️⃣ Resolve Conflicts Early

```bash
# After rebase
# Fix conflicts
git add .
git rebase --continue
git push -f origin feature/login
```

### 3️⃣ Delete Merged Branches

```bash
git branch -d feature/login
git push origin --delete feature/login
```

* Keeps repo clean.
* Helps avoid confusion in CI/CD pipelines.

---

## 🧩 Step 6 — Real-World Scenarios

### Scenario 1 — Start a Feature Branch Safely

```bash
git checkout main
git pull origin main
git checkout -b feature/payment
```

### Scenario 2 — Merge Feature via PR (GitHub Flow)

```bash
git add .
git commit -m "Add payment module"
git push -u origin feature/payment
# Open PR → CI/CD runs tests → Merge
```

### Scenario 3 — Apply Hotfix to Production

```bash
git checkout main
git pull origin main
git checkout -b hotfix/api
# Fix bug
git add .
git commit -m "Fix API issue"
git push origin hotfix/api
# Merge hotfix
git checkout main
git merge hotfix/api
git push origin main
```

### Scenario 4 — Tag a Release

```bash
git checkout main
git tag -a v2.1 -m "Release v2.1 with payment module"
git push origin v2.1
```

---

## 🔧 Step 7 — Additional DevOps Commands

| Command                                      | Description                                      |
| -------------------------------------------- | ------------------------------------------------ |
| `git branch --merged`                        | List branches already merged into current branch |
| `git branch --no-merged`                     | List branches not yet merged                     |
| `git push origin --tags`                     | Push all tags to remote                          |
| `git log --oneline --graph --decorate --all` | Visualize history and branch merges              |
| `git reflog`                                 | Track HEAD movement, useful for recovery         |
| `git reset --hard origin/main`               | Reset local branch to remote state               |
| `git fetch --prune`                          | Remove deleted remote branches locally           |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

# 🎯 Final Note

This document covers Git usage from local development to CI/CD pipelines — the way professional teams handle version control.

## 🎓 Next Steps

- **Practice**: Create a test repository and try all the commands
- **Explore**: Learn about Git hooks, submodules, and advanced workflows
- **Contribute**: Use these skills in open source projects
- **Teach**: Share your knowledge with others

## 📚 Additional Resources

- [Official Git Documentation](https://git-scm.com/doc)
- [GitHub Learning Lab](https://lab.github.com/)
- [Atlassian Git Tutorials](https://www.atlassian.com/git/tutorials)
- [Pro Git Book](https://git-scm.com/book)

## 🤝 Contributing

Found an error or want to improve this guide? 

1. Fork this repository
2. Create a feature branch: `git checkout -b feature/improvement`
3. Make your changes and commit: `git commit -m "Add improvement"`
4. Push to your branch: `git push origin feature/improvement`
5. Open a Pull Request

---

> 💡 **Remember**: Keep experimenting! The more you practice branching, merging, and rebasing, the more intuitive Git becomes.

**Happy coding! 🚀**