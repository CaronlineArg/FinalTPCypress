
export class ShoppingCartPage {
    constructor(){
        
        this.getProductNameTag="name=Black T-Shirt"
       this.totalPrice="#price"
        this.goToShoppingCartButton="#goShoppingCart"
        this.goToCheckoutButton='button'
    }   


goToCheckout(){
  cy.get(this.goToCheckoutButton).last().click();
   
}
    verifyProductName(productName) {
        cy.contains(`${productName}`).should('contain', productName);
    }
    verifyProductPrice(productName, productPrice) {
        cy.contains(`${productName}`).next().should('contain', productPrice);
    }
   clickShowTotalPrice(){
        cy.xpath("//*[@id='root']/div/div[2]/div[2]/button").click();
   }
    verifyTotalPrice(expectedPrice) {
        cy.get('#price').should('have.text', expectedPrice);
      }
  
}