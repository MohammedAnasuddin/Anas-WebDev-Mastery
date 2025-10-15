# Version Control

## Version Control

Helps to add checkpoints to the code by tracking the changes in the codes.





## Creating a Git Repo

`git init` is the command that *turns a normal directory into a Git repository*. When you run it, Git creates a special, hidden subdirectory named `.git`.

> Repo: A folder containing our code files whose changes are tracked by Git.

This `.git` folder is the heart of your repository. It contains all the necessary files and data for Git to track your project's history.

The reason this folder is hidden (by starting with a `.`) it  *keeps configuration files and metadata from cluttering your workspace.* **You aren't meant to edit the files inside `.git` directly. Doing so could corrupt your repository's history.** You *interact with it safely through Git commands.*

The `.git` directory is the complete, self-contained database for your repository. It holds every piece of information Git needs:

- **All your commits (snapshots):** These are stored in a highly efficient way in an "objects" folder inside `.git`.
- **All your branches and tags:** These are just simple pointers to specific commits.
- **The staging area (index):** This file tracks what will go into your next commit.
- **Your repository's configuration:** Settings specific to this one project.
- **The `HEAD` pointer:** Which tells Git what commit (and usually, what branch) you're currently working on.

## Tracking Files

Adding Files let's Git track the changes in a file.

```git
git add file
```

## Commiting

Taking a snapshot of the project at a certain moment/time

Il's like creating a whole new copy of the project(Repo) and asking git to rememeber by the commit message and the time created.

```git
git commit -m "Message"
```

> It's best practice to commit regularly. This makes it easy to revert to the closes working model of the project  in case of a failure.

> **Git commands flag convention**
> 
> In the world of command-line tools, a **flag** (also called an "option" or a "switch") is *something you add to a command to modify its default behavior*.
> 
> Flags give you fine-grained control over how a command runs.
> 
> - A single dash (`-`) is typically for a single-character, abbreviated flag (e.g., `-m` for `message`, `-b` for `branch`).
> - A double dash (`--`) is for a full-word, more descriptive flag (e.g., `--set-upstream`, `--oneline`).

To get history of commits use the command

```git
git log
```

This return all the commits with their details : commit Id/hash, Author of the commit , timestamp of the commit performed.

### Reverting to a previous commit

use the command 
When using `git checkout <commit-hash>`, you provide the hash of the exact commit you want to visit.

```git
git checkout commitHash
```

> `HEAD` is a pointer in a git, which points to latest commit

Executing `checkout` it moves the `HEAD` to previous commit from the latest commit. using a `checkout` just the view is shown as it was during the time of the commit on which currently `HEAD` points to.

> A **tick** shows the `HEAD` in Git Lens.

`git checkout` does not delete the any files it just let you explore the past states of the repo.

To get back on the latest commit use 

```git
git checkout main 
```

## Writing Commit Messages

Commit messages should be **imperative**.(order the codebase).
Fill in the blank to create a good commit message

```
If applied to the codebase, this commit will ________________
```

> this commit will *add the feature*
> 
> this commit will *resolve the bug*
> 
> `NOTE`
> 
> Don't use Filler Words 

## Github

git is a software to track changes where as Github is a cloud latform which let's you store git repositries and colloborate with other developers.

### Types of repo's

1. **Local Repo** : a version of the project which exists on your own machine. Changes made here will be private and confined to the the machine.

2. **Remote Repo**: A version of the project which stored on a Server. It is used to shared the code between the developer's. And keeps the project version in-sync for all the developers working on the project.

> GitHub automatically names the remote repo as `origin`

### Connecting Remote Repo to Local Repo

Create a new repo on `Github` then opy ot's origin command and run it in the local repo.

```git
git remote add remote_repo https://github.com/Username/repo_name.git
```

> You could have multiple remote to a single Local repo which is rare.

### Getting changes on Remote repo

To transfer changes of local repo to remote repo use 

```git
git push -u remote_repo_name branch_name
```

## Branching

Branching lets you create different versions of the project at specific moment of the time.

Helps to isolate experimenting apart from the `main` repo.

>  It's a best practice to dedicated branch for respective work.

The default branch is `main`

### Creating a branch Name

run the command 

```git
got branch new_branch_name
```

to go on to that branch (this is known as switch) use thecomamnd

```git
git checkout branch
```

To create a new branch and immediately witch to it use `-b` with the above command

```git
git checkout -b new_branch_name
```

> `NOTE`
> 
> When a branch is created it inherits from the current branch at the point of time.
> 
> To create a new branch continuing from any branch 
> 
> ```git
> git branch new_branch_name source_branch_name 
> ```

