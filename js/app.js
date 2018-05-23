/* globals Pot Players deckOfCardsArray playersList */

/* exported App */
'use strict';

const appTemplate = document.getElementById('app-template');

class App {
    constructor() {
        this.players = playersList;
        this.deck = deckOfCardsArray;
        this.userHand = [];
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

       
        const potViewerSection = dom.getElementById('pot-viewer');

        const potViewerComponent = new Pot();

        const potDom = potViewerComponent.render();
        potViewerSection.appendChild(potDom);
        return dom;
    }
}

