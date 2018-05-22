
/* globals Pot Players */
/* exported App */
'use strict';

const appTemplate = document.getElementById('app-template');

class App {
    constructor() {

    }

    render() {


        const dom = appTemplate.content;
        const playersComponent = new Players('testing');
        const playersSection = dom.getElementById('players');
        playersSection.appendChild(playersComponent.render());

       
        const potViewerSection = dom.getElementById('pot-viewer');

        const potViewerComponent = new Pot();

        const potDom = potViewerComponent.render();
        potViewerSection.appendChild(potDom);
        return dom;
    }
}