/* exported Controls */

const anteTemplate = document.getElementById('ante-template');
const inOutTemplate = document.getElementById('in-out-template');
const navTemplate = document.getElementById('nav-template');

class Controls {
    constructor() {
    }

    renderAnte() {
        const dom = anteTemplate.content.cloneNode(true);
        const anteButtons = dom.querySelectorAll('button');
        for(let i = 0; i < anteButtons.length; i++) {
            anteButtons[i].textContent = (i * 5) + 5;
            anteButtons[i].addEventListener('click', () => {
                console.log('is this on?', anteButtons[i].textContent);
            });
        }
        return dom;
    }

    renderInOut() {
        const dom = inOutTemplate.content.cloneNode(true);
        const inOutButtons = dom.querySelectorAll('button');
        inOutButtons[0].textContent = 'IN';
        inOutButtons[1].textContent = 'OUT';
        return dom;
    }

    renderNav() {
        const dom = navTemplate.content.cloneNode(true);
        const navButtons = dom.querySelectorAll('button');
        navButtons[0].textContent = 'BACK';
        navButtons[1].textContent = 'NEXT';
        return dom;
    }
}