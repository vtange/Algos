/*--------------*/
/*  HOW TO NPM  */
/*--------------*/

npm list

    => list all installed modules

npm list -g

    => list all global modules

npm list -g --depth=0

    => list all global modules without submodules

npm link

	=> npm install a directory as a module

npm init

    => start package.json file

npm start

    => start "start" file in package.json       ==can start server

npm version #.#.#

    => update version to #.#.#

npm cache clean 

	=> clean cache from installs
	
//account stuff

npm view miragu

npm publish


//installing

npm install --save

    install package and update package.json
	
npm install --save-dev

    install package and update package.json for self only (ppl using the module as a module of their proj wont see it)


npm update -g

    update all global packages
    
    
express insertProjectName

    creates ProjectName

/*--------------*/
/*  HOW TO BOWER  */
/*--------------*/

bower install --save

	install package and update bower.json
	
bower cache clean 

	=> clean cache from installs
	
bower update



/*--------------*/
/*  HOW TO NODE  */
/*--------------*/

node

    =enter console

node -v

    =check version

node insertFileName                              ==can start server

    =run insertFileName.js
    
npm install blah && node blah

	=chain actions with &&