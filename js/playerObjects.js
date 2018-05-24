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
        constructor(name) {
            this.name = name;
            this.hand = [];
            this.points = 0;
        }
    }

    const user = new PlayersObjects('User');
    const npcOne = new PlayersObjects('Opponent');
    playersList = [user, npcOne];

}