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

/*--------------*/
/*  HOW TO HEROKU  */
/*--------------*/
/*

heroku create

heroku apps:rename

heroku logs

heroku apps:destroy



*/