# Chalk with Markers -- for the 💖 of 💄 ASCII art 🤙

I. Love. ASCII. Art. Seriously I can't make a NodeJS CLI or Chatbot without adding a decent splash-screen to it. That's why I love <a href="https://www.npmjs.com/package/chalk">Chalk</a>. But creating those strings got a little too verbose, that's why I created this simple lib.


```js
const { asciiArtChalker } = require("chalk-with-markers");

console.log(asciiArtChalker.colorize(`

b   ______g__  __y____o__    r__ __
b  / ____/g / / /y  _/o /   r/ //_/
b / /   g/ /_/ /y/ /o/ /   r/ ,<   
b/ /___g/ __  /y/ /o/ /___r/ /| |  
b\\____/g_/ /_/y___/o_____/r_/ |_|  

`));
```

It produces:

<img src="resources/ChilkSplash.png" width="600" />

Note: I use the <a href="https://patorjk.com/software/taag/#p=display&f=Graffiti&t=CHILK">TAAG by patorjk</a> to generate the art.


## Text highlight
If you want to highlight text, we use the default `chalker` like this:

```js
const { chalker } = require("chalk-with-markers");

console.log("Results:");
console.log(chalker.colorize("- Checked status for [y]KeesTalksTech[/], website is [g]online[/]."));
console.log(chalker.colorize("- Checked status for [y]Recipes[/], website is [r]offline[/]."));
```

It produces:

<img src="resources/ChilkText.png" width="600" />

## Own mappings
Can I make my own tokens? Yes, you can!

```js
const { Chalker } = require("chalk-with-markers");
const chalk = require("chalk");

const x = new Chalker();
x.set("[r]", chalk.bgRed.black);
x.set("[w]", chalk.bgWhite.black);
x.set("[b]", chalk.bgBlue.black);
x.set("[/]", chalk.reset);

console.log(x.colorize(`
[r] X X X X 
[w]  X X X  
[b] X X X X 
[/]         `));
});

```

It produces:

<img src="resources/ChilkDutchFlag.png" width="600" />

## Extend
Can I extend the mappings? Yes you can!

```js
const { asciiArtChalker } = require("chalk-with-markers");
const chalk = require("chalk");

// global extend:
asciiArtChalker.set("p", chalk.hex("#FFC0CB")); // add HTML pink

// or clone to use extend locally:
const x = asciiArtChalker.clone();
x.set("p", chalk.hex("#FFC0CB")); // add HTML pink


```

## Default color markings
We have the following 

| color                                                     | HTML name  | HEX      | `chalker` marker | `asciiArtChalker` marker | notes |
| --------------------------------------------------------- | ---------- | -------- | ---------------- | ------------------------ | ----- |
| ![#FF0000](https://via.placeholder.com/25/FF0000/?text=+) | red        | `FF0000` | `[r]`            | `r`                      |       |
| ![#00FF00](https://via.placeholder.com/25/00FF00/?text=+) | lime       | `00FF00` | `[g]`            | `g`                      |       |
| ![#0080FF](https://via.placeholder.com/25/0080FF/?text=+) | light blue | `00FF00` | `[b]`            | `b`                      |       |
| ![#0080FF](https://via.placeholder.com/25/0080FF/?text=+) | yellow     | `0080FF` | `[y]`            | `y`                      |       |
| ![#FF00FF](https://via.placeholder.com/25/FF00FF/?text=+) | magenta    | `FF00FF` | `[m]`            | `m`                      |       |
| ![#00FFFF](https://via.placeholder.com/25/FF00FF/?text=+) | cyan       | `00FFFF` | `[c]`            | `c`                      |       |
| ![#FFA500](https://via.placeholder.com/25/FFA500/?text=+) | orange     | `FFA500` | `[o]`            | `o`                      |       |
| ![#FFFFFF](https://via.placeholder.com/25/FFFFFF/?text=+) | white      | `FFFFFF` | `[w]`            | `w`                      |       |
| ![#000000](https://via.placeholder.com/25/000000/?text=+) | black      | `000000` | `[b]`            | `b`                      |       |
|                                                           |            |          | `[q]` or `[/]`   | `q`                      | reset |