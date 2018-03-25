// $( document ).ready(function() {
//   /*
 const deckList = document.querySelector('.deck'); // function start()
let count= 0; //initialise counter addOneToCount()
let parentDeck = document.querySelector('ul.deck');
// let listExposed = [];
let cardCount = 0; //this gets reset after every two attempts to match cards
let exposed=[];
let matchIndex1 = 0;
let matchIndex2 = 0;
let matched=[];

//create a list of cards that have been turned face up
//this list should have between zero and two elements
// let exposed=[];

//  * Create a list that holds all of your cards

 let startingDeck = ["anchor", "bicycle", "bolt", "bomb", "car", "cube", "diamond", "leaf", "anchor", "bicycle", "bolt", "bomb", "car", "cube", "diamond", "leaf"]
//  */
/*
 * Display the cards on the page
*/
 //create a fresh grid when the "Refresh" button is clicked
 //get $ is not defined error message with this line, investigate later
             // $(restart.on("submit", function(evt){
             //   //prevent the default action (the form being submitted) from taking place
             //    evt.preventDefault();
             //    // startingDeck();
             //    // refresh the page
             //    location.reload();
             // }));

 // function startingDeck() {
 //    // //could create a larger grid at a later date
 //    // let inputWidth = $("#input_width").val();
 //    // let inputHeight = $("#input_height").val();
 //    const inputWidth = 4;
 //    const inputHeight = 4;
 //
 //    //clear existing grid
 //   grid.children().remove();
 //
 //   //create table with nested FOR loops
 //   for (let row=0; row < inputHeight; row++)
 //   {grid.append("<li>added row</li>");
 //       for (let col=0; col < inputWidth; col++)
 //       {grid.children().last().append("<li>blobby blobby blobby</li>");}
 //   }
 //   //no need for "display table" code here
 // };


//create a function to add the clicked card to the "exposed" list       //add the appropriate card to the exposed list
      function addToExposedList(index){
      exposed.push(startingDeck[index]);
      console.log("card added to exposed list is "+ startingDeck[index]+ "\n Exposed list now contains " + exposed);

      // console.log("exposed[0] is " + exposed[0]);
      //   console.log("exposed[1] is " + exposed[1]);

        // TODO: add to array with open elements span elements with class name 'open'
//listOpenCards[noOfCards] = document.getElementsByClassName('open');
// let testNumber = 0;
// listExposed[testNumber] = document.getElementsByClassName('open');
// listExposed[testNumber].classList.add('match'); //wip

      //   exposed.push(evt.target);
      //   console.log("New card is " + event.target);
      }

function addToMatchedList(card){
      matched.push(card);
            //        card.classList.add('match');

}

      function cardClicked(){
          console.log('A card was clicked!');
      }

      // function lockCards(index){
      //   //matched cards, lock face up, remove from exposed list
      //   // evt.target.class = "match";
      // }
function lockFirstCard(firstCard){
  firstCard.classList.add('match');
}
function lockCard(card){
  // let elly = deckList.getElementByClassName('match');
  // let cardPaired = elly.getElementByClassName('paired');
  // console.log("cardPaired is " + cardPaired);
  //show the open card's icon for the first card in any pair

// card.classList.add('match');
// //  card.classList.addClass('match');
//  console.log("card is " + card);
         // let matchedCards2 = deckList.querySelectorAll('.match');
         // matchedCards2.item(matchIndex1).classList.add('match');

         let currentCards = deckList.getElementsByClassName('current');
         //remove 'current' class from both cards
         currentCards.item(0).classList.remove('current');
         currentCards.item(0).classList.remove('current');
       }
      // the cards do match, lock the cards in the open position
function lockCards(clickedItemTitle){
// check for cards with the correct title
// change the class for both cards to "match"
let tit = clickedItemTitle;
let testArray = document.querySelectorAll('[title=tit]'); //returning a NodeList?
console.log(testArray.length);
//testArray.classList.add('match');
// This example returns a list of all <div> elements within the document with a class of either "note" or "alert":

// var matches = document.querySelectorAll("div.note, div.alert");
  //                            deckList.find('.open').addClass('match');
// let matches = document.querySelectorAll('match');
// matches.classList.add('match');
// console.log(matches.length);
          // use getElementsByClassName to find both matching items
         let matchedCards = deckList.getElementsByClassName('show');
         console.log("matchedCards length is " + matchedCards.length + matchedCards);
//now want to change these elements so that their class includes "match"

// //loop to matched cards
// for (i=0; i<matchedCards2.length; i++){
//           matchedCards2.item(i).classList.add('open', 'show', 'match');
//           }



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

          // let matchedCards = HTMLCollection;
          // matchedCards = deckList.getElementsByClassName('card');
//          matchedCards.classList.add('match');
      // console.log("first exposed card is a "+ firstSymbol);
          // evt.target.classList.add('match');
          // console.log("clickedCard classList is " + clickedCard.classList);
          // // let listOfClasses = evt.target.classList;
          //     let listOfClasses2 = clickedCard.classList;
          // console.log(" lockCards list of classes2" + listOfClasses2);//testing only

// let matchedDeck = document.getElementsByClassName('deck');

          // let matchedCards = deckList.getElementsByClassName('show');
          // matchedCards.classList.add('match');
          // Here, an attribute selector is used to return a list of the list items contained within a list whose ID is "userlist" which have a "data-active" attribute whose value is "1":

      //     var container = document.querySelector("deckList");
      //     // var matches = container.querySelectorAll('li[class="show"]'); //"container is null"
      //     var matches = container.querySelectorAll('li-[class="show"]');   //"container is null"
      // matches.classList.add('match');


          // let matchedCards = [];
          //
          // matchedCards.push(exposed[0]);
          // matchedCards.push(exposed[1]);



      }

