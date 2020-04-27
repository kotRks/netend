import GamePage from '../pages/GamePage.js'
const page = new GamePage();

describe('Validation after open', function() {
    beforeEach(() => {
        page.openPage();
});

    it('Test 1: Validate visible elements on page', function() {
        page.validateElementsIsPresent();
    });

    it('Test 2: Validate element class on page', function() {
        page.validateElementHaveAttribute();
    });

});