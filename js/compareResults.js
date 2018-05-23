'use strict';
let highCard;
let kicker;
let pair;
const userHand = [4, 10];
const opponentHand = [5, 5];
//Gets player pair of cards and checks is it's a pair. If not, assigns highest value to highCard, lowest value to kicker.
function getPlayerHand(hand) {
    
    if(hand[0] === hand[1]) {
        pair = hand[0];
        console.log('a pair of ', pair, '\'s');
        return pair;
    }
    
    else if(hand[0] > hand[1]) {
        highCard = hand[0];
        kicker = hand[1];
        return { highCard: hand[0], kicker: hand[1] };
    }
    
    else {
        highCard = hand[1];
        kicker = hand[0];
        return { highCard: hand[1], kicker: hand[0] };
    }
}
//Compares player's hands to determine winner following game rules
function compareHands(userHand, opponentHand){
    if(userHand === pair && opponentHand === pair) {
        if(userHand === opponentHand) {
            return console.log('Draw, split the pot');
        }
        else if(userHand > opponentHand) {
            return console.log('user wins');
        }
        else {
            return console.log('opponent wins');
        }
    }
    else if(userHand.highCard === opponentHand.highCard) {
        if(userHand.highCard === opponentHand.highCard && userHand.kicker === opponentHand.kicker) {
            return console.log('Draw, split the pot');
        }
        else if(userHand.kicker > opponentHand.kicker) {
            return console.log('user wins');
        }
        else {
            return console.log('opponent wins');
        }
    }
    else if(userHand.highCard > opponentHand.highCard) {
        return console.log('user wins');
    }
    else if(userHand === pair && opponentHand !== pair) {
        return console.log('user wins');
    }
    else {
        return console.log('opponent wins');
    }
}



const firstHandToCompare = getPlayerHand(userHand);
const secondHandToCompare = getPlayerHand(opponentHand);
console.log(firstHandToCompare);
console.log(secondHandToCompare);
compareHands(firstHandToCompare, secondHandToCompare);


