/* globals Controls Players */
/* exported App */
'use strict';

const appTemplate = document.getElementById('app-template');

class App {
    constructor() {
        this.anteSelect = '';
    }

    render() {
        const dom = appTemplate.content;
        const playersComponent = new Players('Here are the players');
        const playersSection = dom.getElementById('players');
        playersSection.appendChild(playersComponent.render());

        this.anteUp();
        return dom;
    }

    anteUp() {
        // const dom = appTemplate.content;
        const anteComponent = new Controls(() => {
            const anteVar = anteComponent.render();
            console.log(anteVar);
        });
        // const anteSelectString = anteComponent.render();
        // console.log(anteSelectString);
        // return anteSelectString;
    }
}