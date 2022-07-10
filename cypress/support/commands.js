Cypress.Commands.add('searchForAlbum', () => {
  cy.request(
    'https://rss.applemarketingtools.com/api/v2/us/music/most-played/50/albums.json'
  ).then((data) => {
    const genreName = data.body.feed.results[0].name;
    cy.get('[data-cy="search-input"]').type(`${genreName}`);

    const innextText = cy.get('[data-cy="album-name"]');

    innextText.should('have.text', genreName);
  });
});
Cypress.Commands.add('searchForSinger', () => {
  cy.request(
    'https://rss.applemarketingtools.com/api/v2/us/music/most-played/50/albums.json'
  ).then((data) => {
    const artistName = data.body.feed.results[0].artistName;
    cy.get('[data-cy="search-input"]').type(`${artistName}`);

    const innextText = cy.get('[data-cy="artist-name"]').first();

    innextText.should('have.text', artistName);
  });
});
Cypress.Commands.add('cleanInput', () => {
  cy.get('[data-cy="search-input"]').invoke('val', '');
});

Cypress.Commands.add('accessAlbum', () => {
  cy.request(
    'https://rss.applemarketingtools.com/api/v2/us/music/most-played/50/albums.json'
  ).then((data) => {
    const albumData = data.body.feed.results[0];
    cy.get('[data-cy="search-input"]').type(`${albumData.name}`);

    cy.get('[data-cy="album-name"]').first().click();

    cy.url().should('eq', `${albumData.url}`);
  });
});
