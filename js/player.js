/* exported Player */

const playerTemplate = document.getElementById('player-template');

class Player {
    constructor(player) {
        this.player = player;
    }

    render() {
        const dom = playerTemplate.content.cloneNode(true);
        
        const name = dom.querySelector('.name');
        name.textContent = this.player.name;
        
        const bankroll = dom.querySelector('.bankroll');
        bankroll.textContent = this.player.bankroll;
        
        if(this.player.hand.length > 0) {
            const hand = dom.querySelector('.hand');
            const cards = hand.querySelectorAll('li');
            cards[0].textContent = this.player.hand[0].value + ' ' + this.player.hand[0].suit;
            cards[1].textContent = this.player.hand[1].value + ' ' + this.player.hand[1].suit;
            
        }

        return dom;
    }
}