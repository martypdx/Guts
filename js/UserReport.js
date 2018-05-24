/* exported UserReport */
'use strict';

const userReportTemplate = document.getElementById('user-report-template');

class UserReport {
    constructor(player) {
        this.player = player;
    }

    render() {
        const dom = userReportTemplate.content.cloneNode(true);

        const li = dom.querySelectorAll('li');
        li[0].textContent = this.player.name;
        li[1].textContent = this.player.points;

        return dom;
    }
}