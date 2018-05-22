/* globals Pot Players deckOfCardsArray playersList*/

/* exported App */
'use strict';

const appTemplate = document.getElementById('app-template');

class App {
    constructor() {
        this.players = playersList;
        this.cards = deckOfCardsArray;
        this.handDealt = [];

    }

    dealHand() {
        // loop the player
        for(let i = 0; i < this.players.length; i++) {
            const player = this.players[i];
            const cardOne = this.cards.pop();
            const cardTwo = this.cards.pop();
            player.hand = [cardOne, cardTwo];
        }

        // randomly pick two cards from the deck and assign to each player

    }

    render() {
        // testing button function for dealing cards
        const dom = appTemplate.content;
        const button = dom.querySelector('button');
        button.addEventListener('click', () => {
            this.dealHand();
            playersComponent.update(this.players);
        });

        // testing button function for adjusting bankroll
        const buttonTwo = dom.querySelector('.button');
        buttonTwo.addEventListener('click', () => {
            this.players[0].bankroll -= 500;
            this.players[1].bankroll += 200;
            playersComponent.update(this.players);
        });
        
        //renders players section
        const playersComponent = new Players(this.players);
        const playersSection = dom.getElementById('players');
        playersSection.appendChild(playersComponent.render());

       
        const potViewerSection = dom.getElementById('pot-viewer');

        const potViewerComponent = new Pot();

        const potDom = potViewerComponent.render();
        potViewerSection.appendChild(potDom);
        return dom;
    }
}

