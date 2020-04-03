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
function knock() {
	console.log("I don't want to cut....go fuck yourself");
}
function shuffle() {
	// for 1000 turns
	$(".DeckCheckDivValue").empty();	
	$(".DeckCheckDivValue").text(deck.length);
	// document.getElementsByClassName
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
	//render deck function
	testDeck();

	document.getElementById('deck').innerHTML = '';
	for (var i = 0; i < deck.length; i++) {
		//create card, suit and value divs to append to html
		var card = document.createElement("div");
		var value = document.createElement("div");
		var suit = document.createElement("div");
		var deckTestCard = document.createElement("div");
		card.className = "card";
		value.className = "value";
		suit.className = "suit " + deck[i].Suit;
		deckTestCard.className = deck[i].Suit + " - " + deck[i].Value;
		value.innerHTML = deck[i].Value;
		card.appendChild(value);
		card.appendChild(suit);
		var img = document.createElement('img');
		if (deck[i].Suit == 'hearts')
			suitImage = '../assets/images/heartImage2.png';
		else if (deck[i].Suit == 'spades')
			suitImage = '../assets/images/spadeImage2.png';
		else if (deck[i].Suit == 'diamonds')
			suitImage = '../assets/images/diamondImage.png';
		else
			suitImage = '../assets/images/clubImage.png';
		img.src = suitImage;
		card.appendChild(img);

		document.getElementById("deck").appendChild(card);
	}
}
function testDeck() {
	console.log("Test Deck Success");
	// console.log(deck.length);
	$(".DeckCountTotal").text(deck.length);
	for(i = 0 ; i < deck.length ; i++) {
		// console.log(deck[i]);
		var testCard = deck[i].Value + deck[i].Suit;
		console.log(testCard);
		if(testCard == "Aclubs") {
			$(".Aclubs").text("present");
		}
		if(testCard == "Kclubs") {
			$(".Kclubs").text("present");
		}
		if(testCard == "Qclubs") {
			$(".Qclubs").text("present");
		}
		if(testCard == "Jclubs") {
			$(".Jclubs").text("present");
		}
		if(testCard == "10clubs") {
			$(".10clubs").text("present");
		}
		if(testCard == "9clubs") {
			$(".9clubs").text("present");
		}
		if(testCard == "8clubs") {
			$(".8clubs").text("present");
		}
		if(testCard == "7clubs") {
			$(".7clubs").text("present");
		}
		if(testCard == "6clubs") {
			$(".6clubs").text("present");
		}
		if(testCard == "5clubs") {
			$(".5clubs").text("present");
		}
		if(testCard == "4clubs") {
			$(".4clubs").text("present");
		}
		if(testCard == "3clubs") {
			$(".3clubs").text("present");
		}
		if(testCard == "2clubs") {
			$(".2clubs").text("present");
		}
		if(testCard == "Adiamonds") {
			$(".Adiamonds").text("present");
		}
		if(testCard == "Kdiamonds") {
			$(".Kdiamonds").text("present");
		}
		if(testCard == "Qdiamonds") {
			$(".Qdiamonds").text("present");
		}
		if(testCard == "Qdiamonds") {
			$(".Qdiamonds").text("present");
		}
		if(testCard == "Jdiamonds") {
			$(".Jdiamonds").text("present");
		}
		if(testCard == "10diamonds") {
			$(".10diamonds").text("present");
		}
		if(testCard == "9diamonds") {
			$(".9diamonds").text("present");
		}
		if(testCard == "8diamonds") {
			$(".8diamonds").text("present");
		}
		if(testCard == "7diamonds") {
			$(".7diamonds").text("present");
		}
		if(testCard == "6diamonds") {
			$(".6diamonds").text("present");
		}
		if(testCard == "5diamonds") {
			$(".5diamonds").text("present");
		}
		if(testCard == "4diamonds") {
			$(".5diamonds").text("present");
		}
		if(testCard == "4diamonds") {
			$(".4diamonds").text("present");
		}
		if(testCard == "3diamonds") {
			$(".3diamonds").text("present");
		}
		if(testCard == "2diamonds") {
			$(".2diamonds").text("present");
		}
		if(testCard == "Ahearts") {
			$(".Ahearts").text("present");
		}
		if(testCard == "Khearts") {
			$(".Khearts").text("present");
		}
		if(testCard == "Qhearts") {
			$(".Qhearts").text("present");
		}
		if(testCard == "Jhearts") {
			$(".Jhearts").text("present");
		}
		if(testCard == "10hearts") {
			$(".10hearts").text("present");
		}
		if(testCard == "9hearts") {
			$(".9hearts").text("present");
		}
		if(testCard == "8hearts") {
			$(".8hearts").text("present");
		}
		if(testCard == "7hearts") {
			$(".7hearts").text("present");
		}
		if(testCard == "6hearts") {
			$(".6hearts").text("present");
		}
		if(testCard == "5hearts") {
			$(".5hearts").text("present");
		}
		if(testCard == "4hearts") {
			$(".4hearts").text("present");
		}
		if(testCard == "3hearts") {
			$(".3hearts").text("present");
		}
		if(testCard == "2hearts") {
			$(".2hearts").text("present");
		}
		if(testCard == "Aspades") {
			$(".Aspades").text("present");
		}
		if(testCard == "Kspades") {
			$(".Kspades").text("present");
		}
		if(testCard == "Qspades") {
			$(".Qspades").text("present");
		}
		if(testCard == "Jspades") {
			$(".Jspades").text("present");
		}
		if(testCard == "10spades") {
			$(".10spades").text("present");
		}
		if(testCard == "9spades") {
			$(".9spades").text("present");
		}
		if(testCard == "8spades") {
			$(".8spades").text("present");
		}
		if(testCard == "7spades") {
			$(".7spades").text("present");
		}
		if(testCard == "6spades") {
			$(".6spades").text("present");
		}
		if(testCard == "5spades") {
			$(".5spades").text("present");
		}
		if(testCard == "4spades") {
			$(".4spades").text("present");
		}
		if(testCard == "3spades") {
			$(".3spades").text("present");
		}
		if(testCard == "2spades") {
			$(".2spades").text("present");
		}
	}
}

function load() {
	deck = getDeck();
	shuffle();
	renderDeck();
}

window.onload = load;

