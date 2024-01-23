import { mdToHtml } from '../../src/index';
import { expect, test } from 'vitest';

test('line', async () => {
  const html = await mdToHtml(`Hello World`, 'https://example.com');
  expect(html).toBe('<p>Hello World</p>');
});

test('soft-break', async () => {
  const html = await mdToHtml(`Hello\nWorld`, 'https://example.com');
  expect(html).toBe('<p>Hello\nWorld</p>');
});

test('hard-break', async () => {
  const html = await mdToHtml(`Hello  \nWorld`, 'https://example.com');
  expect(html).toBe('<p>Hello<br>\nWorld</p>');
});

test('new-paragraph', async () => {
  const html = await mdToHtml(`Hello\n\nWorld`, 'https://example.com');
  expect(html).toBe('<p>Hello</p>\n<p>World</p>');
});

test('new-paragraph-2', async () => {
  const html = await mdToHtml(`Hello\n\n\nWorld`, 'https://example.com');
  expect(html).toBe('<p>Hello</p>\n<p>World</p>');
});

test('hard-break-backslash', async () => {
  const html = await mdToHtml(`Hello\\\nWorld`, 'https://example.com');
  expect(html).toBe('<p>Hello<br>\nWorld</p>');
});
