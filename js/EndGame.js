/* exported EndGame */
/* globals UserReport */
'use strict';

const endMessageTemplate = document.getElementById('end-message-template').content;

class EndGame {
    constructor(player) {
        this.player = player;
    }

    render() {
        const dom = endMessageTemplate;
        this.ul = dom.querySelector('ul');

        const messageComponent = new UserReport(this.player);
        const messageDom = messageComponent.render();
        this.ul.appendChild(messageDom);
    
        return dom;
    }
}