import { App } from '../src/app';

describe('App Test', () => {
  let app: App;

  beforeEach(() => {
    app = new App();
    const html = '<div id="app"></div>';
    document.body.insertAdjacentHTML('afterbegin', html);
  });

  it('shoulder render content', () => {
    app.render('app', 'Hello World');
    expect(document.getElementById('app').innerText).toEqual('Hello World');
  });
});
