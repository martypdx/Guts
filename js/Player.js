/* exported Player */

/* globals */

const playerTemplate = document.getElementById('player-template');

class Player {
    constructor(player, flipped) {
        this.player = player;
        this.flipped = flipped;
    }

    render() {
        const dom = playerTemplate.content.cloneNode(true);
        
        const name = dom.querySelector('.name');
        name.textContent = this.player.name;
        
        const wins = dom.querySelector('.points');
        wins.textContent = this.player.points;
        
        
        if(this.flipped === true) {
            const hand = dom.querySelector('.hand');
            const cards = hand.querySelectorAll('img');
            cards[0].src = this.player.hand[0].frontImage;
            cards[1].src = this.player.hand[1].frontImage;
        }

        else if(this.player.hand.length > 0 && this.player.name === 'User') {
            const hand = dom.querySelector('.hand');
            const cards = hand.querySelectorAll('img');
            cards[0].src = this.player.hand[0].frontImage;
            cards[1].src = this.player.hand[1].frontImage;
            
        }

        else if(this.player.hand.length > 0 && this.player.name !== 'User') {
            const hand = dom.querySelector('.hand');
            const cards = hand.querySelectorAll('img');
            cards[0].src = this.player.hand[0].backImage;
            cards[1].src = this.player.hand[1].backImage;

        }

        return dom;
    }
}