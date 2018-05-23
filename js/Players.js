/* exported Players playersTemplate*/
/* globals Player */

'use strict';

const playersTemplate = document.getElementById('players-template');

class Players {
    constructor(players) {
        this.players = players;
    }

    update(players) {
        this.players = players;
        while(this.ul.lastElementChild) {
            this.ul.lastElementChild.remove();
        }

        for(let i = 0; i < this.players.length; i++) {
            const playerComponent = new Player(this.players[i]);
            const playerDom = playerComponent.render();
            this.ul.appendChild(playerDom);
        }
    }

    render() {
        const dom = playersTemplate.content;
        this.ul = dom.querySelector('div');
        
        this.update(this.players);

        return dom;
    }
}

