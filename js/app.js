
/* globals Pot Players Controls */
/* exported App */
'use strict';

const appTemplate = document.getElementById('app-template');

class App {
    constructor() {

    }

    render() {

        const dom = appTemplate.content;
        const playersComponent = new Players('Here are the players');
        const playersSection = dom.getElementById('players');
        playersSection.appendChild(playersComponent.render());

       
        const potViewerSection = dom.getElementById('pot-viewer');

        const potViewerComponent = new Pot();

        const potDom = potViewerComponent.render();
        potViewerSection.appendChild(potDom);

       
        const controlsComponent = new Controls();
        const inDom = controlsComponent.handIn();
        const outDom = controlsComponent.handOut();
        const exitDom = controlsComponent.exit();
       
        return dom;
    }


}