import { mdToHtml } from '../../src/index';
import { expect, test } from 'vitest';

test('mention', async () => {
  const html = await mdToHtml(`@User@programming.dev`, 'https://example.com');
  expect(html).toBe(
    '<p><a href="https://example.com/u/User@programming.dev">@User@programming.dev</a></p>',
  );
});

test('link', async () => {
  const html = await mdToHtml(
    `https://programming.dev/u/User`,
    'https://example.com',
  );
  expect(html).toBe(
    '<p><a href="https://example.com/u/User@programming.dev">https://programming.dev/u/User</a></p>',
  );
});
