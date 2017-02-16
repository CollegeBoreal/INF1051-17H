import { Gu300096005Page } from './app.po';

describe('gu300096005 App', function() {
  let page: Gu300096005Page;

  beforeEach(() => {
    page = new Gu300096005Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
