var cards = [
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' },
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' }
];

$(document).ready(function(){
  var memoryGame = new MemoryGame(cards);
  var html = '';
  memoryGame.cards.forEach(function (pic, index) {
    html += '<div class= "card" id="card_' + pic.name + '">';
    html += '<div class="back"';
    html += '    name="'       + pic.img +  '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ') no-repeat">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  document.getElementById('memory_board').innerHTML = html;
  // Bind the click event of each element to a function
  $('.back').on('click', function (card) {
    memoryGame.pickedCards.push(card);
    if (memoryGame.pickedCards.length < 2) {
      if ($(this).hasClass('back')) {
        $(this.parentElement.children[0]).removeClass('back');
        $(this.parentElement.children[0]).addClass('front');
        $(this.parentElement.children[1]).removeClass('front');
        $(this.parentElement.children[1]).addClass('back');

      }
    }
    else if (memoryGame.pickedCards.length === 2) {
      if ($(this).hasClass('back')) {
        $(this.parentElement.children[0]).removeClass('back');
        $(this.parentElement.children[0]).addClass('front');
        $(this.parentElement.children[1]).removeClass('front');
        $(this.parentElement.children[1]).addClass('back');

      }

      var state = memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1]);
      $('#pairs_guessed').text(Number($('#pairs_guessed').text()) + 1);
      if (state && memoryGame.pairsGuessed === memoryGame.cards.length / 2) {
        memoryGame.finished();
      }
    }
    // else {
    //   $(this.parentElement.children[0]).removeClass('front');
    //   $(this.parentElement.children[0]).addClass('back');
    //   $(this.parentElement.children[1]).removeClass('back');
    //   $(this.parentElement.children[1]).addClass('front');
    // }

    

  }); 
});


