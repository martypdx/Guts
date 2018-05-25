/* exported Players playersTemplate*/
/* globals Player */

'use strict';

const playersTemplate = document.getElementById('players-template');

class Players {
    constructor(players, flipped) {
        this.players = players;
        this.flipped = flipped;
    }

    update(players, flipped) {
        this.players = players;
        this.flipped = flipped;

        while(this.div.lastElementChild) {
            this.div.lastElementChild.remove();
        }

        for(let i = 0; i < this.players.length; i++) {
            const playerComponent = new Player(this.players[i], this.flipped);
            const playerDom = playerComponent.render();
            this.div.appendChild(playerDom);
        }
    }

    render() {
        const dom = playersTemplate.content;
        this.div = dom.querySelector('div');
        
        this.update(this.players, this.flipped);

        return dom;
    }
}

