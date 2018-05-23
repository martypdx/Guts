/* exported playersList */

class PlayersObjects {
    constructor(name) {
        this.name = name;
        //this.value = value;
        this.hand = [];
        this.bankroll = 1000;
    }
}

const user = new PlayersObjects('User', []);
const npcOne = new PlayersObjects('Rocket', []);
const dealer = new PlayersObjects('Dealer', []);

const playersList = [user, npcOne, dealer];



