/* exported Controls */

const anteTemplate = document.getElementById('ante-template');
const inOutTemplate = document.getElementById('in-out-template');
const navTemplate = document.getElementById('nav-template');
const centerTemplate = document.getElementById('center-template');

class Controls {
    constructor(inChoice, outChoice) {
        this.inChoice = inChoice;
        this.outChoice = outChoice;
    }

    renderAnte() {
        const dom = anteTemplate.content.cloneNode(true);
        const anteButtons = dom.querySelectorAll('button');
        for(let i = 0; i < anteButtons.length; i++) {
            anteButtons[i].textContent = (i * 5) + 5;
            anteButtons[i].addEventListener('click', () => {
                let anteText = document.getElementById('ante-message');
                anteText.textContent = anteButtons[i].textContent;
            });
        }
        return dom;
    }

    renderInOut() {
        const dom = inOutTemplate.content.cloneNode(true);
        const inOutButtons = dom.querySelectorAll('button');
        inOutButtons[0].textContent = 'IN';
        inOutButtons[0].addEventListener('click', () => {
            this.inChoice();
        });
        inOutButtons[1].textContent = 'OUT';
        inOutButtons[1].addEventListener('click', () => {
            this.outChoice();
        });
        return dom;
    }

    renderNav() {
        const dom = navTemplate.content.cloneNode(true);
        const navButtons = dom.querySelectorAll('button');
        navButtons[0].textContent = 'BACK';
        navButtons[1].textContent = 'NEXT';
        return dom;
    }

    centerView(outcome) {
        const dom = centerTemplate.content.cloneNode(true);
        const centerPara = dom.getElementById('message');

        if(outcome === 'Draw') {
            centerPara.textContent = 'Draw';
        }
        else if(outcome === 'Win') {
            centerPara.textContent = 'Win';
        }
        else if(outcome === 'Lose') {
            centerPara.textContent = 'Lose';
        }
        return dom;
    }
}