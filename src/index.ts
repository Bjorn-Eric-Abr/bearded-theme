import { writeFile } from "fs";
import syntax from "./scopes/scopes";
import semanticTokens from "./scopes/semanticTokens";
import { Theme } from "./typing";
import ui from "./ui";
import { arc, arcBlueBerry, arcEggplant, arcEolstorm } from "./variations/arc";
import { blackAndAmethyst, blackAndDiamond, blackAndEmerald, blackAndGold, blackAndRuby } from "./variations/black";
import { anthracite, light } from "./variations/classics";
import { altica, earth, voided, coffee, coffeeCream, will } from "./variations/exotic";
import { monokaiBlack, monokaiMetallian, monokaiStone, monokaiTerra } from "./variations/monokai";
import { oceanic, solarizedDark, solarizedLight } from "./variations/solarized";
import { stainedBlue, stainedPurple } from "./variations/stained";
import { surprisingBlueberry, surprisingEggplant, surprisingWatermelon } from "./variations/surprising";
import { tester } from "./variations/tester";
import { vividBlack, vividLight, vividPurple } from "./variations/vivid";
import { rosePine } from "./variations/rosepine";

function makeTheme(name: string, theme: Theme): void {
  const themeTemplate = {
    $schema: "vscode://schemas/color-theme",
    name: `BeardedTheme ${name.charAt(0).toUpperCase()}${name.slice(1)}`,
    semanticHighlighting: true,
    semanticTokenColors: semanticTokens(theme),
    colors: ui(theme),
    tokenColors: syntax(theme),
  };

  writeFile(`themes/bearded-theme-${name}.json`, JSON.stringify(themeTemplate), (err) => {
    if (err) console.log("error", err);
  });
}

// Slurp
makeTheme("rose-pine", rosePine);

// Slurp
makeTheme("slurp", slurp);

// Tester
makeTheme("tester", tester);

// Arc
makeTheme("arc", arc);
makeTheme("arc-eolstorm", arcEolstorm);
makeTheme("arc-blueberry", arcBlueBerry);
makeTheme("arc-eggplant", arcEggplant);

// Solarized
makeTheme("oceanic", oceanic);
makeTheme("solarized-dark", solarizedDark);
makeTheme("solarized-light", solarizedLight);

// Black
makeTheme("black-amethyst", blackAndAmethyst);
makeTheme("black-diamond", blackAndDiamond);
makeTheme("black-emerald", blackAndEmerald);
makeTheme("black-gold", blackAndGold);
makeTheme("black-ruby", blackAndRuby);

// Stained
makeTheme("stained-purple", stainedPurple);
makeTheme("stained-blue", stainedBlue);

// Vivid
makeTheme("vivid-purple", vividPurple);
makeTheme("vivid-black", vividBlack);
makeTheme("vivid-light", vividLight);

// Monokai
makeTheme("monokai-terra", monokaiTerra);
makeTheme("monokai-metallian", monokaiMetallian);
makeTheme("monokai-stone", monokaiStone);
makeTheme("monokai-black", monokaiBlack);

// Exotic
makeTheme("exotic-earth", earth);
makeTheme("coffee", coffee);
makeTheme("coffee-cream", coffeeCream);
makeTheme("exotic-void", voided);
makeTheme("exotic-altica", altica);
makeTheme("will", will);

// Classics
makeTheme("classics-anthracite", anthracite);
makeTheme("classics-light", light);

// Surprising
makeTheme("surprising-eggplant", surprisingEggplant);
makeTheme("surprising-blueberry", surprisingBlueberry);
makeTheme("surprising-watermelon", surprisingWatermelon);
