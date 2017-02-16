import { G300096005Page } from './app.po';

describe('g300096005 App', function() {
  let page: G300096005Page;

  beforeEach(() => {
    page = new G300096005Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
