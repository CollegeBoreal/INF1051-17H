import { RevisionPage } from './app.po';

describe('revision App', function() {
  let page: RevisionPage;

  beforeEach(() => {
    page = new RevisionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
