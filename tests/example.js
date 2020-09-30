import { Selector } from 'testcafe';

fixture`Getting Started`
  .meta({ author: 'Shaun' })
  .page`http://www.google.com`;

test
  .meta({ type: 'example test' })

  ('An example test', async t => {
    const submitButton = Selector('input[type=text]');
    
    await t
      .typeText(Selector(submitButton), 'Testing')
      .click('[value="Google Search"]', { visibilityCheck: true })
  })