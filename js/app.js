/* globals Controls CenterSpace */
/* exported App */
'use strict';

const appTemplate = document.getElementById('app-template');

class App {
    constructor() {
    }

    render() {
        const dom = appTemplate.content;

        const centerSpaceComponent = new CenterSpace();
        const centerSpaceSection = dom.getElementById('center-space-viewer');
        const centerSpaceDom = centerSpaceComponent.render();
        centerSpaceSection.appendChild(centerSpaceDom);

        const controlsViewerComponent = new Controls();
        const anteViewerSection = dom.getElementById('ante-viewer');
        const anteDom = controlsViewerComponent.renderAnte(ante);
        anteViewerSection.appendChild(anteDom);

        const inOutViewerSection = dom.getElementById('in-out-viewer');
        const inOutDom = controlsViewerComponent.renderInOut();
        inOutViewerSection.appendChild(inOutDom);

        const navViewerSection = dom.getElementById('nav-viewer');
        const navDom = controlsViewerComponent.renderNav();
        navViewerSection.appendChild(navDom);
        // const playersComponent = new Players('Here are the players');
        // const playersSection = dom.getElementById('players');
        // playersSection.appendChild(playersComponent.render());

        // this.anteUp();
        return dom;
    }
}