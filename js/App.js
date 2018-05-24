/* globals Players deckOfCardsArray playersList Controls  */
/* exported App */
'use strict';

const appTemplate = document.getElementById('app-template');

class App {
    constructor() {
        this.players = playersList;
        this.deck = deckOfCardsArray;
        this.handDealt = [];
        this.userHand = [];
        this.opponentHand = [];
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
        }
    }

    tallyResults(outcome) {
        if(outcome === 'Win') {
            this.players[0].wins++;
            this.players[1].loses++;
        }

        else if(outcome === 'Draw') {
            this.players[0].draws++;
            this.players[1].draws++;
        }

        else {
            this.players[0].loses++;
            this.players[1].wins++;
        }

    }

    getPlayersHand() {
        if(this.handDealt.length) {
            this.handDealt = [];
            this.userHand = [];
            this.opponentHand = [];
        }
        for(let i = 0; i < this.players.length; i++) {
            if(this.players[i].hand[0].value === this.players[i].hand[1].value) {
                const pair = this.players[i].hand[0].value;
                const hand = [pair];
                this.handDealt.push(hand);
            }
            
            else if(this.players[i].hand[0].value > this.players[i].hand[1].value) {
                const highCard = this.players[i].hand[0].value;
                const kicker = this.players[i].hand[1].value;
                const hand = [highCard, kicker];
                this.handDealt.push(hand);
            }
            
            else {
                const highCard = this.players[i].hand[1].value;
                const kicker = this.players[i].hand[0].value;
                const hand = [highCard, kicker];
                this.handDealt.push(hand);
            }
        }
        this.userHand.push(this.handDealt[0]);
        this.opponentHand.push(this.handDealt[1]);
    }

    compareHands(userHand, opponentHand){
        // comparing if both players have pairs
        if(userHand[0].length === 1 && opponentHand[0].length === 1) {
            if(userHand === opponentHand) {
                this.outcome = 'Draw';
            }
            else if(userHand[0][0] > opponentHand[0][0]) {
                this.outcome = 'Win';
            }
            else {
                this.outcome = 'Lose';
            }
        }

        // comparing if single player has pair
        else if(userHand[0].length === 1 && opponentHand[0].length !== 1) {
            this.outcome = 'Win';
        }
        else if(userHand[0].length !== 1 && opponentHand[0].length === 1) {
            this.outcome = 'Lose';
        }

        // comparing high cards
        else if(userHand[0][0] === opponentHand[0][0]) {
            if(userHand[0][0] === opponentHand[0][0] && userHand[0][1] === opponentHand[0][1]) {
                this.outcome = 'Draw';
            }
            else if(userHand[0][1] > opponentHand[0][1]) {
                this.outcome = 'Win';
            }
            else {
                this.outcome = 'Lose';
            }
        }
        else if(userHand[0][0] > opponentHand[0][0]) {
            this.outcome = 'Win';
        }
        else {
            this.outcome = 'Lose';
        }
        
        this.tallyResults(this.outcome);
    }

    render() {
        const dom = appTemplate.content;

        // prototype of ante button for dealing cards
        const button = dom.getElementById('deal');
        button.addEventListener('click', () => {
            this.dealHand();
            playersComponent.update(this.players);
            this.getPlayersHand();
        });
        
        const out = dom.getElementById('out');
        out.addEventListener('click', () => {
            playersComponent.removeCards(this.players);
            this.getPlayersHand();
        });

        //renders players section
        const playersComponent = new Players(this.players);
        const playersSection = dom.getElementById('players');
        playersSection.appendChild(playersComponent.render());

        const centerSection = dom.getElementById('center-viewer');
        
        const controlsViewerComponent = new Controls(() => {
            while(centerSection.lastElementChild) {
                centerSection.lastElementChild.remove();
            }
            this.compareHands(this.userHand, this.opponentHand);
            playersComponent.reveal(this.players);
            const centerDom = controlsViewerComponent.centerView(this.outcome);
            centerSection.appendChild(centerDom);
        }, () => {
            this.dealHand();
            playersComponent.update(this.players);
            this.getPlayersHand();
        });

        const inOutViewerSection = dom.getElementById('in-out-viewer');
        const inOutDom = controlsViewerComponent.renderInOut();
        inOutViewerSection.appendChild(inOutDom);

        const navViewerSection = dom.getElementById('nav-viewer');
        const navDom = controlsViewerComponent.renderNav();
        navViewerSection.appendChild(navDom);

        return dom;
    }
}

