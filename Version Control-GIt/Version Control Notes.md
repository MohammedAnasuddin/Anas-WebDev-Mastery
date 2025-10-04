## Version Control

Helps to add checkpoints to the code by tracking the changes in the codes.

## Terminologies

### Repo

A folder containing our code files whose changes are tracked by GIt.

### Commits

These are the checkpoints of the repo. Follow **Atomic Commits** , commits after change in single component rather than a batching changes into a single commit.

## .gitIgnore

Contains all the paths of files which Git does not track changes for it. Use any gitIgnore Generator for the tech stack your working for.

## Commands

> Always run `git status` to check the current situation of the repo.

1. `git init` : Initializes a folder as repo i.e, the folder is being tracked by Git from now on. This commands creates a hidden folder `.git` which shall contains all teh history of the changes in the folder.

2. `git add file1 fileN` :  Git Starts tracking the Mentioned Files.  This puts the files into staging area. 

3. `git commit -m "Reason to Commit"`: To commit changes

## Workflows

> You are always on a branch the default branch is `master`

> Install GitLens VS Code Extension

## Working of Commits

Every Commit is dependent on Previous Commit.

parent is a pointer which points to previous commit , for Intial Commit it points to null.



## Branches


