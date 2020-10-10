import { chilker, asciiArtChilker, Chilker} from '../src';
import { expect } from "chai";
import chalk from "chalk";

describe("custom", () => {

    it("MD example", ()=>{
    

        const x = new Chilker();
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

});

describe("chilker", () => {

    it("RGB", () => {
        const str = chilker.colorize("[r]r[g]g[b]b[r]r[g]g[b]b");
        expect(str).to.eql("\u001b[38;2;255;0;0mr\u001b[38;2;0;255;0mg\u001b[38;2;0;128;255mb\u001b[39m\u001b[38;2;0;128;255m\u001b[38;2;0;255;0m\u001b[38;2;255;0;0mr\u001b[39m\u001b[38;2;0;128;255m\u001b[38;2;0;255;0mg\u001b[39m\u001b[38;2;0;128;255mb\u001b[39m\u001b[38;2;0;128;255m\u001b[38;2;0;255;0m\u001b[39m\u001b[38;2;0;128;255m\u001b[39m");
    });

    it("Yellow highlight", () => {
        const str = chilker.colorize("Hello [y]World[/]!");
        expect(str).to.eql("Hello \u001b[38;2;255;255;0mWorld\u001b[0m!\u001b[39m\u001b[0m");
    });

});

describe("asciiArtChilker", () => {

    it("RGB", () => {
        const str = asciiArtChilker.colorize("rRgGbB");
        expect(str).to.eql("\u001b[38;2;255;0;0mR\u001b[38;2;0;255;0mG\u001b[38;2;0;128;255mB\u001b[39m\u001b[38;2;0;128;255m\u001b[38;2;0;255;0m\u001b[39m\u001b[38;2;0;128;255m\u001b[39m");
    });

});

describe("Visuals", () => {

    it("Splash", () => {
        console.log();
        console.log();
        console.log(asciiArtChilker.colorize(`
b   ______g__  __y____o__    r__ __
b  / ____/g / / /y  _/o /   r/ //_/
b / /   g/ /_/ /y/ /o/ /   r/ ,<   
b/ /___g/ __  /y/ /o/ /___r/ /| |  
b\\____/g_/ /_/y___/o_____/r_/ |_|  
`));

        console.log();
        console.log();
    });


    it("Status", ()=>{
        console.log();
        console.log("Results:");
        console.log(chilker.colorize("- Checked status for [y]KeesTalksTech[/], website is [g]online[/]."));
        console.log(chilker.colorize("- Checked status for [y]Recipes[/], website is [r]offline[/]."));
        console.log();
        console.log();
    });

});


