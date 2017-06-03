import { ThreeStateSwitchAppPage } from './app.po';

describe('three-state-switch-app App', () => {
  let page: ThreeStateSwitchAppPage;

  beforeEach(() => {
    page = new ThreeStateSwitchAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
