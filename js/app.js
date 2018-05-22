
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

        const handChoiceSection = dom.getElementById('in-out');
        const inComponent = new Controls();
        const inDom = inComponent.handChoice();
        handChoiceSection.appendChild(inDom);


        return dom;
    }


}