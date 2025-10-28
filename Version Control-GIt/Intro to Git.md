# Getting Started

## A Short History of Git

During the early years of the Linux kernel maintenance (1991–2002), changes to the software were passed around as patches and archived files

In 2005, the relationship between the community that developed the Linux kernel and the commercial company that developed BitKeeper broke down, and the tool’s free-of-charge status was revoked.

Since its birth in 2005, Git has evolved and matured to be easy to use and yet retain these initial qualities.

## What is Git?

### Snapshots, Not Differences

other systems (CVS, Subversion, Perforce, and so on) think of the information they store as a set of files and the changes made to each file over time (this is commonly described as delta-based version control).

Git thinks of its data more like a series of snapshots of a miniature filesystem. *With Git, every time you commit, or save the state of your project, Git basically takes a picture of what all your files look like at that moment and stores a reference to that snapshot.*

To be efficient, if files have not changed, Git doesn’t store the file again, just a link to the previous identical file it has already stored. Git thinks about its data more like a stream of snapshots.

### Nearly Every Operation Is Local

to browse the history of the project, Git doesn’t need to go out to the server to get the history and display it for you — it simply reads it directly from your local database. This means you see the project history almost instantly.

This also means that there is very little you can’t do if you’re offline or off VPN. If you get on an airplane or a train and want to do a little work, you can commit happily (to your local copy, remember?) until you get to a network connection to upload.

### Git Has Integrity

Everything in Git is checksummed before it is stored and is then referred to by that checksum. This means it’s impossible to change the contents of any file or directory without Git knowing about it.

> In Git, "checksumming" refers to the process of calculating a unique identifier.
> 
> - **Data Integrity and Uniqueness:** 
>   
>   Every piece of data in Git – whether it's a file's content (blob), a directory's structure (tree), or a commit (which includes metadata like author, date, and pointers to parent commits and trees) – is hashed. This produces a unique SHA-1 hash, a 40-character hexadecimal string. This hash acts as a fingerprint for that specific data.
> 
> - **Immutability:** 
>   
>   If even a single bit of the data changes, the calculated SHA-1 hash will also change drastically. This means that if someone tries to alter a file, a directory structure, or a commit in a Git repository, the associated checksum will no longer match, immediately indicating that the data has been tampered with. This ensures the integrity and authenticity of your project's history.

**Git stores everything in its database not by file name but by the hash value of its contents.**

### The Three States

Git has three main states that your files can reside in: `modified`, `staged`, and `committed`:

1. Modified means that you have changed the file but have not committed it to your database yet.

2. Staged means that you have marked a modified file in its current version to go into your next commit snapshot.

3. Committed means that the data is safely stored in your local database.

*The staging area is a file, generally contained in your Git directory, that stores information about what will go into your next commit.* Its technical name in Git parlance is the “index”, but the phrase “staging area” works just as well.

The Git directory is where Git stores the metadata and object database for your project.

The basic Git workflow goes something like this:

You modify files in your working tree.
You selectively stage just those changes you want to be part of your next commit, which adds only those changes to the staging area.
You do a commit, which takes the files as they are in the staging area and stores that snapshot permanently to your Git directory.

If a particular version of a file is in the Git directory, it’s considered committed. If it has been modified and was added to the staging area, it is staged. And if it was changed since it was checked out but has not been staged, it is modified.

## The Command Line

If you know how to run the command-line version, you can probably also figure out how to run the GUI version, while the opposite is not necessarily true.
