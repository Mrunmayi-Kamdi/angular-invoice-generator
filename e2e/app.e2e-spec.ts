import { InvoiceGeneratorPage } from './app.po';

describe('invoice-generator App', () => {
  let page: InvoiceGeneratorPage;

  beforeEach(() => {
    page = new InvoiceGeneratorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
