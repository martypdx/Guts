/* globals Players deckOfCardsArray playersList Center Controls  */
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
            const cardOne = this.cards[this.random()];
            const cardTwo = this.cards[this.random()];
            player.hand = [cardOne, cardTwo];
            // const cardOne = this.cards.splice(this.random(), 1);
            // const cardTwo = this.cards.splice(this.random(), 1);
            // player.hand = [cardOne[0], cardTwo[0]];
        }

        // randomly pick two cards from the deck and assign to each player

    }

    render() {
        // testing button function for dealing cards
        const dom = appTemplate.content;
        const button = dom.getElementById('deal');
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

        const centerComponent = new Center();
        const centerSection = dom.getElementById('center-viewer');
        const centerDom = centerComponent.render();
        centerSection.appendChild(centerDom);

        const controlsViewerComponent = new Controls();

        const anteViewerSection = dom.getElementById('ante-viewer');
        const anteDom = controlsViewerComponent.renderAnte();
        anteViewerSection.appendChild(anteDom);

        const inOutViewerSection = dom.getElementById('in-out-viewer');
        const inOutDom = controlsViewerComponent.renderInOut();
        inOutViewerSection.appendChild(inOutDom);

        const navViewerSection = dom.getElementById('nav-viewer');
        const navDom = controlsViewerComponent.renderNav();
        navViewerSection.appendChild(navDom);

        return dom;
    }

    random() {
        let randomNum = Math.floor(Math.random() * Math.floor(52));
        return randomNum;
    }
}

