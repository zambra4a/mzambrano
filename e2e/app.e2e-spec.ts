import { MzambranoPage } from './app.po';

describe('mzambrano App', () => {
  let page: MzambranoPage;

  beforeEach(() => {
    page = new MzambranoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
