import { SentimentjournalPage } from './app.po';

describe('sentimentjournal App', () => {
  let page: SentimentjournalPage;

  beforeEach(() => {
    page = new SentimentjournalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
