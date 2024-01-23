import { mdToHtml } from '../../src/index';
import { expect, test } from 'vitest';

test('strikethrough', async () => {
  const html = await mdToHtml(`~~Hello World~~`, 'https://example.com');
  expect(html).toBe('<p><del>Hello World</del></p>');
});

test('strikethrough-one', async () => {
  const html = await mdToHtml(`~Hello World~`, 'https://example.com');
  expect(html).toBe('<p><del>Hello World</del></p>');
});

test('strikethrough-sentence-start', async () => {
  const html = await mdToHtml(
    `~~Hello World~~, this is a sentence`,
    'https://example.com',
  );
  expect(html).toBe('<p><del>Hello World</del>, this is a sentence</p>');
});

test('strikethrough-sentence-end', async () => {
  const html = await mdToHtml(
    `This is a sentence, ~~Hello World~~`,
    'https://example.com',
  );
  expect(html).toBe('<p>This is a sentence, <del>Hello World</del></p>');
});

test('strikethrough-sentence-middle', async () => {
  const html = await mdToHtml(
    `This is a sentence ~~Hello~~ World`,
    'https://example.com',
  );
  expect(html).toBe('<p>This is a sentence <del>Hello</del> World</p>');
});

test('strikethrough-sentence-multiple', async () => {
  const html = await mdToHtml(
    `This is a sentence ~~Hello~~ World ~~Hello~~`,
    'https://example.com',
  );
  expect(html).toBe(
    '<p>This is a sentence <del>Hello</del> World <del>Hello</del></p>',
  );
});
