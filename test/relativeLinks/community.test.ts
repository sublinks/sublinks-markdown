import { mdToHtml } from '../../src/index';
import { expect, test } from 'vitest';

test('mention', async () => {
  const html = await mdToHtml(
    `!community@programming.dev`,
    'https://example.com',
  );
  expect(html).toBe(
    '<p><a href="https://example.com/c/community@programming.dev">!community@programming.dev</a></p>',
  );
});

test('link', async () => {
  const html = await mdToHtml(
    `https://programming.dev/c/community`,
    'https://example.com',
  );
  expect(html).toBe(
    '<p><a href="https://example.com/c/community@programming.dev">https://programming.dev/c/community</a></p>',
  );
});
