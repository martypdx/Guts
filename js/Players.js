/* exported Players playersTemplate*/

'use strict';

const playersTemplate = document.getElementById('players-template');

class Players {
    constructor(name) {
        this.name = name;
    }

    render() {
        console.log(this.name);
        const dom = playersTemplate.content;
        dom.textContent = this.name;
        return dom;
    }
}

