import { TedushopAdmin2Page } from './app.po';

describe('tedushop-admin2 App', () => {
  let page: TedushopAdmin2Page;

  beforeEach(() => {
    page = new TedushopAdmin2Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
