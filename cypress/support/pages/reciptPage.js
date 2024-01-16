
export class ReciptPage {
    constructor(){
        
        this.getNameText="#name"
      
       this.getcreditCardText="#creditCard"
       this.getCostoTotal="#totalPrice"
  
        this.sendCheckoutButton="#submitCheckout"
        this.getDialog="section[role='dialog']>p"
        this.getThankYouButton="Thank you"
        
    }
    

    verifyCompleteName(firstname, lastname) {
       
        cy.wait(10000)
        cy.get(this.getNameText).should('contain', firstname );
        
        cy.get(this.getNameText).should('contain', lastname);
    }
    verifyProductsNames(productName1, productName2) {
        cy.contains(`${productName1}`).should('contain', productName1);
        cy.contains(`${productName1}`).next().should('contain', productName2);
    
    }
   verifyCardNumber(expectedCreditCard){
    cy.get(this.getcreditCardText).should('have.text', expectedCreditCard);
   }
    verifyTotalPrice(expectedPrice) {
        cy.get(this.getCostoTotal).should('have.text', 'You have spent $'+expectedPrice);
      }
    clickThankYouButton(){
        cy.contains(this.getThankYouButton).click()
         }  

      
}