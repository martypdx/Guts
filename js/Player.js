/* exported Player */

const playerTemplate = document.getElementById('player-template');

class Player {
    constructor(player) {
        this.player = player;
    }
    
    Branches are messed up

    reveal() {
        const dom = playerTemplate.content.cloneNode(true);

        const name = dom.querySelector('.name');
        name.textContent = this.player.name;

        const wins = dom.querySelector('.wins');
        wins.textContent = this.player.wins;
        
        const loses = dom.querySelector('.loses');
        loses.textContent = this.player.loses;

        const draws = dom.querySelector('.draws');
        draws.textContent = this.player.draws;


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
        
        const wins = dom.querySelector('.wins');
        wins.textContent = this.player.wins;
        
        const loses = dom.querySelector('.loses');
        loses.textContent = this.player.loses;

        const draws = dom.querySelector('.draws');
        draws.textContent = this.player.draws;
        
        // checks to make sure hand has been dealt & players name is User
        if(this.player.hand.length > 0 && this.player.name === 'User') {
            const hand = dom.querySelector('.hand');
            const cards = hand.querySelectorAll('img');
            cards[0].src = this.player.hand[0].frontImage;
            cards[1].src = this.player.hand[1].frontImage;
            
        }

        // checks to make sure hand has been dealt & players name is not User
        else if(this.player.hand.length > 0 && this.player.name !== 'User') {
            const hand = dom.querySelector('.hand');
            const cards = hand.querySelectorAll('img');
            cards[0].src = this.player.hand[0].backImage;
            cards[1].src = this.player.hand[1].backImage;

        }

        return dom;
    }
}