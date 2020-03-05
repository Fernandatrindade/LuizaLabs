describe('Square Lab', () => {
    it('Longuer Click', () => {
        cy.visit('./index.html')

        
		for (var i = 0; i < 2; i++) {
            cy.get('.square').trigger('mousedown')
            cy.wait(5000)
            cy.get('.square').trigger('mouseleave')     
        }
        
        cy.wait(5000)
        cy.get('.square').trigger('mouseleave')
        cy.get('.square').should('have.css', 'width').and('match', /90/)
        cy.get('.square').should('have.css', 'height').and('match', /90/)
       
    });

});