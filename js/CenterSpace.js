/* exported CenterSpace */

const centerSpaceTemplate = document.getElementById('center-space-template');

class CenterSpace {
    constructor() {

    }

    render() {
        const dom = centerSpaceTemplate.content;
        return dom;
    }
}