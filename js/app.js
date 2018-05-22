/* exported App */
/* globals Players */

const appTemplate = document.getElementById('app-template');

class App {
    constructor() {

    }

    render() {

        const dom = appTemplate.content;
        const playersComponent = new Players('testing');
        const playersSection = dom.getElementById('players');
        playersSection.appendChild(playersComponent.render());

        return dom;
    }
}