/*!
 * Chalk with Markers
 * https://github.com/KeesCBakker/chalk-with-markers
 * http://keestalkstech.com
 *
 * Copyright Kees C. Bakker / KeesTalksTech
 * Released under the MIT license
 */

import chalk from 'chalk';
import {ChalkInstance} from "chalk"

export class Chalker {
  private map: Map<string, ChalkInstance>;

  constructor(map: Map<string, ChalkInstance> | null = null) {
    if (map) {
      this.map = map;
    } else {
      this.map = new Map<string, ChalkInstance>();
    }
  }

  set(key: string, value: ChalkInstance) {
    this.map.set(key, value);
  }

  setByHex(key: string, value: string) {
    if (value && !value.startsWith("#")) {
      value = "#" + value;
    }

    this.map.set(key, chalk.hex(value));
  }

  clone() {
    return new Chalker(new Map(this.map));
  }

  colorize(str: string) {
    this.map.forEach((value: ChalkInstance, key: string) => {
      const r = createRegex(key);
      const split = str.split(r);
      if (split && split.length > 1) {
        //console.log("replace debug", key, split.length);
        for (let i = 1; i < split.length; i++) {
          if (split[i] != "") {
            split[i] = value(split[i]);
          }
        }
        str = split.join("");
      }
    });
    return str;
  }
}

function createRegex(key: string) {
  if (key == "m") {
    return /(?<!\u001b\[(\d+;)*\d+)m/;
  }

  key = key.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  return new RegExp(key);
}

export function generateDefaultMap(key: (key: string) => string) {
  return new Map([
    [key("r"), chalk.hex("FF0000")], // HTML red
    [key("g"), chalk.hex("00FF00")], // HTML lime
    [key("b"), chalk.hex("0080FF")], // HTML light blue
    [key("y"), chalk.hex("FFFF00")], // HTML yellow
    [key("m"), chalk.hex("FF00FF")], // HTML magenta
    [key("c"), chalk.hex("00FFFF")], // HTML cyan
    [key("w"), chalk.hex("FFFFFF")], // HTML white
    [key("o"), chalk.hex("FFA500")], // HTML orange
    [key("k"), chalk.hex("000000")], // HTML black
    [key("p"), chalk.hex("B266FF")], // HTML purple
    [key("q"), chalk.reset],
  ]);
}

export const chalker = new Chalker(generateDefaultMap((k) => `[${k}]`));
chalker.set("[/]", chalk.reset);

export const asciiArtChalker = new Chalker(generateDefaultMap((k) => k));
