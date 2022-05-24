/// <reference types="cypress" />
import "./commands";
declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * a helper method to simulate clicking outside of the element
             */
            clickOutside(): Chainable<JQuery<HTMLBodyElement>>;
            /**
             * this is an alias method to cy.get(`[data-ui=${value}]`)
             * @param value the value of "data-ui" attribute in DOM
             */
            getDataUi(value: string): Chainable<JQuery<HTMLElement>>;
        }
    }
}
