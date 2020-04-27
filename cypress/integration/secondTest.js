import GamePage from '../pages/GamePage.js'
const page = new GamePage();

describe('Validation after run', function() {
    beforeEach(() => {
        page.openPage();
    });

    it('Test 1: Validate visible elements on page', function() {
        page.runGame();
        page.validateElementsIsPresent();
    });

    it('Test 2: Validate element class on page', function() {
        page.runGame();
        page.validateElementHaveAttribute();
    });

});