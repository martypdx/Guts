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

    randomize(deck) {
        return Math.floor(Math.random() * deck.length);
    }

    dealHand() {

        for(let i = 0; i < this.players.length; i++) {
            
            const player = this.players[i];
            const cardOne = this.deck.splice(this.randomize(this.deck), 1);
            const cardTwo = this.deck.splice(this.randomize(this.deck), 1);
            player.hand = [cardOne[0], cardTwo[0]];
            //console.log(player.hand);
        }

    }

    getPlayersHand() {
        
        for(let i = 0; i < this.players.length; i++) {

            if(this.players[i].hand[0].value === this.players[i].hand[1].value) {
                const hand = this.players[i].hand[0].value;
                console.log(hand);
                //return hand;
            }
            
            else if(this.players[i].hand[0].value > this.players[i].hand[1].value) {
                const highCard = this.players[i].hand[0].value;
                const kicker = this.players[i].hand[1].value;
                const hand = [highCard, kicker];
                console.log(hand);
                //return hand;
            }
            
            else {
                const highCard = this.players[i].hand[1].value;
                const kicker = this.players[i].hand[0].value;
                const hand = [highCard, kicker];
                console.log(hand);
                //return hand;
            }
        
        }
    }


    render() {
        const dom = appTemplate.content;

        // prototype of ante button for dealing cards
        const button = dom.querySelector('button');
        button.addEventListener('click', () => {
            this.dealHand();
            playersComponent.update(this.players);
            this.getPlayersHand();
        });

        // prototype in-out button for adjusting bankroll
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
}

