import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

process.env.FORCE_COLOR = '3';

const { chalker, asciiArtChalker, Chalker } = await import('../dist/index.mjs');
const { default: chalk } = await import('chalk');

describe('chalker', () => {
  it('colorizes RGB markers', () => {
    const str = chalker.colorize('[r]r[g]g[b]b[r]r[g]g[b]b');
    assert.strictEqual(str, '\u001b[38;2;255;0;0mr\u001b[38;2;0;255;0mg\u001b[38;2;0;128;255mb\u001b[39m\u001b[38;2;0;128;255m\u001b[38;2;0;255;0m\u001b[38;2;255;0;0mr\u001b[39m\u001b[38;2;0;128;255m\u001b[38;2;0;255;0mg\u001b[39m\u001b[38;2;0;128;255mb\u001b[39m\u001b[38;2;0;128;255m\u001b[38;2;0;255;0m\u001b[39m\u001b[38;2;0;128;255m\u001b[39m');
  });

  it('supports reset markers', () => {
    const str = chalker.colorize('Hello [y]World[/]!');
    assert.strictEqual(str, 'Hello \u001b[38;2;255;255;0mWorld\u001b[0m!\u001b[39m\u001b[0m');
  });
});

describe('asciiArtChalker', () => {
  it('colorizes RGB markers', () => {
    const str = asciiArtChalker.colorize('rRgGbB');
    assert.strictEqual(str, '\u001b[38;2;255;0;0mR\u001b[38;2;0;255;0mG\u001b[38;2;0;128;255mB\u001b[39m\u001b[38;2;0;128;255m\u001b[38;2;0;255;0m\u001b[39m\u001b[38;2;0;128;255m\u001b[39m');
  });
});

describe('Chalker', () => {
  it('supports custom mappings', () => {
    const chalker = new Chalker();
    chalker.set('[r]', chalk.bgRed.black);
    chalker.set('[w]', chalk.bgWhite.black);
    chalker.set('[b]', chalk.bgBlue.black);
    chalker.set('[/]', chalk.reset);

    assert.strictEqual(chalker.colorize('[r]red[/]'), '\u001b[41m\u001b[30mred\u001b[0m\u001b[39m\u001b[49m\u001b[0m');
  });
});
