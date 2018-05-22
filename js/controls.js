// get controls to notify app that the button's been clicked 
// and have app store that value in its this.anteSelect variable
// then send that down to renderPot in Center

/* exported Controls */

class Controls {
    constructor(anteSelect) {
        this.anteSelect = anteSelect;
    }

    render() {
        const anteButtonDiv = document.getElementById('ante');
        const anteButtons = anteButtonDiv.querySelectorAll('button');
        for(let i = 0; i < anteButtons.length; i++) {
            anteButtons[i].addEventListener('click', () => {
                this.anteSelect = anteButtons[i].textContent;
                console.log('is this on?', this.anteSelect);
            });
        }
        return this.anteSelect;
        // return this.anteSelect;

    }
}