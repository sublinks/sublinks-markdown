import { mdToHtml } from '../../src/index';
import { expect, test } from 'vitest';

test('bold-italic', async () => {
  const html = await mdToHtml(`***Hello World***`, 'https://example.com');
  expect(html).toBe('<p><em><strong>Hello World</strong></em></p>');
});

test('bold-underscore-italic', async () => {
  const html = await mdToHtml(`__*Hello World*__`, 'https://example.com');
  expect(html).toBe('<p><strong><em>Hello World</em></strong></p>');
});

test('bold-italic-underscore', async () => {
  const html = await mdToHtml(`**_Hello World_**`, 'https://example.com');
  expect(html).toBe('<p><strong><em>Hello World</em></strong></p>');
});

test('italic-underscore-bold', async () => {
  const html = await mdToHtml(`_**Hello World**_`, 'https://example.com');
  expect(html).toBe('<p><em><strong>Hello World</strong></em></p>');
});

test('italic-bold-underscore', async () => {
  const html = await mdToHtml(`*__Hello World__*`, 'https://example.com');
  expect(html).toBe('<p><em><strong>Hello World</strong></em></p>');
});

test('bold-underscore-italic-underscore', async () => {
  const html = await mdToHtml(`___Hello World___`, 'https://example.com');
  expect(html).toBe('<p><em><strong>Hello World</strong></em></p>');
});
