import { SimpleBoardPage } from './app.po';

describe('simple-board App', () => {
  let page: SimpleBoardPage;

  beforeEach(() => {
    page = new SimpleBoardPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
