import { mdToHtml } from '../../src/index';
import { expect, test } from 'vitest';

test('horizontal-rule', async () => {
  const html = await mdToHtml(`Test\n\n---\n\nTest`, 'https://example.com');
  expect(html).toBe('<p>Test</p>\n<hr>\n<p>Test</p>');
});
