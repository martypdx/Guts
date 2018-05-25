/* exported playersList playersData clearPlayerData */
const playersData = window.localStorage.getItem('playersList');
const userName = window.localStorage.getItem('userName');

window.onbeforeunload = () => {
    window.localStorage.setItem('playersList', JSON.stringify(playersList));
};

let playersList;
if(playersData) {
    playersList = JSON.parse(playersData);
}

else {
    initPlayers();
}

function initPlayers() {

    class PlayersObjects {
        constructor(name) {
            this.name = name;
            this.hand = [];
            this.flipped = false;
            this.points = 0;
        }
    }

    const user = new PlayersObjects(JSON.parse(userName));
    const npcOne = new PlayersObjects('Opponent');
    playersList = [npcOne, user];
}

function clearPlayerData() {
    window.localStorage.clear('playersList');
    console.log(playersList);
    // initPlayers();
}