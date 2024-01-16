
export class CheckoutPage {
    constructor(){
        
        this.getNameInput="#FirstName"
       this.getLastnameInput="#lastName"
       this.getCardNumberInput="#cardNumber"
        this.getSubmitButton="button:nth(2)"
    }
    addName(firstname){
        cy.get(this.getNameInput).type(firstname)
    }
    addLastname(lastname){
        cy.get(this.getLastnameInput).type(lastname)
    }
    addCardNumber(cardNumber){
        cy.get(this.getCardNumberInput).type(cardNumber)
    }
    submitCheckout(){
        cy.get(this.getSubmitButton).click()
    }


  
}