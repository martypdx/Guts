/*exported deckOfCardsArray */
/* */
'use strict';

class Card {
    constructor(value, suit, frontImageSource, backImageSource) {
        this.value = value;
        this.suit = suit;
        this.backImageSource = backImageSource;
        this.backImageSource = backImageSource;
    }
}
    
const twoOfClubs = new Card(2, 'club', 'cardImages/2_of_clubs.png', 'cardImages/card_back.png');
const threeOfClubs = new Card(3, 'club', 'cardImages/3_of_clubs.png', 'cardImages/card_back.png');
const fourOfClubs = new Card(4, 'club', 'cardImages/4_of_clubs.png', 'cardImages/card_back.png');
const fiveOfClubs = new Card(5, 'club', 'cardImages/5_of_clubs.png', 'cardImages/card_back.png');
const sixOfClubs = new Card(6, 'club', 'cardImages/6_of_clubs.png', 'cardImages/card_back.png');
const sevenOfClubs = new Card(7, 'club', 'cardImages/7_of_clubs.png', 'cardImages/card_back.png');
const eightOfClubs = new Card(8, 'club', 'cardImages/8_of_clubs.png', 'cardImages/card_back.png');
const nineOfClubs = new Card(9, 'club', 'cardImages/9_of_clubs.png', 'cardImages/card_back.png');
const tenOfClubs = new Card(10, 'club', 'cardImages/10_of_clubs.png', 'cardImages/card_back.png');
const jackOfClubs = new Card(11, 'club', 'cardImages/jack_of_clubs.png', 'cardImages/card_back.png');
const queenOfClubs = new Card(12, 'club', 'cardImages/queen_of_clubs.png', 'cardImages/card_back.png');
const kingOfClubs = new Card(13, 'club', 'cardImages/king_of_clubs.png', 'cardImages/card_back.png');
const aceOfClubs = new Card(14, 'club', 'cardImages/ace_of_clubs.png', 'cardImages/card_back.png');
const twoOfDiamonds = new Card(2, 'diamond', 'cardImages/2_of_diamonds.png', 'cardImages/card_back.png');
const threeOfDiamonds = new Card(3, 'diamond', 'cardImages/3_of_diamonds.png', 'cardImages/card_back.png');
const fourOfDiamonds = new Card(4, 'diamond', 'cardImages/4_of_diamonds.png', 'cardImages/card_back.png');
const fiveOfDiamonds = new Card(5, 'diamond', 'cardImages/5_of_diamonds.png', 'cardImages/card_back.png');
const sixOfDiamonds = new Card(6, 'diamond', 'cardImages/6_of_diamonds.png', 'cardImages/card_back.png');
const sevenOfDiamonds = new Card(7, 'diamond', 'cardImages/7_of_diamonds.png', 'cardImages/card_back.png');
const eightOfDiamonds = new Card(8, 'diamond', 'cardImages/8_of_diamonds.png', 'cardImages/card_back.png');
const nineOfDiamonds = new Card(9, 'diamond', 'cardImages/9_of_diamonds.png', 'cardImages/card_back.png');
const tenOfDiamonds = new Card(10, 'diamond', 'cardImages/10_of_diamonds.png', 'cardImages/card_back.png');
const jackOfDiamonds = new Card(11, 'diamond', 'cardImages/jack_of_diamonds.png', 'cardImages/card_back.png');
const queenOfDiamonds = new Card(12, 'diamond', 'cardImages/queen_of_diamonds.png', 'cardImages/card_back.png');
const kingOfDiamonds = new Card(13, 'diamond', 'cardImages/king_of_diamonds.png', 'cardImages/card_back.png');
const aceOfDiamonds = new Card(14, 'diamond', 'cardImages/ace_of_diamonds.png', 'cardImages/card_back.png');
const twoOfHearts = new Card(2, 'heart', 'cardImages/2_of_hearts.png', 'cardImages/card_back.png');
const threeOfHearts = new Card(3, 'heart', 'cardImages/3_of_hearts.png', 'cardImages/card_back.png');
const fourOfHearts = new Card(4, 'heart', 'cardImages/4_of_hearts.png', 'cardImages/card_back.png');
const fiveOfHearts = new Card(5, 'heart', 'cardImages/5_of_hearts.png', 'cardImages/card_back.png');
const sixOfHearts = new Card(6, 'heart', 'cardImages/6_of_hearts.png', 'cardImages/card_back.png');
const sevenOfHearts = new Card(7, 'heart', 'cardImages/7_of_hearts.png', 'cardImages/card_back.png');
const eightOfHearts = new Card(8, 'heart', 'cardImages/8_of_hearts.png', 'cardImages/card_back.png');
const nineOfHearts = new Card(9, 'heart', 'cardImages/9_of_hearts.png', 'cardImages/card_back.png');
const tenOfHearts = new Card(10, 'heart', 'cardImages/10_of_hearts.png', 'cardImages/card_back.png');
const jackOfHearts = new Card(11, 'heart', 'cardImages/jack_of_hearts.png', 'cardImages/card_back.png');
const queenOfHearts = new Card(12, 'heart', 'cardImages/queen_of_hearts.png', 'cardImages/card_back.png');
const kingOfHearts = new Card(13, 'heart', 'cardImages/king_of_hearts.png', 'cardImages/card_back.png');
const aceOfHearts = new Card(14, 'heart', 'cardImages/ace_of_hearts.png', 'cardImages/card_back.png');
const twoOfSpades = new Card(2, 'spade', 'cardImages/2_of_spades.png', 'cardImages/card_back.png');
const threeOfSpades = new Card(3, 'spade', 'cardImages/3_of_spades.png', 'cardImages/card_back.png');
const fourOfSpades = new Card(4, 'spade', 'cardImages/4_of_spades.png', 'cardImages/card_back.png');
const fiveOfSpades = new Card(5, 'spade', 'cardImages/5_of_spades.png', 'cardImages/card_back.png');
const sixOfSpades = new Card(6, 'spade', 'cardImages/6_of_spades.png', 'cardImages/card_back.png');
const sevenOfSpades = new Card(7, 'spade', 'cardImages/7_of_spades.png', 'cardImages/card_back.png');
const eightOfSpades = new Card(8, 'spade', 'cardImages/8_of_spades.png', 'cardImages/card_back.png');
const nineOfSpades = new Card(9, 'spade', 'cardImages/9_of_spades.png', 'cardImages/card_back.png');
const tenOfSpades = new Card(10, 'spade', 'cardImages/10_of_spades.png', 'cardImages/card_back.png');
const jackOfSpades = new Card(11, 'spade', 'cardImages/jack_of_spades.png', 'cardImages/card_back.png');
const queenOfSpades = new Card(12, 'spade', 'cardImages/queen_of_spades.png', 'cardImages/card_back.png');
const kingOfSpades = new Card(13, 'spade', 'cardImages/king_of_spades.png', 'cardImages/card_back.png');
const aceOfSpades = new Card(14, 'spade', 'cardImages/ace_of_spades.png', 'cardImages/card_back.png');

