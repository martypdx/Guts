'use strict';
/* exported Controls */

//function that responds to user selection of ante
class Controls {
    constructor() {

    }

    handChoice() {
        const choice = document.getElementById('in-out');
        const choiceButtons = choice.querySelectorAll('button');
        choiceButtons[0].addEventListener('click', () => {
            console.log('player in');
        });
    }
}