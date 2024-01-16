export class HomePage {
    constructor(){
        this.onlineShopPageButton="#onlineshoplink";
    }
    clickProductButton(){
        cy.get(this.onlineShopPageButton).click();
    }
}