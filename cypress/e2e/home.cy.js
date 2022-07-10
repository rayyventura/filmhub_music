describe('Search for album by name', () => {
  it('should show searched algum if it exists ', () => {
    cy.visit('http://localhost:3000');
    cy.searchForAlbum();
    cy.cleanInput();
    cy.searchForSinger();
  });
});

describe('Navigate to album page', () => {
  it('should click on an album and be redirected to its page  ', () => {
    cy.visit('http://localhost:3000');
    cy.accessAlbum();
  });
});
export {};
