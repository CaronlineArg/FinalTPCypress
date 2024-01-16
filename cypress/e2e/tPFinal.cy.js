/// <reference types="cypress" />
//const constantes=require()
import {FixturesProduct} from "../fixtures/fixturesProduct.json";
import {FixturesCheckout} from "../fixtures/fixturesCheckout.json";

import { HomePage } from "../support/pages/homePage";
import { OnlineShopPage } from "../support/pages/onlineShopPage";
import { ShoppingCartPage } from "../support/pages/shoppingCartPage";
import { CheckoutPage } from "../support/pages/checkoutPage";
import { ReciptPage } from "../support/pages/reciptPage";



describe("TP final",()=>{
    
    const homePage = new HomePage();
    const onlineShopPage = new OnlineShopPage();
    const shoppingCartPage = new ShoppingCartPage();
    const checkoutPage = new CheckoutPage();
    const reciptPage= new ReciptPage();
    let fixturesProduct;
    let fixturesCheckout;

before("Precondiciones", ()=>{

  
   
      cy.fixture('fixturesProduct.json').then((data) => {
        fixturesProduct = data;
      });
  
      cy.fixture('fixturesCheckout.json').then((data) => {
        fixturesCheckout = data;
      });

  
        cy.request({
        url:'https://pushing-it.onrender.com/api/register',
        method:"POST",
        body:{
           
            "username" : Cypress.env().usuario,
            "password" : Cypress.env().contraseña,
            "gender": "F",
            "day": 28,
            "month": 11,
            "year": 2023

            }
        })

       cy.request({
        url:'https://pushing-it.onrender.com/api/login',
        method:"POST",
        body:{
         
            
            "username" : Cypress.env().usuario,
            "password" : Cypress.env().contraseña,
        

            }
       }).then((resp) => {
        window.localStorage.setItem("token",resp.body.token)
        window.localStorage.setItem("user",resp.body.user.username)
       
        
        cy.visit('')
    })
      
    
});



it("Verify shopping functionality choosing 2 products and adding them to the shopping cart, verify the names and prices relationship and the total price values",()=>{
    

    onlineShopPage.goToOnlineShop();
    onlineShopPage.addToCartProductButtonClick(fixturesProduct.blackTShirt.name);
    onlineShopPage.closeAddToCartModalButtonClick(fixturesProduct.blackTShirt.name);
    onlineShopPage.addToCartProductButtonClick(fixturesProduct.whitePants.name);
    onlineShopPage.closeAddToCartModalButtonClick(fixturesProduct.whitePants.name);
    onlineShopPage.goToShoppingCartButtonClick();
    shoppingCartPage.verifyProductName(fixturesProduct.blackTShirt.name);
    shoppingCartPage.verifyProductPrice(fixturesProduct.blackTShirt.name,fixturesProduct.blackTShirt.price);
    
    shoppingCartPage.verifyProductName(fixturesProduct.whitePants.name);
    shoppingCartPage.verifyProductPrice(fixturesProduct.whitePants.name,fixturesProduct.whitePants.price);
    shoppingCartPage.clickShowTotalPrice();
    shoppingCartPage.verifyTotalPrice( parseInt(fixturesProduct.blackTShirt.price)+ parseInt(fixturesProduct.whitePants.price));

    shoppingCartPage.goToCheckout();

    checkoutPage.addName(fixturesCheckout.datos.firstname)
    checkoutPage.addLastname(fixturesCheckout.datos.lastname)
    checkoutPage.addCardNumber(fixturesCheckout.datos.cardNumber)
    checkoutPage.submitCheckout();
    

    reciptPage.verifyCompleteName(fixturesCheckout.datos.firstname, fixturesCheckout.datos.lastname) ;
    reciptPage.verifyProductsNames(fixturesProduct.blackTShirt.name, fixturesProduct.whitePants.name) ;
    reciptPage.verifyCardNumber(fixturesCheckout.datos.cardNumber);
    reciptPage.verifyTotalPrice(parseInt(fixturesProduct.blackTShirt.price)+parseInt(fixturesProduct.whitePants.price)) ;
    reciptPage.clickThankYouButton();
   
  
})
after(()=>{
    cy.request({
        url:`https://pushing-it.onrender.com/api/deleteuser/${Cypress.env().usuario}`,
        method:"DELETE"        
       })
});
})
