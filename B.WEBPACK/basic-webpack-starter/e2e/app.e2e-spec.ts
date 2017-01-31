import { BasicWebpackStarterPage } from './app.po';

describe('basic-webpack-starter App', function() {
  let page: BasicWebpackStarterPage;

  beforeEach(() => {
    page = new BasicWebpackStarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
