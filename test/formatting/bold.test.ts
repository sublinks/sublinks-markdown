import { mdToHtml } from '../../src/index';
import { expect, test } from 'vitest';

test('bold', async () => {
  const html = await mdToHtml(`**Hello World**`, 'https://example.com');
  expect(html).toBe('<p><strong>Hello World</strong></p>');
});

test('bold-underscore', async () => {
  const html = await mdToHtml(`__Hello World__`, 'https://example.com');
  expect(html).toBe('<p><strong>Hello World</strong></p>');
});

test('bold-sentence-start', async () => {
  const html = await mdToHtml(
    `**Hello World**, this is a sentence`,
    'https://example.com',
  );
  expect(html).toBe('<p><strong>Hello World</strong>, this is a sentence</p>');
});

test('bold-sentence-end', async () => {
  const html = await mdToHtml(
    `This is a sentence, **Hello World**`,
    'https://example.com',
  );
  expect(html).toBe('<p>This is a sentence, <strong>Hello World</strong></p>');
});

test('bold-sentence-middle', async () => {
  const html = await mdToHtml(
    `This is a sentence **Hello** World`,
    'https://example.com',
  );
  expect(html).toBe('<p>This is a sentence <strong>Hello</strong> World</p>');
});

test('bold-sentence-multiple', async () => {
  const html = await mdToHtml(
    `This is a sentence **Hello** World **Hello**`,
    'https://example.com',
  );
  expect(html).toBe(
    '<p>This is a sentence <strong>Hello</strong> World <strong>Hello</strong></p>',
  );
});
