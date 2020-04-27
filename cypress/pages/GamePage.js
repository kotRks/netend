export default class GamePage{
    constructor(){
        this.ImagesListSelector = '[style="background-image: url"]';
        this.playArea = '[id="result"]';
        this.resultText = '[id="status"]';
        this.runButton = '#start';
        this.imageClass = "pulse"
    }

    openPage(path = '/'){
        cy.visit(path);
    }

    runGame(){
        cy.get(this.runButton).click();
    }

    getPlayImages(){
        cy.get(this.playArea).children();
    }

    getLeftImage(){
        cy.get(this.playArea).children().first();
    }

    isElementVisible(selector){
        cy.get(selector).should('be.visible');
    }

    getCenterImage(){
        cy.get(this.playArea).children().first().next();
    }

    getRightImage(){
        cy.get(this.playArea).children().last();
    }

    getRunButton(){
        cy.get(this.runButton)
    }

    getTextMessage(){
        cy.get(this.resultText)
    }

    elementOnPageHasAttribute(element, attribute){
        cy.get(element).should('have.id', attribute);
    }

    validateElementsIsPresent(){
        this.isElementVisible(this.playArea);
        this.isElementVisible(this.runButton);
        this.isElementVisible(this.resultText);
    }

    validateElementHaveAttribute(){
        this.elementOnPageHasAttribute(this.playArea, 'result');
        this.elementOnPageHasAttribute(this.runButton, 'start');
        this.elementOnPageHasAttribute(this.resultText, 'status');
    }
}