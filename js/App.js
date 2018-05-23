/* globals Controls Center */
/* exported App */
'use strict';

const appTemplate = document.getElementById('app-template');

class App {
    constructor() {
    }

    render() {
        const dom = appTemplate.content;

        const centerComponent = new Center();
        const centerSection = dom.getElementById('center-viewer');
        const centerDom = centerComponent.render();
        centerSection.appendChild(centerDom);

        const controlsViewerComponent = new Controls();

        const anteViewerSection = dom.getElementById('ante-viewer');
        const anteDom = controlsViewerComponent.renderAnte();
        anteViewerSection.appendChild(anteDom);

        const inOutViewerSection = dom.getElementById('in-out-viewer');
        const inOutDom = controlsViewerComponent.renderInOut();
        inOutViewerSection.appendChild(inOutDom);

        const navViewerSection = dom.getElementById('nav-viewer');
        const navDom = controlsViewerComponent.renderNav();
        navViewerSection.appendChild(navDom);

        return dom;
    }
}