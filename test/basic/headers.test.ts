import { mdToHtml } from '../../src/index';
import { expect, test } from 'vitest';

test('header1', async () => {
  const html = await mdToHtml(`# Hello World`, 'https://example.com');
  expect(html).toBe('<h1>Hello World</h1>');
});

test('header1-line', async () => {
  const html = await mdToHtml(`Hello World\n==`, 'https://example.com');
  expect(html).toBe('<h1>Hello World</h1>');
});

test('header2', async () => {
  const html = await mdToHtml(`## Hello World`, 'https://example.com');
  expect(html).toBe('<h2>Hello World</h2>');
});

test('header2-line', async () => {
  const html = await mdToHtml(`Hello World\n--`, 'https://example.com');
  expect(html).toBe('<h2>Hello World</h2>');
});

test('header3', async () => {
  const html = await mdToHtml(`### Hello World`, 'https://example.com');
  expect(html).toBe('<h3>Hello World</h3>');
});

test('header4', async () => {
  const html = await mdToHtml(`#### Hello World`, 'https://example.com');
  expect(html).toBe('<h4>Hello World</h4>');
});

test('header5', async () => {
  const html = await mdToHtml(`##### Hello World`, 'https://example.com');
  expect(html).toBe('<h5>Hello World</h5>');
});

test('header6', async () => {
  const html = await mdToHtml(`###### Hello World`, 'https://example.com');
  expect(html).toBe('<h6>Hello World</h6>');
});
