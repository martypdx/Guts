/* globals Players deckOfCardsArray playersList Controls EndGame */
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
        this.newDeck = this.deck.slice();
    }

    randomize(deck) {
        return Math.floor(Math.random() * deck.length);
    }

    dealHand() {
       
        for(let i = 0; i < this.players.length; i++) {
            const player = this.players[i];
            const cardOne = this.newDeck.splice(this.randomize(this.newDeck), 1);
            const cardTwo = this.newDeck.splice(this.randomize(this.newDeck), 1);
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

    endGame() {
        const endMessageViewer = document.getElementById('end-message-viewer');
        this.endMessageComponent = new EndGame(this.players[0]);
        const endMessageDom = this.endMessageComponent.render();
        endMessageViewer.appendChild(endMessageDom);
        this.playAgainButton.classList.toggle('hidden');
        this.dealButton.classList.toggle('hidden');
        this.newDeck = this.deck.slice();
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
        if(this.newDeck.length === 0) {
            this.endGame();
        }
    }

    render() {
        const dom = appTemplate.content.cloneNode(true);
        this.playAgainButton = dom.getElementById('play-again');
        // prototype of ante dealButton for dealing cards
        this.dealButton = dom.getElementById('deal');
        this.dealButton.addEventListener('click', () => {
            this.dealHand();
            inOutViewerSection.classList.toggle('hidden');
            this.dealButton.classList.toggle('hidden');

            playersComponent.update(this.players);
            this.getPlayersHand();
            centerSection.classList.toggle('hidden');
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
            centerSection.classList.toggle('hidden');
            this.dealButton.classList.toggle('hidden');
            inOutViewerSection.classList.toggle('hidden');
        }, () => {
            this.dealHand();
            playersComponent.update(this.players);
            this.getPlayersHand();
        });

        const inOutViewerSection = dom.getElementById('in-out-viewer');
        const inOutDom = controlsViewerComponent.renderInOut();
        inOutViewerSection.appendChild(inOutDom);
        inOutViewerSection.classList.toggle('hidden');

        // play-again button
        this.playAgainButton.addEventListener('click', () => {
            this.dealHand();
            inOutViewerSection.classList.toggle('hidden');
            this.dealButton.classList.toggle('hidden');
            //this.players[0].hand.splice(0);
            //this.players[1].hand.splice(0);
            
            this.getPlayersHand();
            playersComponent.update(this.players);
            
            centerSection.classList.toggle('hidden');
            this.playAgainButton.classList.toggle('hidden');
            this.endMessageComponent.update();
        });


        return dom;
    }
}

