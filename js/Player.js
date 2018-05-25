/* exported Player */

/* globals */

const playerTemplate = document.getElementById('player-template');

class Player {
    constructor(player, flipped) {
        this.player = player;
        this.flipped = flipped;
    }

    reveal() {
        const dom = playerTemplate.content.cloneNode(true);

        const name = dom.querySelector('.name');
        name.textContent = this.player.name;

        const wins = dom.querySelector('.points');
        wins.textContent = this.player.points;
        
        const hand = dom.querySelector('.hand');
        const cards = hand.querySelectorAll('img');
        cards[0].src = this.player.hand[0].frontImage;
        cards[1].src = this.player.hand[1].frontImage;

        return dom;
    }

    render() {
        const dom = playerTemplate.content.cloneNode(true);
        
        const name = dom.querySelector('.name');
        name.textContent = this.player.name;
        
        const wins = dom.querySelector('.points');
        wins.textContent = this.player.points;
        
        // checks to make sure hand has been dealt & players name is User
        
        if(this.flipped === true) {
            const hand = dom.querySelector('.hand');
            const cards = hand.querySelectorAll('img');
            cards[0].src = this.player.hand[0].frontImage;
            cards[1].src = this.player.hand[1].frontImage;
        }

        // checks to make sure hand has been dealt & players name is not User
        else if(this.player.hand.length > 0 && this.player.name === 'Opponent') {
            const hand = dom.querySelector('.hand');
            const cards = hand.querySelectorAll('img');
            cards[0].src = this.player.hand[0].backImage;
            cards[1].src = this.player.hand[1].backImage;

        }

        else if(this.player.hand.length > 0) {
            const hand = dom.querySelector('.hand');
            const cards = hand.querySelectorAll('img');
            cards[0].src = this.player.hand[0].frontImage;
            cards[1].src = this.player.hand[1].frontImage;
            
        }

        return dom;
    }
}