const deckOfCardsArray = [
    twoOfClubs,
    threeOfClubs,
    fourOfClubs,
    fiveOfClubs,
    sixOfClubs,
    sevenOfClubs,
    eightOfClubs,
    nineOfClubs,
    tenOfClubs,
    jackOfClubs,
    queenOfClubs,
    kingOfClubs,
    aceOfClubs,
    twoOfDiamonds,
    threeOfDiamonds,
    fourOfDiamonds,
    fiveOfDiamonds,
    sixOfDiamonds,
    sevenOfDiamonds,
    eightOfDiamonds,
    nineOfDiamonds,
    tenOfDiamonds,
    jackOfDiamonds,
    queenOfDiamonds,
    kingOfDiamonds,
    aceOfDiamonds,
    twoOfHearts,
    threeOfHearts,
    fourOfHearts,
    fiveOfHearts,
    sixOfHearts,
    sevenOfHearts,
    eightOfHearts,
    nineOfHearts,
    tenOfHearts,
    jackOfHearts,
    queenOfHearts,
    kingOfHearts,
    aceOfHearts,
    twoOfSpades,
    threeOfSpades,
    fourOfSpades,
    fiveOfSpades,
    sixOfSpades,
    sevenOfSpades,
    eightOfSpades,
    nineOfSpades,
    tenOfSpades,
    jackOfSpades,
    queenOfSpades,
    kingOfSpades,
    aceOfSpades,
];