/* exported playersList */
const playersData = window.localStorage.getItem('playersList');

window.onbeforeunload = () => {
    window.localStorage.setItem('playersList', JSON.stringify(playersList));

};

let playersList;
if(playersData) {
    playersList = JSON.parse(playersData);
}

else {
    initProducts();
}

function initProducts() {

    class PlayersObjects {
        constructor(name, value, cardFront, cardBack) {
            this.name = name;
            this.value = value;
            this.hand = [];
            this.wins = 0;
            this.loses = 0;
            this.draws = 0;
            this.cardBack = cardBack;
        }
    }

    const user = new PlayersObjects('User', [], []);
    const npcOne = new PlayersObjects('Rocket', [], []);
    playersList = [user, npcOne];

}