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
            // cards[0].src = this.player.hand[0].backImage;
            // cards[1].src = this.player.hand[1].backImage;
            cards[0].src = this.player.hand[0].frontImage;
            cards[1].src = this.player.hand[1].frontImage;

        }

        return dom;
    }
}