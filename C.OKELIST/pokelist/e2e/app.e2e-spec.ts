import { PokelistPage } from './app.po';

describe('pokelist App', function() {
  let page: PokelistPage;

  beforeEach(() => {
    page = new PokelistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
