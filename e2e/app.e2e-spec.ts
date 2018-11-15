import { TicketsAdminPage } from './app.po';

describe('tickets-admin App', function() {
  let page: TicketsAdminPage;

  beforeEach(() => {
    page = new TicketsAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