//create a list of cards that have been paired up
//once all eight pairs have been matched up, we will launch the "congratulations" modal
// let matched=[];
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
// addEventListener.on('click',function clickCard()){
          // // adds a listener for clicks, to run the `myEventListeningFunction` function
          // document.addEventListener('click', myEventListeningFunction);


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
    console.log("shuffled deck - " + startingDeck); //working, startingDeck has been shuffled
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

function addOneToCount(){
  count++;
  return count;
}


//run event handler if any cards are clicked
// let parentDeck = document.querySelector('ul.deck');
parentDeck.addEventListener('click', playGame, false);//why have "false" here?


 //*  - display the card's symbol (put this functionality in another function that you call from this one)
function playGame(evt)
{
      if (evt.target !== evt.currentTarget)  //check that the parent itself hasn't been clicked
      {    // The target of the event is represented by evt.target, and the target element the event listener is attached to is represented by e.currentTarget. By simply checking that these values not be equal, you can ensure that the event handler doesn't react to events fired from the parent element that you don't care about.
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
        addOneToCount();
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
                  // exposed = [];
                  //exposed.length = 0;
                  }
   // + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
                                    else if(exposed.length === 2)
                                    { // not matching, turn both cards face down
                                      //use 'current' class to select the cards we want to turn face down
                                                                                // firstCard.classList.add('current');
                                                                                // card.classList.add('current');
                                                                                // turnFaceDown(firstCard);
                                          turnFaceDown(card);
                                            //remove both cards from "exposed"
                   exposed.splice(0,exposed.length); //removed for testing only
                  console.log("pair don't match, exposed list cleared, exposed.length is " + exposed.length);
                                    }

        }
        // else{
        //   //if the two exposed cards don't match, turn them face down
        //   //evt.target.classList.remove("show");
        //   evt.target.className = "card";


         //is this the first card to be clicked?
        // if (exposed.length === 0){
        //   //yes, first card. Keep the card and index information for comparing with the second
        //   // exposed.push(clickedCard);
        //   let firstExposedCard = clickedCard; //this loses the "index" information
        //   let firstExposedCardIndex = index;
        // }

        //add the card to the exposed list
        // addToExposedList(evt.target);

        // clickedItem.classList.add("open");
        // clickedItem.style.backgroundColor("green");
      //} //if (evt.target !== evt.currentTarget)
      evt.stopPropagation(); //stop running the event handler for the card click

} //end of function playGame



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

                                                                                // let openCards = deckList.getElementsByClassName('card open show'); //note : this includes cards with (card open show match)
                                                                                // let matchedCards2 = deckList.getElementsByClassName('card open show match');
                                                                                // console.log("matched cards2" + matchedCards2);
                                                                                // // if (matchedCards.item(0).classList.includes('match')){console.log("there is a match");}
                                                                                // // openCards.item(0).class.remove('open'); //undefined
                                                                                // openCards.item(0).classList.remove('open', 'show', 'match');
                                                                                // openCards.item(0).classList.remove('open', 'show', 'match');
          //           openCards(0).class.remove('show');  //openCards is not a function
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
                    // }


          // console.log(openCards);
          // console.log("matched cards2" + matchedCards2);
          //if cards are part of matching pair, then leave them as they are
          // if (find.openCards('match')){
          //   console.log("matching pair, leave them be!");
          // }
          // else{
          //   console.log("non-matching pair, begone!")  ;
          // }
          //remove the last two cards added to the exposed list

          //otherwise, remove the 'open' and 'show' classes
          // openCards.item(0).classList.remove('open');
  //        openCards.item(0).classList.remove('open');
  				  // openCards.classList.remove('open'); //returns "undefined"
  //these next two lines turn the first two unmatched cards face down
// openCards.item(0).classList.remove('open','show');
// openCards.item(0).classList.remove('open','show');
            //                            openCards.item(-1).classList.remove('open','show');
                    // openCards.item(1).classList.remove('open');
                    // openCards.item(1).classList.remove('open');

                      //        openCards[1].classList.remove('open');
                          //    console.log(openCards);
          // for (const openCard of openCards){
          //
          // }
  // clickedItemClassList.remove('match');
  // let firstCard = exposed[0].classList;
  // firstCard.classList.remove('match');
                                // let card = evt.target;
//                                      card.classList.remove('match'); //take "matched" green off all cards
  // card.classList.remove('show');

  // card.classList.remove('open'); //turn all cards face down
  //TODO:that only works for the second card, need improved logic

              // exposed.splice(0,exposed.length); //removed for testing only
//removed for testing only                            exposed.length = 0;
        }, 599);

}


start();
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
