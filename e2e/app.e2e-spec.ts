import { MedicalPage } from './app.po';

describe('medical App', () => {
  let page: MedicalPage;

  beforeEach(() => {
    page = new MedicalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
