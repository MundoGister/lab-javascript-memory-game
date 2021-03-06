var MemoryGame = function (cards) {
    this.cards = cards;
    // Card seleccionadas
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
    var shuffleArray = [];
    var iAux = cardsArr.length;
    for (var i = 0; i < iAux; i++) {
        var numberRamdom = Math.floor(Math.random() * cardsArr.length);
        shuffleArray.push(cardsArr[numberRamdom]);
        cardsArr.splice(numberRamdom, 1);
    }
    return shuffleArray;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    this.pairsClicked++;
    if (firstCard === secondCard) {
        this.pairsGuessed++;
        return true;
    } else {
        return false;
    }
};

MemoryGame.prototype.finished = function () {
    alert("Has ganado");
};
