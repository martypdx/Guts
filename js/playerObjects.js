/* exported playersList */

class PlayersObjects {
    constructor(name, cards) {
        this.name = name;
        this.cards = cards;
        this.bankroll = 1000;
    }
}

const user = new PlayersObjects('', []);
const npcOne = new PlayersObjects('Rocket', []);
const npcTwo = new PlayersObjects('Drax', []);
const dealer = new PlayersObjects('Dealer', []);

const playersList = [user, npcOne, npcTwo, dealer];



