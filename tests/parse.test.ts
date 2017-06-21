/**
 * @license
 * Copyright (c) 2017 Łukasz Kurowski <crackcomm@gmail.com>
 */

import { HTML } from '../src';

describe('HTML', () => {
  it('should parse text', () => {
    const text = 'Hello world!';
    const body = `<html><h1>${text}</h1></html>`;
    const html = new HTML(body);
    expect(html.text('h1')).toEqual(text);
  });
});
