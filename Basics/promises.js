//PLAIN

//..animateText = function(transformFunction, numberOfTimes, framesPerSecond) {
	//ES6 arrow version: return new Promise((nextStep,errStep)=>{...
    return new Promise(function(nextStep,errStep){
      var oneFrame = function(){
        this.setText(transformFunction(this.getText()));
        console.log(this.getText());
      }.bind(this);
      while (numberOfTimes > 0){
         setTimeout(oneFrame,1000/framesPerSecond);
         numberOfTimes--;
      }
      
      if (numberOfTimes === 0) {
        console.log("good");
        nextStep();
      }
      else {
        errStep();
      }
    }.bind(this));
//};


//q
var q 	  = require('q');

///...

			var gotTrades = q.defer();
			Trade.find({}).populate('who').populate('tradingOut').exec(function(err,trade){
				trades.push(trade);
				
				gotTrades.resolve("yay");
			});
			gotTrades.promise.then(function(){
				res.send(trades);
			})


//BLUEBIRD
var Promise = require('bluebird');

///...

function toWav(fileName, outputName) {
	return new Promise(function(resolve, reject) {
		var command = SoxCommand();
		command.input(fileName);
		command.output(outputName)
			.outputFileType('wav');

		addStandardListeners(command);
		command.run(reject, resolve);
	});
};


			toWav( workspace_dir + file.name, workspace_dir + outputWav )
			.then(function(){
				//delete input file
				CleanUp(workspace_dir + file.name);
				//goodCB -> process with VST
				VSTprocess(vst, workspace_dir + outputWav,  workspace_dir + "[tweak]"+outputWav, origExt, res);

			})
			.catch(function(){
				//errCB -> "woops, couldn't process your file"
				console.log("something went wrong in processing your file");
			});

//ANGULAR

	//used to repeat things x times
	$scope.times = function(n, iterator) {
	  var accum = Array(Math.max(0, n));
	  for (var i = 0; i < n; i++) accum[i] = iterator.call();
	  return accum;
	};

	//set up game. disallow clicks during set up.
	$scope.setupGame = function(){
	
		var rdyPlayers = {};
			players.forEach(function(player){
				rdyPlayers[player] = $q.defer();
			});
		var all = $q.all([rdyPlayers.player1.promise, rdyPlayers.player2.promise, rdyPlayers.player3.promise, rdyPlayers.player4.promise]);
		function allSuccess(){
			$scope.runNextTurn();
		};
	    all.then(allSuccess);
		//for each player...
		players.forEach(function(player){
			var deckAnimateTime = 750*(players.indexOf(player));
			var playerAppearTime = 750*(players.indexOf(player)+1);
			$timeout(function(){
				//animate the deck toward the respective player and cancel animation in 500ms
				$scope[player].isDrawing = true;
				$timeout(function(){
					$scope[player].isDrawing = false;
				},750);
			},deckAnimateTime);
			$timeout(function(){
				//3 cards each for...
				//their secret palace
				$scope.times(3,function(times){
					//push random card of deck.length
					$scope[player].sec_palace.push($scope.deck[0]);
					//remove card from deck
					$scope.deck.splice(0,1);
				});
				//their upper palace
				$scope.times(3,function(times){
					//push random card of deck.length
					$scope[player].upp_palace.push($scope.deck[0]);
					//remove card from deck
					$scope.deck.splice(0,1);
				});
				//their hand
				$scope.times(3,function(times){
					//push random card of deck.length
					$scope[player].hand.push($scope.deck[0]);
					//remove card from deck
					$scope.deck.splice(0,1);
				});
				//animate in. resolve promise
				$scope[player].ready = true;
				rdyPlayers[player].resolve(player+" is ready")
				
			},playerAppearTime);
		});
};