describe('Search for album by name', () => {
    it('should show searched algum if it exists ', () => {
        cy.visit('http://localhost:3000');
        cy.searchForAlbum();
        cy.cleanInput();
        cy.searchForSinger();
    });
});

export {};
