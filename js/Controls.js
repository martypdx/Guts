/* exported Controls */

const inOutTemplate = document.getElementById('in-out-template');
const centerTemplate = document.getElementById('center-template');

class Controls {
    constructor(inChoice, outChoice) {
        this.inChoice = inChoice;
        this.outChoice = outChoice;
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

    centerView(outcome) {
        const dom = centerTemplate.content.cloneNode(true);
        const centerPara = dom.getElementById('message');

        if(outcome === 'Draw') {
            centerPara.textContent = 'Draw';
        }
        else if(outcome === 'Win') {
            centerPara.textContent = 'You Win.';
        }
        else if(outcome === 'Lose') {
            centerPara.textContent = 'You Lose.';
        }
        return dom;
    }
}