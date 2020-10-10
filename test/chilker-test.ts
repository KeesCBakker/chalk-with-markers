import { chilker, asciiArtChilker } from '../src';
import { expect } from "chai";


describe("chilker", () => {

    it.only("RGB", () => {
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
