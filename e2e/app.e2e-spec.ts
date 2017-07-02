import { Angular2BlogPage } from './app.po';

describe('angular2-blog App', () => {
  let page: Angular2BlogPage;

  beforeEach(() => {
    page = new Angular2BlogPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
