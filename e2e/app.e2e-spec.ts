import { ReduxLayoutTutorialAppPage } from './app.po';

describe('redux-layout-tutorial-app App', () => {
  let page: ReduxLayoutTutorialAppPage;

  beforeEach(() => {
    page = new ReduxLayoutTutorialAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
