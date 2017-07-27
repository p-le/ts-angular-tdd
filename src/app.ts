export class App {
  public render(divId: string, text: string) {
    const el: HTMLElement = document.getElementById(divId);
    el.innerText = text;
  }
}

window.onload = () => {
  const app = new App();
  app.render('app', 'Hello World');
};
