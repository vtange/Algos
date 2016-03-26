function makeDeck(){
	var deck = [];
	var id = 1;
	let suits = ["spades","hearts","clubs","diamonds"];

	suits.forEach(function(suit){
		for(let i=1;i<14;i++){
			deck.push({id:id,suit:suit,value:i});	
			id++;
		}
	});
	return deck;
}