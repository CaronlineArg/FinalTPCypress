export class OnlineShopPage {
    constructor(){
       
        this.closeAddToCartModalButton="#closeModal";
        this.goToShoppingCartButton="#goShoppingCart";
        this.goToOnlineShopLink='#onlineshoplink';
          }   
    
    goToOnlineShop(){
        cy.get(this.goToOnlineShopLink).click();
    }
    addToCartProductButtonClick(productName){
        cy.get(`button[value="${productName}"]`).click();
    }
    closeAddToCartModalButtonClick(){
        cy.get(this.closeAddToCartModalButton).click();
  
    }
    goToShoppingCartButtonClick(){
        cy.get(this.goToShoppingCartButton).click();
         
    }
   
}