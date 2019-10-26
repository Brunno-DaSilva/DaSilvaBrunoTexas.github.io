/*
Title:     Memory Game Fruits
Author:    Bruno DaSilva
*/

//array with an object of cards
let cards = [
  {
    name: "pineapple",
    id: "1",
    cardImage: "images/fruit-02.png"
  },
  {
    name: "pineapple",
    id: "1",
    cardImage: "images/fruit-02.png"
  },
  {
    name: "watermelon",
    id: "2",
    cardImage: "images/fruit-03.png"
  },
  {
    name: "pineapple",
    id: "2",
    cardImage: "images/fruit-03.png"
  }
];

//empty array to hold user entrances
let cardsInPlay = [];

//Slide 6-9 Drwan the board and create the image elements

let createBoard = function() {
  //creat the Function and loop in the Image Elements

  for (let i = 0; i < cards.length; i++) {
    //  for each image element
    let cardElement = document.createElement("img");

    // Setting the back-edn of the card
    cardElement.setAttribute("src", "images/fruit-05.png");

    // setting the attribute to the data-id and index
    cardElement.setAttribute("data-id", i);

    // add an event listener to call the flipCard Function
    cardElement.addEventListener("click", flipCard);

    // Lastly, append the card element to the game-board ID
    document.getElementById("game-board").appendChild(cardElement);
  }
};

//flip cards function to display card once it is clicked

let flipCard = function() {
  //Slide 11: Get the data attribute of the card clicked by the user
  let cardId = this.getAttribute("data-id");

  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute("src", cards[cardId].cardImage);
  console.log("User flipped " + cards[cardId].rank);

  if (cardsInPlay.length === 2) {
    checkForMatch();

    cardsInPlay = [];
  }
};

//Fucntion to check user's choice
let checkForMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Not a Match, please try again.");
  }
};

//Reload the browser to initiate a new game

function resetBrowser() {
  return window.location.reload();
}

//Slide 10: Adding CreateBoard() Function
createBoard();