## Pushing branches on remote repo

use the command 

```git
git push --set-upstream remote_repo_name brnach_name
```

`--set-upstream` : this let's the remote branch of the pushed branched track changes of the pushed branch. It establishes a tracking relationship between local and remote branch.  
**Upstream** generally refers to the remote repository that you are tracking

> you can use `-u` instead of `--set-upstream` in the command
> 
> It creates a "tracking" link between your local `my-branch` and the remote `origin/my-branch`. Once this link is set, you can simply use `git pull` and `git push` from that branch, and Git will know exactly which remote branch to sync with. And yes, this command will create the branch on the remote repository if it doesn't already exist.

use this we could normally push changes since a tracking relation has established without the worry of "Are we pushing on the right branch?"

### Updating Local Branch from Remote Branch

If other dev made pushed changes on the branch. we need to get the changes from the remote branch to the local branch. use the command

```git
git pull 
```

### Pull Request(PR)

In other into  merge the branch to the main branch we must open a Pull Request.
A pull request lets you share your changes for review and feedback.

### Creating a Pull request

1. Go on the pull request tab.

2. Select the branch 

3. Add a title and describe the changes you made

4. If satisfies this PR will be merged with the main branch

Git stores these branches even after merging. You can observe the status of commits of the branch with respective to the `main` or (to the branch it has been merged)

It shows the status in terms of commits , `Ahead` and `Behind`

> - **Ahead and Behind** describes the relationship between your local branch and its remote upstream counterpart.
>   
>   - **Ahead:** You have commits on your local branch that you *haven't pushed to the remote* yet.
>   - **Behind:** The remote branch has commits (pushed by others) that you *haven't pulled down to your local branch* yet.

This merge happens in the remote repo to update the Local Repo after the Merge on the Remote Repo use the command

```git
git pull remote_branch local_branch
```

```git
git pull
// This is a shothad for most used git pull origin main
```

## Resolving Merge Conflicts

Merge conflict is a situation where conflict is a git can't decide which change to consider.

These occur if multiple developers edit the same line of code of the same file at the same time.

> **Using VS code as Editor**
> Git bash uses vim as default which is  complex hence configure it to run in vs code by running the below command.
> 
> ```git
>    git config --global core.editor "code --wait"
> ```

### Avoiding Merge Conflicts

1. Checkout to the main branch

2. Pull the latest changes from the remote main branch (or the branch to merge with)
   
   1. These ae changes which  conflict with our code

3. Now local and remote branches we want merge with are identical

4. Switch to your branch.

5. Merge the updated main branch( or the branch we want to merge into) to our branch 

6. Merge conflicts arises visually
   
   1. `<<<<<<<` indicates changes coming our branch
   
   2. `>>>>>>>` indicates the changes from the branch we want to merge in

7. YOu have three choices:
   
   1. Accept your brnach code
   
   2. Accept  code of the branch to merge with
   
   3. Custom 

8. Add and commit the resolved conflicts as changes

9. push the changes to remote branch of our branch

10. Create a PR and there will be no conflicts.

## Reset

Used to go back to specific commit of the project. this discards all the next commits from the specified commit but keeps the changes of the deleted commits.

### Types of Reset

#### Soft Reset

In this the next commits after the specified commit will be transferred to staging area ( sate after add command) of the working directory (repo)

```git
git reset soft <commit-hash>
```

#### Mixed Reset

This is default reset , rather than keeping next commits in staged area it puts them in unstaged area.

```git
git reset <commit-hash>
```

#### Hard Reset

All the next commits are discarded

```git
git reset hard <commit-hash>
```

## Revert

To go to a specific commit without deleting  the next commits 

```git
git revert <commit-hash>
```

adds a new commit to history.

## Stash

It let's us save our un-committed changes(staged and un staged) temporarily

```git
git stash
```

All the un-committed changes are saved so no loss of work 

### Getting our changes back

get the list of stash

```git
git stash list
```

output `statsh@{n}: text`

Copy the left side of `:`

run

```git
git stash apply copied-id 
```

Resolve any merge conflicts if occurred

## Git Fetch

`git fetch` connects to your remote repository (like `origin`) and **downloads all the new data** (new commits, new branches, etc.) that you don't have yet.

Crucially, **it does not change any of your local branches or your working files.** It only updates the "remote-tracking" branches in your local `.git` database (like `origin/main`).

```git
git fetch branch_name
```

So, `git pull` is just a shortcut that does `git fetch` and `git merge` in one step. Using `git fetch` separately gives you a moment to pause, review, and make sure the incoming changes won't cause problems.
