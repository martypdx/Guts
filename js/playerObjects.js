/* exported playersList */

class PlayersObjects {
    constructor(name, value, cardFront, cardBack) {
        this.name = name;
        this.value = value;
        this.hand = [];
        this.bankroll = 1000;
        this.cardBack = cardBack;
    }
}

const user = new PlayersObjects('User', [], []);
const npcOne = new PlayersObjects('Rocket', [], []);
//const npcTwo = new PlayersObjects('Drax', []);
const dealer = new PlayersObjects('Dealer', [], []);

const playersList = [user, npcOne, dealer];



