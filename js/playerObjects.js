/* exported playersList */

class PlayersObjects {
    constructor(name, value, cardFront, cardBack) {
        this.name = name;
        this.value = value;
        this.hand = [];
        //this.bankroll = 1000;
        this.wins = 0;
        this.loses = 0;
        this.draws = 0;
        this.cardBack = cardBack;
    }
}

const user = new PlayersObjects('User', [], []);
const npcOne = new PlayersObjects('Rocket', [], []);
const playersList = [user, npcOne];



