import { axeCheck, createReport } from 'axe-testcafe';
 
fixture `TestCafe tests with Axe`
    .page `http://example.com`;
 
test('Automated accessibility testing', async t => {
    const { error, violations } = await axeCheck(t);
    await t.expect(violations.length === 0).ok(createReport(violations));
});