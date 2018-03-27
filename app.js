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

	let duration;
	let durationMinutes;
	let startTime = new Date().getTime();
		
//Declare modal before reload() call as part of the reload function hides the modal
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
const playButton = document.getElementsByClassName('.playAgain');

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
//When the user clicks on the playAgain button..
const playAgainSam = document.querySelector('.playAgain');
playAgainSam.addEventListener('click',restart,false);
const quitGame = document.querySelector('.quitGame');

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

let startingDeck = ["anchor", "bicycle", "bolt", "bomb", "car", "cube", "diamond", "leaf", "anchor", "bicycle", "bolt", "bomb", "car", "cube", "diamond", "leaf"];

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

	let moves = 0;
	 //clear contents of arrays used to compare cards
	let exposed=[];
	let matched=[];	
	matched.splice(0,matched.length); 

	//deal out a fresh round of cards
	start();
	 
 }
 
 //keep track of how many attempts have been made to pair the cards
function addOneToCount(){
	count++;
	//update the count every time a pair have been clicked
	let numberOfMoves =  document.querySelector('.moves');
	numberOfMoves.innerHTML = count;
	console.log("addOneToCount function - count is " + count);
  
	 //if player has taken too many moves, remove a star from the rating
	 switch(count) {
		case 3:
			numberOfStars = 2;
			removeStar(numberOfStars);
			break;
		case 5:
			numberOfStars = 1;
			removeStar(numberOfStars);
			break;
		case 7:
			numberOfStars = 0;
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
		case 0:
			stars.innerHTML = '';
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
 // *   - shuffle the list of cards using the provided "shuffle" method below
 console.log("Unshuffled startingDeck " + startingDeck);
    startingDeck = shuffle(startingDeck);
	
	 // game starting time
	//let startTime = new Date().getTime();
	alert("start time is " + startTime);
  
 // *   - loop through each card and create its HTML
     for(i=0; i<startingDeck.length; i++){
       //commented out for testing only
       console.log(startingDeck[i]);//ok

       //give each <li> element a value ( such as 0,1,2,...) that ties in with the index of the startingDeck.
       //this will allow us to find the appropriate card name/icon when the cards are clicked at random later

       //create an element
          // const freshCard = document.createElement('li');
       //then use "appendChild" to add it to the DOM
          // deckList.appendChild(freshCard);
          // let newList =
          //also add textContent, hopefully will help later
          //adding a title may be even better  -
       deckList.insertAdjacentHTML('beforeend', '<li class="card " value = "' + i + '"" title="'+ startingDeck[i] + '""'+'>'+ startingDeck[i] + '<i class="fa fa-'+ startingDeck[i] + '""</i></li>');

       // deckList.insertAdjacentHTML('beforeend', '<li class="card " value = "' + i + ' "><i class="fa fa-'+ startingDeck[i] + '""</i></li>'); //working

       // deckList.appendChild();
       // deckList.append('<li class="card"><i class="fa fa-"'+ startingDeck[i] + '</i></li>');
       //would like to overwrite the existing text in the deck <ul> as the click function only seems to work on the original cards

   	//$deck.append($('<li class="card"><i class="fa fa-' + cards[i] + '"></i></li>'))
    }
 }
/*
 *   - add each card's HTML to the page
 */


/*

// @description Shuffle function from http://stackoverflow.com/a/2450976
// Used like so
    //var arr = [2, 11, 37, 42];
    //arr = shuffle(arr);
    //console.log(arr);
@constructor
@parameters   array - the pack of cards to be shuffled (startingDeck)
              currentIndex - the index of the current card
              temporaryValue - a holding value for swapping
              randomIndex - a random index to swap with the current index
*/


// add click event listener to a card
// const clickedCard = document.querySelector('button.testButton'); // test works on testButton

// const clickedCard = document.querySelector('li.card'); // test works on first card only- sends message to console
// const clickedCard = document.querySelectorAll('.card');

// clickedCard.addEventListener('click', cardClicked);

// function displaySymbol(evt.target) {
//   //turn the card face up
//   evt.target.classList.add('open');
//   //show the open card's icon
//   evt.target.classList.add('show');
// }




//run event handler if any cards are clicked
// let parentDeck = document.querySelector('ul.deck');
parentDeck.addEventListener('click', playGame, false);//why have "false" here?


 //*  - display the card's symbol (put this functionality in another function that you call from this one)
function playGame(evt)
{
      if (evt.target !== evt.currentTarget)  //check that the parent itself hasn't been clicked
      {    // The target of the event is represented by evt.target, and the target element the event listener is attached to is represented by e.currentTarget. By simply checking that these values not be equal, you can ensure that the event handler doesn't react to events fired from the parent element that you don't care about.
	  //stop double-clicking causing problems
	  evt.preventDefault();
        // let clickedItem = evt.target.id;
        //try to use various attributes of the clicked card
        let clickedItemID = evt.target.id ;
        let clickedItemClass = [];
        clickedItemClassList = evt.target.classList;
        let clickedItemValue = evt.target.value ;
        let clickedItemTextContent = evt.target.textContent ;
        let clickedItemTitle = evt.target.title ;
        // console.log(" clickedItemID is " + clickedItemID);
        console.log("Original clickedItemClass is " + clickedItemClassList);
        console.log("clickedItemValue is " + clickedItemValue); //works // not now!
        // console.log("clickedItemTextContent is " + clickedItemTextContent);
        console.log("clickedItemTitle is " + clickedItemTitle);
        // console.log(" is " + evt.target.);
                          // console.log("Before increment, card count is " + cardCount);
        cardCount++;

                          console.log("After increment, cardCount is " + cardCount);
                                                    console.log("After increment, count is " + count);
        let card = evt.target;
        showCard(card);
        // clickedItem.className = "card open"; // doesn't seem to work
        // document.getElementById(clickedItem).class = "card open";
        console.log(evt.target); //testing only
        // clickedItem.
        let listOfClasses = evt.target.classList;
        console.log("list of classes - " + clickedItemClassList);//testing only

        const index = evt.target.value;
        const clickedCard = startingDeck[index];
        console.log("clickedCard is "+clickedCard);

        //this changes the last clicked card to "matched"
        //should make all cards go green when clicked, but doesn't seem to work - need getElementByClassName here?
        // clickedItemClassList.add('match');
//        card.classList.add('match');

//add a "current" and "match" class to both cards, will remove these classes if it's not an identical pair
card.classList.add('current', 'match');


        // - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
        // add the appropriate card to the exposed list
        addToExposedList(index);
        // exposed.push(startingDeck[index]);
        // console.log("card added to exposed list is "+ startingDeck[index]+ "\n Exposed list now contains " + exposed);


        //keep a record of the first card in the exposed list
        //"logic" workaround - set the class of the first card to "match"
        //then, when you compare two cards, the first card already has a class of "match"

        // if (exposed.length = 1){
        //       clickedItemClassList.add('match');
        //                 console.log(" exposed.length is _1_ exposed[0] is " + exposed[0]);

        //   let firstSymbol = clickedItemTitle;
        //   //need to keep a record of its value
        //   let firstValue = clickedItemValue;

        // console.log("first exposed card is a "+ firstSymbol);
        //store the first card of every pair
                                                                                // if ((exposed.length % 2) !== 0){ //modulus denoted by %
                                                                                // console.log(exposed.length % 2);
                                                                                // let firstCard = card;
                                                                                // //add a "paired" class to both cards
                                                                                // firstCard.classList.add('paired1st');
                                                                                // lockFirstCard(firstCard);
                                                                                // }

        // *  - if the exposed list already had another card, check to see if the two cards match
              // if (cardCount === 2){
                  if ((exposed.length % 2 === 0) && (exposed[0] === exposed[1])){
                  console.log("exposed.length is " + exposed.length);
                  //reset cardCount, only check two cards at a time
                  cardCount = 0;
                  console.log("Pair match, card count reset to " + cardCount);
                  // }
                  //if both cards are the same
                  // else if (exposed[0] === exposed[1]){
                  //getting silly results here - both arguments above are returning as undefined, I think
                  console.log("exposed[0],[1] is " + exposed[0] +"    " + exposed[1]);
                  // console.log("exposed[1] is " + exposed[1]);
                  // console.log("A " + clickedItemTitle + ", heck yeah, we've seen this before");
                  //  console.log("exposed.length is " + exposed.length);//test only
                  //check if the clicked card matches an already exposed card
                  // if (exposed.includes(clickedCard)){
                  // *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
                  // let index = evt.target.value;
                  // let clickedCard = startingDeck[index];
                  console.log("A " + evt.target.title + ", heck yeah, we've seen this before"); //evt.target.title was clickedItemTitle
                  // let card = evt.target;

                  //add it to the matched list
                  addToMatchedList(evt.target); //evt.target was "card"
                  //add a "paired" class to both cards
                  //firstCard.classList.add('paired1st');
                                    card.classList.add('paired2nd');
//                  console.log("card and firstCard classes - " + card.classList + ", " + firstCard.classList);
                  lockCard(card);
            //      lockCard(card);
                  //change the class to match for both matching Cards
                  //this changes the last clicked card to "matched"
        //          clickedItemClassList.add('match');
    //              lockCards(evt.target.title); //evt.target.title was clickedItemTitle
                  console.log("matching pair, exposed.length is " + exposed.length);
                  // clear the exposed list
                 exposed.splice(0,exposed.length); //removed for testing only
                  console.log("matching pair, exposed list cleared, exposed.length is " + exposed.length);
				          addOneToCount();
                  // exposed = [];
                  //exposed.length = 0;
                  }
   // + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
                                    else if(exposed.length === 2)
                                    { // not matching, turn both cards face down
                                      //use 'current' class to select the cards we want to turn face down
										turnFaceDown(card);
										//remove both cards from "exposed"
										exposed.splice(0,exposed.length); 
										addOneToCount();
                                    }



	if(numberOfMatchedPairs === 2){ //two for testing purposes only, should be eight
	console.log("number of matched pairs is " + numberOfMatchedPairs);
											alert('Game over, well done!\nYou completed the game in ' + count + ' moves.');
		 // game finishing time

// let finishTime = new Date().getTime();
// alert("finish time is " + finishTime);
// duration = Math.floor(((finishTime-startTime) % (1000*60))/1000);
// durationMinutes = Math.floor(((finishTime-startTime) % (1000*60*60))/(1000*60));
// alert(duration + ' seconds');	
											// popup.innerHTML = '<p>Bingo!</p>';
											//game over, stop the clock
											stopTimer();
											alert('Game over, well done!\nYou completed the game in ' + durationMinutes + ' minutes and ' + duration + 'seconds.');
											//declare variables for modal
const modalHead = document.querySelector('.modalHeader');
modalHead.innerHTML = 'Game completed - well done!';
const modalFoot = document.querySelector('.modalFooter');
modalFoot.innerHTML = 'You completed the game in ' + durationMinutes + ' minutes and ' + duration + ' seconds.<br></br>You finished the game with ' + numberOfStars + ' stars.';
//When the user finishes the game, open the modal
openModal();
//reset the game after showing the user his/her stats
numberOfMatchedPairs = 0;
count = 0;
durationMinutes = 0;
duration = 0;
/* 											// if (window.confirm("Do you really want to leave?")) { 
											// window.open("exit.html", "Thanks for Visiting!");
											// }
											// if (window.confirm('Game over, well done!\nYou completed the game in ' + count + ' moves.\n\nDo you want to play again?')) { 
											// // window.open(start(), "Thanks for playing!");
											// window.open(start(), "http://www.udacity.com");
											
											// let message = "Do you want to continue?";
											// showConfirmDlg(message); */
											}
	evt.stopPropagation(); //stop running the event handler for the card click
	}
} //end of function playGame

let intervalID; //needs =0?
clock();
const timeTaken = document.querySelector('.timeTaken');
function clock(){
	intervalID = setInterval(timer,1000);
	alert('clock function has been called call in JS');
}

function timer(){
		let finishTime = new Date().getTime();
		//alert("finish time is " + finishTime);
		duration = Math.floor(((finishTime-startTime) % (1000*60))/1000);
		durationMinutes = Math.floor(((finishTime-startTime) % (1000*60*60))/(1000*60));
		//alert(duration + ' seconds');
		//show time taken so far
		timeTaken.innerHTML = durationMinutes + 'm ' + duration + ' s';

}

function stopTimer(){
	let timeMinutes = durationMinutes;
	let timeSeconds = duration;
	clearInterval(intervalID);
	
}

//<input id="btnConfirm" type="button" value="Confirm" onclick="javascript:showConfirmDlg('Do you want to continue?');" />

// function showConfirmDlg(message)
// {
   // var returnValue = window.showModalDialog("dialog.html",message,"dialogHeight:150px;dialogWidth:200px");

   // if ( returnValue == 'yes' )
	// alert('Yes button is clicked in the dialog');
   // else
	// alert('No button is clicked in the dialog');
// }

function showCard(card){
  console.log("want to show card, passed " + card + " to showCard() function");
  //this returned a message
  // want to show card, passed [object HTMLLIElement] to showCard() function
  // displaySymbol(evt.target);
  //turn the card face up
  card.classList.add('open');
  //show the open card's icon
  card.classList.add('show');
  //show the open card's icon for the first card in any pair
  // card.classList.add('match');
       // deckList.insertAdjacentHTML('beforeend', '<li class="card " value = "' + i + '"" title="'+ startingDeck[i] + '""'+'>'+ startingDeck[i] + '<i class="fa fa-'+ startingDeck[i] + '""</i></li>');
}

function turnFirstCard(firstCard){
  firstCard.classList.remove('open', 'show', 'match');
}

function turnFaceDown(card){
        //slight delay on turning cards face down
         setTimeout(function(){
  // TODO: add to array with open elements span elements with class name 'open'
  // listOpenCards[noOfCards] = document.getElementsByClassName('open');
  //possibly similar to
         // let matchedCards = deckList.getElementsByClassName('show');
         // matchedCards.item(matchIndex1).classList.add('match');
  //       firstCard
//card.classList.remove('open');

let currentCards = deckList.getElementsByClassName('current');
//remove both cards from show, remove 'current' class from both cards
currentCards.item(0).classList.remove('open', 'show', 'match', 'current');
currentCards.item(0).classList.remove('open', 'show', 'match', 'current');

/*                                                                                 // let openCards = deckList.getElementsByClassName('card open show'); //note : this includes cards with (card open show match)
                                                                                // let matchedCards2 = deckList.getElementsByClassName('card open show match');
                                                                                // console.log("matched cards2" + matchedCards2);
                                                                                // // if (matchedCards.item(0).classList.includes('match')){console.log("there is a match");}
                                                                                // // openCards.item(0).class.remove('open'); //undefined
                                                                                // openCards.item(0).classList.remove('open', 'show', 'match');
                                                                                // openCards.item(0).classList.remove('open', 'show', 'match'); */
/*           //           openCards(0).class.remove('show');  //openCards is not a function
          //loop to replace matched cards
          // for (i=0; i<matchedCards2.length; i++){
          //           matchedCards2.item(i).classList.add('open', 'show', 'match');
                    // }
                    // openCards[0].class.remove('open'); //openCards[0].class is undefined
                    //           openCards[0].class.remove('show');
                    // var matches = element.getElementsByClassName('colorbox');
                    //
                    // while (matches.length > 0) {
                    //   matches.item(0).classList.add('hueframe');
                    //   matches[0].classList.remove('colorbox');
                    // } */


/*           // console.log(openCards);
          // console.log("matched cards2" + matchedCards2);
          // if cards are part of matching pair, then leave them as they are
          // if (find.openCards('match')){
            // console.log("matching pair, leave them be!");
          // }
          // else{
            // console.log("non-matching pair, begone!")  ;
          // }
          // remove the last two cards added to the exposed list

          // otherwise, remove the 'open' and 'show' classes
          // openCards.item(0).classList.remove('open');
         // openCards.item(0).classList.remove('open');
  				  // openCards.classList.remove('open'); //returns "undefined"
  // these next two lines turn the first two unmatched cards face down
// openCards.item(0).classList.remove('open','show');
// openCards.item(0).classList.remove('open','show');
                                       // openCards.item(-1).classList.remove('open','show');
                    // openCards.item(1).classList.remove('open');
                    // openCards.item(1).classList.remove('open');

                             // openCards[1].classList.remove('open');
                             // console.log(openCards);
          // for (const openCard of openCards){
          
          // }
  // clickedItemClassList.remove('match');
  // let firstCard = exposed[0].classList;
  // firstCard.classList.remove('match');
                                // let card = evt.target;
                                     // card.classList.remove('match'); //take "matched" green off all cards
  // card.classList.remove('show');

  // card.classList.remove('open'); //turn all cards face down
  // TODO:that only works for the second card, need improved logic

              // exposed.splice(0,exposed.length); //removed for testing only
// removed for testing only                            exposed.length = 0; */
        }, 599);

}

function exit(){
	alert('Thanks for playing!');
}
start();
exit();
//moved this block here to allow the click to work on the new cards but need to add the 'new' cards to the DOM to get over the problem
//run event handler if any cards are clicked
// let parentDeck = document.querySelector('ul.deck');
// parentDeck.addEventListener('click', playGame, false);//why have "false" here?
/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
// } //end of document.ready
