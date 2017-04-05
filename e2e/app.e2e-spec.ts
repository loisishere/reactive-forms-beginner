import { ReactiveFormsBeginnerPage } from './app.po';

describe('reactive-forms-beginner App', () => {
  let page: ReactiveFormsBeginnerPage;

  beforeEach(() => {
    page = new ReactiveFormsBeginnerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
