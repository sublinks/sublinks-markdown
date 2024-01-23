import { mdToHtml } from '../../src/index';
import { expect, test } from 'vitest';

test('ordered-list', async () => {
  const html = await mdToHtml(
    `1. Item 1
2. Item 2
3. Item 3`,
    'https://example.com',
  );
  expect(html).toBe(
    '<ol>\n<li>Item 1</li>\n<li>Item 2</li>\n<li>Item 3</li>\n</ol>',
  );
});

test('ordered-list-2', async () => {
  const html = await mdToHtml(
    `1. Item 1
1. Item 2
1. Item 3`,
    'https://example.com',
  );
  expect(html).toBe(
    '<ol>\n<li>Item 1</li>\n<li>Item 2</li>\n<li>Item 3</li>\n</ol>',
  );
});

test('ordered-list-3', async () => {
  const html = await mdToHtml(
    `1) Item 1
2) Item 2
3) Item 3`,
    'https://example.com',
  );
  expect(html).toBe(
    '<ol>\n<li>Item 1</li>\n<li>Item 2</li>\n<li>Item 3</li>\n</ol>',
  );
});

test('ordered-list-4', async () => {
  const html = await mdToHtml(
    `1) Item 1
1) Item 2
1) Item 3`,
    'https://example.com',
  );
  expect(html).toBe(
    '<ol>\n<li>Item 1</li>\n<li>Item 2</li>\n<li>Item 3</li>\n</ol>',
  );
});

test('unordered-list', async () => {
  const html = await mdToHtml(
    `- Item 1
- Item 2
- Item 3`,
    'https://example.com',
  );
  expect(html).toBe(
    '<ul>\n<li>Item 1</li>\n<li>Item 2</li>\n<li>Item 3</li>\n</ul>',
  );
});

test('unordered-list-2', async () => {
  const html = await mdToHtml(
    `* Item 1
* Item 2
* Item 3`,
    'https://example.com',
  );
  expect(html).toBe(
    '<ul>\n<li>Item 1</li>\n<li>Item 2</li>\n<li>Item 3</li>\n</ul>',
  );
});
