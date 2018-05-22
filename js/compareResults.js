
const userHand = [3, 7];
const opponentHand = [9, 1];

function getHighCard (hand) {

    let highCard;
    let kicker;
    if(hand[0] > hand[1]) {
        highCard = hand[0];
        kicker = hand[1];
    }
    else {
        highCard = hand[1];
        kicker = hand[0];
    }
    console.log(highCard);
    console.log(kicker);
}

//function getOpponentHighCard()

getHighCard(opponentHand);