import { mdToHtml } from '../../src/index';
import { expect, test } from 'vitest';

test('italic', async () => {
  const html = await mdToHtml(`*Hello World*`, 'https://example.com');
  expect(html).toBe('<p><em>Hello World</em></p>');
});

test('italic-underscore', async () => {
  const html = await mdToHtml(`_Hello World_`, 'https://example.com');
  expect(html).toBe('<p><em>Hello World</em></p>');
});

test('italic-sentence-start', async () => {
  const html = await mdToHtml(
    `*Hello World*, this is a sentence`,
    'https://example.com',
  );
  expect(html).toBe('<p><em>Hello World</em>, this is a sentence</p>');
});

test('italic-sentence-end', async () => {
  const html = await mdToHtml(
    `This is a sentence, *Hello World*`,
    'https://example.com',
  );
  expect(html).toBe('<p>This is a sentence, <em>Hello World</em></p>');
});

test('italic-sentence-middle', async () => {
  const html = await mdToHtml(
    `This is a sentence *Hello* World`,
    'https://example.com',
  );
  expect(html).toBe('<p>This is a sentence <em>Hello</em> World</p>');
});

test('italic-sentence-multiple', async () => {
  const html = await mdToHtml(
    `This is a sentence *Hello* World *Hello*`,
    'https://example.com',
  );
  expect(html).toBe(
    '<p>This is a sentence <em>Hello</em> World <em>Hello</em></p>',
  );
});
