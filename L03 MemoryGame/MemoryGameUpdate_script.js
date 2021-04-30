"use strict";
var MemoryGameUpdate;
(function (MemoryGameUpdate) {
    //Variables
    let numPairs;
    let cardContent = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"];
    let cardArray = [];
    let cardsOpen = 0;
    let cardsOpenArray = [];
    let checkRest = [];
    // game start
    window.addEventListener("load", startGame);
    function startGame() {
        let startMemory = document.querySelector(".start");
        startMemory.addEventListener("click", main);
    }
    // FormData with different elements
    let formData;
    let size;
    let backGColor;
    let backSColor;
    let fontColor;
    let fontStyle;
    //cards are created, given attributes ()  
    function createCard(_cardContent) {
        let card = document.createElement("div");
        card.innerHTML = "<p>" + _cardContent + "</p>";
        card.classList.add("card");
        card.classList.add("hidden");
        cardArray.push(card);
        checkRest.push(card);
        card.addEventListener("click", clickHandler);
        // Size of cards
        card.style.width = size + "px";
        card.style.height = size + "px";
        // user can change background
        if (backGColor) {
            card.style.backgroundColor = backGColor.toString();
        }
        // user can change color of cards
        if (backSColor) {
            card.style.background = backSColor.toString();
        }
        // user can change color of Font
        if (fontColor) {
            card.style.color = fontColor.toString();
        }
        // Choose font type
        if (fontStyle) {
            card.style.fontFamily = fontStyle.toString();
        }
    }
    function clickHandler(_event) {
        let target = _event.target;
        if (target.classList.contains("card")) {
            cardsOpen++;
            if (!(cardsOpen > 2) && target.classList.contains("hidden") && target != cardsOpenArray[0]) {
                if (target.classList.contains("hidden")) {
                    target.classList.remove("hidden");
                    target.classList.add("open");
                    cardsOpenArray.push(target);
                }
            }
            else {
                cardsOpen--;
            }
            if (cardsOpen == 2) {
                setTimeout(compareCards, 500);
            }
        }
    }
    // compare
    function compareCards() {
        if (cardsOpenArray[0].innerHTML == cardsOpenArray[1].innerHTML) {
            for (let i = 0; i < 2; i++) {
                cardsOpenArray[i].classList.remove("open");
                cardsOpenArray[i].classList.add("taken");
            }
            checkRest.splice(0, 2);
        }
        else {
            for (let i = 0; i < cardsOpenArray.length; i++) {
                cardsOpenArray[i].classList.remove("open");
                cardsOpenArray[i].classList.add("hidden");
            }
        }
        cardsOpenArray = [];
        cardsOpen = 0;
        checkWin();
    }
    function checkWin() {
        if (checkRest.length == 0) {
            alert("The Game ended. You won!");
        }
    }
    //Shuffle cards in Array
    // tslint:disable-next-line: no-any
    function shuffleArray(_array) {
        for (var i = _array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = _array[i];
            _array[i] = _array[j];
            _array[j] = temp;
        }
        return _array;
    }
    // show cards in Html
    function main(_event) {
        let fieldset = document.querySelector(".formular");
        if (fieldset.classList.contains("visible")) {
            fieldset.classList.remove("visible");
            fieldset.classList.add("is-hidden");
        }
        formData = new FormData(document.forms[0]);
        console.log(formData);
        size = Number(formData.get("Slider"));
        backGColor = formData.get("BGColor");
        backSColor = formData.get("BSColor");
        fontColor = formData.get("FColor");
        fontStyle = formData.get("Radiogroup");
        // stepper response
        let pairOfCards = formData.get("Stepper");
        if (pairOfCards) {
            numPairs = Number(pairOfCards);
        }
        else {
            numPairs = 5;
        }
        //cards are created
        for (let i = 0; i < numPairs; i++) {
            createCard(cardContent[i]);
            createCard(cardContent[i]);
        }
        //array gets shuffle
        shuffleArray(cardArray);
        for (let i = 0; i < cardArray.length; i++) {
            let playerbox = document.getElementById("playerbox");
            playerbox.appendChild(cardArray[i]);
        }
    }
})(MemoryGameUpdate || (MemoryGameUpdate = {}));
//# sourceMappingURL=MemoryGameUpdate_script.js.map