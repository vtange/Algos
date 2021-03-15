/*--------------*/
/*  HOW TO GIT  */
/*--------------*/
/*

git clone (https://github.com/:user/:repo)
	downloads repo to current folder

git add --a (all)
	add all files to be committed as seen from current directory

git commit -m (message)
	commit with message

git commit -am (all and message)
	do add and commit all at once (NOT RECOMMENDED)

git checkout
	go to branch

git checkout -b (branch)
	new branch

git pull (upstream or origin or heroku) (branch name)
	download from remote

// To make a private forked repo.
// 1. Rename the repo name at the github website.
// 2. Create a new repo. use the same name as original repo you forked from
// 3. Go to the folder of the fork.
// 4. git push --mirror https://github.com/exampleuser/new-repository.git <-- ssh url of repo you made in step 2.

git push
	upload to remote, overwrites all files up the most recent commit

git set-url (origin) (new_url)
	changes url of remotes

git add (origin) (url)
	add a remote

git reset --hard
	undo all changes, back to most recent commit

git reset HEAD~1
	undo one commit

git merge (a branch that isn't current branch)
	merge branches

git cherry-pick (commit hash id)
	pick out a commit to slot in, can be from other branches

git submodule

git status
	check status of new commits

git rm -r --cache .
	clear added files
