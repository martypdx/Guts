'use strict';
/* exported Controls */

//function that responds to user selection of ante
class Controls {
    constructor() {

    }

    handIn() {
        const choice = document.getElementById('in-out');
        const choiceButtons = choice.querySelectorAll('button');
        choiceButtons[0].addEventListener('click', () => {
            console.log('player in');
        });
    }

    handOut() {
        const choice = document.getElementById('in-out');
        const choiceButtons = choice.querySelectorAll('button');
        choiceButtons[1].addEventListener('click', () => {
            console.log('player out');
        });
    }

    exit() {
        const exitGame = document.getElementById('exit');
        const exitButton = exitGame.querySelector('button');
        exitButton.addEventListener('click', () => {
            console.log('player exited game');
        });
    }
}