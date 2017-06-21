/**
 * @license
 * Copyright (c) 2017 Łukasz Kurowski <crackcomm@gmail.com>
 */

import * as cheerio from 'cheerio';

export class HTML {
  private find: any;

  constructor(body: string) {
    this.find = cheerio.load(body);
  }

  text(selector: string): string {
    return this.find(selector).text();
  }

}
