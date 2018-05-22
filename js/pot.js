/* exported Pot */
'use strict';

const potTemplate = document.getElementById('pot-template');

class Pot {
    constructor() {

    }

    render() {
        const dom = potTemplate.content;
        dom.textContent = 'Here is the pot';
        return dom;
    }
}