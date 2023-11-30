describe('admin functionality', () => {
  beforeEach(() => {
    cy.loginAdmin();
  });
  it('search for a product', () => {
    const searchterm = 'winter';
    cy.get('[data-cy="searchproduct"]').type(searchterm);
    cy.get('[data-cy="product"]').should('have.length.greaterThan', 0);
  });

  it('successfully edit product', () => {
    cy.get('[data-cy="updateProduct"]').first().click();
    cy.get('[data-cy="updatedProducttitle"]').clear().type('Old Monk Rum');
    cy.get('[data-cy="updatedProductdescription"]')
      .clear()
      .type(
        'Old monk rum is a Indian rum classified as Dark rum. It has 42% ABV (alcohol by volume). It is offered in 750 ml at Drinks Vine online liquor store. We offer you affordable prices and regular offers coupled with free delivery in Nairobi and environs.'
      );
    cy.get('[data-cy="updatedProductprice"]').clear().type('1800');
    cy.get('[data-cy="updatedProductimage"]')
      .clear()
      .type(
        'https://images.unsplash.com/photo-1575719314727-64ce0e7a03d8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      );
    cy.get('[data-cy="updatedProductstock"]').clear().type('5');
    cy.get('[data-cy="saveChanges"]').click();
  });

  it('fails to edit product', () => {
    cy.get('[data-cy="updateProduct"]').first().click();
    cy.get('[data-cy="updatedProducttitle"]').clear().type('Old Monk Rum');
    cy.get('[data-cy="updatedProductdescription"]').clear().type('Old');
    cy.get('[data-cy="updatedProductprice"]').clear().type('1800');
    cy.get('[data-cy="updatedProductimage"]')
      .clear()
      .type(
        'https://images.unsplash.com/photo-1575719314727-64ce0e7a03d8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      );
    cy.get('[data-cy="updatedProductstock"]').clear().type('5');
    cy.get('[data-cy="saveChanges"]').click();
  });

  it('deletes a product', () => {
    cy.get('[data-cy="deleteProduct"]').first().click();
  });
});

describe('add product', () => {
  beforeEach(() => {
    cy.loginAdmin();

  });
  it('admin adds a product', () => {
    // cy.get('[data-cy="updateProduct"]').first().click();
      cy.get('[data-cy="addProducttitle"]').clear().type('Old Monk Rum');
      cy.get('[data-cy="addProductdescription"]')
        .clear()
        .type(
          'Old monk rum is a Indian rum classified as Dark rum. It has 42% ABV (alcohol by volume). It is offered in 750 ml at Drinks Vine online liquor store. We offer you affordable prices and regular offers coupled with free delivery in Nairobi and environs.'
        );
      cy.get('[data-cy="addProductprice"]').clear().type('1800');
      cy.get('[data-cy="addProductimage"]')
        .clear()
        .type(
          'https://images.unsplash.com/photo-1575719314727-64ce0e7a03d8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        );
      cy.get('[data-cy="addProductstock"]').clear().type('5');
      cy.get('[data-cy="AddChanges"]').click();
  });

  it('admin fails to adds a product', () => {
    cy.get('[data-cy="addProducttitle"]').clear().type('Old Monk Rum');
    cy.get('[data-cy="addProductdescription"]')
      .clear()
      .type(
        'Old'
      );
    cy.get('[data-cy="addProductprice"]').clear().type('1800');
    cy.get('[data-cy="addProductimage"]')
      .clear()
      .type(
        'https://images.unsplash.com/photo-1575719314727-64ce0e7a03d8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      );
    cy.get('[data-cy="addProductstock"]').clear().type('5');
    cy.get('[data-cy="AddChanges"]').click();
  });
});
