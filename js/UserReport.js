/* exported UserReport */
'use strict';

const userReportTemplate = document.getElementById('user-report-template');

class UserReport {
    constructor(playerOne, playerTwo) {
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
    }

    render() {
        const dom = userReportTemplate.content.cloneNode(true);
        const li = dom.querySelectorAll('li');
        li[0].textContent = this.playerOne.name + ': ' + this.playerOne.points;
        li[1].textContent = this.playerTwo.name + ': ' + this.playerTwo.points;
        return dom;
    }
}