var cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var suits = ["diamonds", "hearts", "spades", "clubs"];
var deck = new Array();

function getDeck() {
	var deck = new Array();

	for (var i = 0; i < suits.length; i++) {
		for (var x = 0; x < cards.length; x++) {
			var card = { Value: cards[x], Suit: suits[i] };
			deck.push(card);
		}
	}
	console.log("deck log: " + deck)
	return deck;
}

function shuffle() {
	// for 1000 turns
	$(".DeckCheckDivValue").empty();
	// var deckCheckDiv = document.getElementsByClassName("DeckCheckDivValue");
	//clear DeckCheckDivValue HERE
	// deckCheckDiv.className = "DeckCheckDivValue";
	//using innerHTML
	// deckCheckDiv.innerHTML += deck.length;
	//using 
	$(".DeckCheckDivValue").text(deck.length);
	// document.getElementsByClassName("DeckCheckDivValue").append(deckCheckDiv);
	// switch the values of two random cards
	for (var i = 0; i < 10000; i++) {
		var location1 = Math.floor((Math.random() * deck.length));
		var location2 = Math.floor((Math.random() * deck.length));
		var tmp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmp;
	}
	console.log("shuffle success");

	renderDeck();
}

function cutDeck() {
	// for 1000 turns
	//using 
	// switch the values of two random cards
	var deckCut = Math.floor(Math.random() * deck.length)
	for (var i = deckCut; i < deck.length; i++) {

		var location1 = Math.floor((Math.random() * deck.length));
		var location2 = Math.floor((Math.random() * deck.length));
		var tmp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmp;
	}
	console.log("cut deck success")

	renderDeck();
}

function renderDeck() {
	document.getElementById('deck').innerHTML = '';
	for (var i = 0; i < deck.length; i++) {
		var card = document.createElement("div");
		var value = document.createElement("div");
		var suit = document.createElement("div");
		card.className = "card";
		value.className = "value";
		suit.className = "suit " + deck[i].Suit;

		value.innerHTML = deck[i].Value;
		card.appendChild(value);
		card.appendChild(suit);
		var img = document.createElement('img');
		if (deck[i].Suit == 'hearts')
			suitImage = './assets/images/heartImage2.png';
		else if (deck[i].Suit == 'spades')
			suitImage = './assets/images/spadeImage2.png';
		else if (deck[i].Suit == 'diamonds')
			suitImage = './assets/images/diamondImage.png';
		else
			suitImage = './assets/images/clubImage.png';
		img.src = suitImage;
		card.appendChild(img);

		document.getElementById("deck").appendChild(card);
		// testDeck();
	}
}
// function testDeck() {
// 	document.getElementById('deckCheck').innerHTML = '';
// 	for (var i = 0; i < deck.length; i++) {
// 		var card = document.createElement("div");
// 		var value = document.createElement("div");
// 		var suit = document.createElement("div");
// 		card.className = "card";
// 		value.className = "value";
// 		suit.className = "suit " + deck[i].Suit;

// 		value.innerHTML = deck[i].Value;
// 		card.appendChild(value);
// 		card.appendChild(suit);
// 		var img = document.createElement('img');
// 		if (deck[i].Suit == 'hearts')
// 			suitImage = './assets/images/heartImage2.png';
// 		else if (deck[i].Suit == 'spades')
// 			suitImage = './assets/images/spadeImage2.png';
// 		else if (deck[i].Suit == 'diamonds')
// 			suitImage = './assets/images/diamondImage.png';
// 		else
// 			suitImage = './assets/images/clubImage.png';
// 		img.src = suitImage;
// 		card.appendChild(img);

// 		document.getElementById("deck").appendChild(card);
// 	}
// }

function load() {
	deck = getDeck();
	shuffle();
	renderDeck();
}

window.onload = load;

