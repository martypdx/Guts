/* exported playersList */

class PlayersObjects {
    constructor(name, cards, bankroll) {
        this.name = name;
        this.cards = cards;
        this.bankroll = bankroll;
    }
}

const user = new PlayersObjects('', [], 1000);
const npcOne = new PlayersObjects('Rocket', [], 1000);
const npcTwo = new PlayersObjects('Drax', [], 1000);
const dealer = new PlayersObjects('Dealer', []);

const playersList = [user, npcOne, npcTwo, dealer];



