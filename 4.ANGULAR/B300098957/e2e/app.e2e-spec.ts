import { B300098957Page } from './app.po';

describe('b300098957 App', function() {
  let page: B300098957Page;

  beforeEach(() => {
    page = new B300098957Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
