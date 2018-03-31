// $( document ).ready(function() {
//   /*

//**TODO
//set delay so that player can't click on additional cards before the program has displayed the correct output for previous clicks
//stop player from clicking on same card twice

const deckList = document.querySelector('.deck'); // function start()

let parentDeck = document.querySelector('ul.deck');

let numberOfMatchedPairs = 0; //used in function addToMatchedList

const starList = document.querySelector('.stars');

 const stars = document.querySelector('.stars');	

	 //reset counters
	let count= 0; //initialise counter addOneToCount()
	let cardCount = 0; //this gets reset after every two attempts to match cards

	let matchIndex1 = 0;
	let matchIndex2 = 0;

	let moves = 0;
	 //clear contents of arrays used to compare cards
	let exposed=[];
	let matched=[];	
	let numberOfStars = 3;
	let duration;
	let durationMinutes;

			let startTime = new Date().getTime();
	

		
//Declare modal before reload() call as part of the reload function hides the modal
// Get the modal
var modal = document.getElementById('modal-standard');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
const playButton = document.getElementsByClassName('.play-again');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//When the user finishes the game, open the modal
function openModal(){
	    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

const modalBody = document.querySelector('.modal-body');
//When the user clicks on the play-again button..
const playAgainSam = document.querySelector('.play-again');
playAgainSam.addEventListener('click',restart,false);
const quitGame = document.querySelector('.quit-game');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// When the user clicks on the quit game button, close the modal
quitGame.onclick = function() {
    modal.style.display = "none";
	
}

//modal adapted from https://www.w3schools.com/howto/howto_css_modals.asp 
//also studied https://social.msdn.microsoft.com/Forums/office/en-US/8a739fd2-2a9d-4720-a59d-854ca4452d0c/javascript-confirm-popup-yes-no-button-instead-of-ok-and-cancel?forum=sharepointdevelopmentprevious

const restartGame = document.querySelector('.restart');
restartGame.addEventListener('click',restart);

function restart(){
	//refresh page
	window.location.reload(); 	//could also use history.go(0);
}

const halfDeck = ["anchor", "bicycle", "bolt", "bomb", "car", "cube", "diamond", "leaf"]
let startingDeck = halfDeck.concat(halfDeck);

//  * Create a list that holds all of your cards

 function reload(){
	//close the modal
	modal.style.display = "none"; 
	//remove cards from screen
	deckList.innerHTML = '';
	//reset counters
	let count= 0; //initialise counter addOneToCount()
	let cardCount = 0; //this gets reset after every two attempts to match cards
	let numberOfMatchedPairs = 0;
	let matchIndex1 = 0;
	let matchIndex2 = 0;
	let numberOfStars = 3;
	let moves = 0;
	 //clear contents of arrays used to compare cards
	let exposed=[];
	let matched=[];	
	matched.splice(0,matched.length); 

	//deal out a fresh round of cards
	start();
	 
 }

 	//boolean flag used for starting timer once first card is clicked
	let gameInProgress = false;
	
 //keep track of how many attempts have been made to pair the cards
function addOneToCount(){
	count++;
	
	//start the clock when the first card is clicked
	if ((count === 1) && (gameInProgress === true)){
		startTime = Date.now();
		clock();
	}
	
	//update the count every time a pair have been clicked
	let numberOfMoves =  document.querySelector('.moves');
	//adjust display depending on number of moves ( 0 moves, 1 move, 2 moves, ...)
	switch(numberOfMoves){
		case 1:
		numberOfMoves.innerHTML = count + ' move';
		break;
		default:
		numberOfMoves.innerHTML = count + ' moves';	
	}
  
	 //if player has taken too many moves, remove a star from the rating
	 switch(count) {
		case 15:
			numberOfStars = 2;
			removeStar(numberOfStars);
			break;
		case 25:
			numberOfStars = 1;
			removeStar(numberOfStars);
			break;
		default:
	} 



		return count;
}

function removeStar(numberOfStars){
	//rate the player's performance, the more stars the better
	//start with three stars every time
	//TODO add a class in CSS that "blackens" a star
	switch (numberOfStars){
		case 2:
			stars.innerHTML = '<li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li>';
		break;
		case 1:
			stars.innerHTML = '<li><i class="fa fa-star"></i></li>';
		break;
		default:
	}

}

//create a list of cards that have been turned face up
//this list should have between zero and two elements

//create a function to add the clicked card to the "exposed" list       //add the appropriate card to the exposed list
function addToExposedList(index){
	exposed.push(startingDeck[index]);
}

function addToMatchedList(card){
    matched.push(card);
	//keep tabs of how many pairs have been matched.
	numberOfMatchedPairs++;
	return numberOfMatchedPairs;
}

function lockFirstCard(firstCard){
  firstCard.classList.add('match');
}

//show the open card's icon for the first card in any pair
function lockCard(card){
	
	let currentCards = deckList.getElementsByClassName('current');
	//remove 'current' class from both cards
	currentCards.item(0).classList.remove('current');
	currentCards.item(0).classList.remove('current');
}

// the cards do match, lock the cards in the open position
function lockCards(clickedItemTitle){
	// check for cards with the correct title
	// change the class for both cards to "match"

	// use getElementsByClassName to find both matching items
	let matchedCards = deckList.getElementsByClassName('show');


	//careful, will this only work with the first pair?
	//does matchedCards change the order its items are stored in each time?
	matchIndex1 = (matchedCards.length) - 1;
	matchIndex2 = (matchedCards.length) - 2;
	console.log("match index 1 and 2 - " + matchIndex1 + "  " + matchIndex2);
	matchedCards.item(matchIndex1).classList.add('match');
	// matchedCards.item(matchIndex1).classList.add('open');
	matchedCards.item(matchIndex2).classList.add('match');
	// matchedCards.item(matchIndex2).classList.add('open');
	//      console.log("tried to add 'match', result - " + matchedCards);

}

//create a list of cards that have been paired up
//once all eight pairs have been matched up, we will launch the "congratulations" modal
//if there is a match, then we need to change the class of the matched cards to "match", and also remove them from the "exposed" list.


//create a function to test whether the clicked card matches an exposed card

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

     // While there remain elements to shuffle...
     while (currentIndex !== 0) {

       // Pick a remaining element...
        //The Math.floor() function returns the largest integer less than or equal to a given number.
        //Math.random provides a random integer between 0 to 1
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;

}



/**
//@description shuffle the pack and display all cards face down
//             create an element, then use a loop and .insertAdjacentHTML to add many similar elements to the DOM
//@constructor
//@parameters decklist - the new element
            startingDeck - a list of all the cards in the deck
*/

function start(){
	//shuffle the list of cards
	startingDeck = shuffle(startingDeck);
  
	//loop through each card and create its HTML
     for(i=0; i<startingDeck.length; i++){

       //give each <li> element a value ( such as 0,1,2,...) that ties in with the index of the startingDeck.
       //this will allow us to find the appropriate card name/icon when the cards are clicked at random later

       deckList.insertAdjacentHTML('beforeend', '<li class="card " value = "' + i +'""><i class="fa fa-'+ startingDeck[i] + '""</i></li>');
    }

 }

//run event handler if any cards are clicked
parentDeck.addEventListener('click', playGame, false);


 //display the card's symbol
function playGame(evt){

    if (evt.target !== evt.currentTarget){ //check that the parent itself hasn't been clicked
	    // The target of the event is represented by evt.target, and the target element the event listener is attached to is represented by evt.currentTarget. By simply checking that these values not be equal, you can ensure that the event handler doesn't react to events fired from the parent element that you don't care about.
		//stop double-clicking causing problems
		evt.preventDefault();
		//allow timer to run
		gameInProgress = true;

        //try to use various attributes of the clicked card
        let clickedItemID = evt.target.id ;
        let clickedItemClass = [];
        clickedItemClassList = evt.target.classList;
        let clickedItemValue = evt.target.value ;
        let clickedItemTextContent = evt.target.textContent ;
        let clickedItemTitle = evt.target.title ;
        cardCount++;
        let card = evt.target;
        showCard(card);
        let listOfClasses = evt.target.classList;

        const index = evt.target.value;
        const clickedCard = startingDeck[index];

		//add a "current" and "match" class to both cards, will remove these classes if it's not an identical pair
		card.classList.add('current', 'match');


        //add the card to a *list* of "open" cards
        addToExposedList(index);

        //if the exposed list already had another card, check to see if the two cards match
			if ((exposed.length % 2 === 0) && (exposed[0] === exposed[1])){
				//reset cardCount, only check two cards at a time
				cardCount = 0;
				//if both cards are the same

				//add it to the matched list
				addToMatchedList(evt.target); //evt.target was "card"
				lockCard(card);

				// clear the exposed list
				exposed.splice(0,exposed.length); 
				addOneToCount();
			}
				  
			//if the cards do not match, remove the cards from the list and hide the card's symbol 
			else if(exposed.length === 2){
				//use 'current' class to select the cards we want to turn face down
				turnFaceDown(card);
				//remove both cards from "exposed"
				exposed.splice(0,exposed.length); 
				addOneToCount();
				}

			if(numberOfMatchedPairs === 2){//for testing only, should be 8
				//game over, stop the clock
				stopTimer();
				//declare variables for modal
				const modalHead = document.querySelector('.salutation');
				modalHead.innerHTML = 'Game completed - well done!';
				const modalFoot = document.querySelector('.statistics');
				modalFoot.innerHTML = 'You completed the game in ' + durationMinutes + ' minutes and ' + duration + ' seconds.<br></br>You finished the game with ' + numberOfStars + ' stars.';
				//When the user finishes the game, open the modal
				openModal();
				//reset the game after showing the user his/her stats
				numberOfMatchedPairs = 0;
				count = 0;
				durationMinutes = 0;
				duration = 0;
			}
	evt.stopPropagation(); //stop running the event handler for the card click
	}
} //end of function playGame

let intervalID; //no need for "=0"
	
const timeTaken = document.querySelector('.time-taken');
function clock(){
	if (gameInProgress){
	intervalID = setInterval(timer,1000);
	}
}

function timer(){	
	let finishTime = new Date().getTime();
	duration = Math.floor(((finishTime-startTime) % (1000*60))/1000);
	durationMinutes = Math.floor(((finishTime-startTime) % (1000*60*60))/(1000*60));
	//show time taken so far
	timeTaken.innerHTML = durationMinutes + 'm ' + duration + 's';
}

function stopTimer(){
	let timeMinutes = durationMinutes;
	let timeSeconds = duration;
	//change "clock running" flag
	gameInProgress = false;
	clearInterval(intervalID);	
}

//clock adapted from https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval

function showCard(card){
	//turn the card face up
	card.classList.add('open');
	//show the open card's icon
	card.classList.add('show');
}

function turnFirstCard(firstCard){
	firstCard.classList.remove('open', 'show', 'match');
}

function turnFaceDown(card){
	//slight delay on turning cards face down
	setTimeout(function(){

	let currentCards = deckList.getElementsByClassName('current');
	//remove both cards from show, remove 'current' class from both cards
	currentCards.item(0).classList.remove('open', 'show', 'match', 'current');
	currentCards.item(0).classList.remove('open', 'show', 'match', 'current');
    }, 599); //599milliseconds
}

start();

