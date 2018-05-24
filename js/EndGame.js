/* exported EndGame */
/* globals UserReport */
'use strict';

const endMessageTemplate = document.getElementById('end-message-template');

class EndGame {
    constructor(player) {
        this.player = player;
    }

    update() {
        
        while(this.ul.lastElementChild) {
            this.ul.lastElementChild.remove();
        }
    }

    render() {
        const dom = endMessageTemplate.content.cloneNode(true);
        console.log(dom);
        this.ul = dom.querySelector('ul');

        const messageComponent = new UserReport(this.player);
        const messageDom = messageComponent.render();
        this.ul.appendChild(messageDom);
    
        return dom;
    }
}