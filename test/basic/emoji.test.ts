import { mdToHtml } from '../../src/index';
import { expect, test } from 'vitest';

test('dog', async () => {
  const html = await mdToHtml(`:dog:`, 'https://example.com');
  expect(html).toBe('<p>🐶</p>');
});

test('cat', async () => {
  const html = await mdToHtml(`:cat:`, 'https://example.com');
  expect(html).toBe('<p>🐱</p>');
});

test('pig', async () => {
  const html = await mdToHtml(`:pig:`, 'https://example.com');
  expect(html).toBe('<p>🐷</p>');
});

test('frog', async () => {
  const html = await mdToHtml(`:frog:`, 'https://example.com');
  expect(html).toBe('<p>🐸</p>');
});

test('hamster', async () => {
  const html = await mdToHtml(`:hamster:`, 'https://example.com');
  expect(html).toBe('<p>🐹</p>');
});
