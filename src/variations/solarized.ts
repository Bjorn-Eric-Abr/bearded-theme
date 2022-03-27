import { Theme, ThemeColors, ThemeLevels } from "../typing";

const solarizedColors: ThemeColors = {
  blue: "#268bd2",
  green: "#859900",
  greenAlt: "#A4EF58",
  orange: "#ca7016",
  pink: "#cf61b1",
  purple: "#767cde",
  red: "#d42613",
  salmon: "#d33682",
  turquoize: "#2aa198",
  yellow: "#b58900",
};

const solarizedLevels: ThemeLevels = {
  danger: solarizedColors.red,
  success: solarizedColors.green,
  warning: solarizedColors.yellow,
  info: solarizedColors.blue,
};

export const solarizedDark: Theme = {
  ui: {
    primary: "#199FBE",
    primaryalt: "#003947",
    uiborder: "#001b21",
    uibackground: "#002b36",
    uibackgroundalt: "#002229",
    default: "#cedbdb",
    defaultMain: "#B8C6C6",
    defaultalt: "#547783",
  },
  colors: solarizedColors,
  levels: solarizedLevels,
};

export const solarizedLight: Theme = {
  ui: {
    primary: "#2aa198",
    primaryalt: "#fff9ea",
    uiborder: "#d8cfbb",
    uibackground: "#fdf6e3",
    uibackgroundalt: "#eee8d5",
    default: "#073642",
    defaultMain: "#0B4A5A",
    defaultalt: "#657b83",
  },
  colors: solarizedColors,
  levels: solarizedLevels,
};

// Oceanic

const oceanicColors: ThemeColors = {
  blue: "#6498ce",
  green: "#97c892",
  greenAlt: "#A4EF58",
  orange: "#DC8255",
  pink: "#d194cd",
  purple: "#978dd6",
  red: "#B4552D",
  salmon: "#ee5d64",
  turquoize: "#5bb3b4",
  yellow: "#fbc95a",
};

export const oceanic: Theme = {
  ui: {
    primary: "#97c892",
    primaryalt: "#254A52",
    uiborder: "#111C22",
    uibackground: "#1a2b34",
    uibackgroundalt: "#16242C",
    default: "#D3DFDB",
    defaultMain: "#A6BAB4",
    defaultalt: "#51727C",
  },
  colors: oceanicColors,
  levels: {
    danger: oceanicColors.salmon,
    success: oceanicColors.green,
    warning: oceanicColors.orange,
    info: oceanicColors.blue,
  },
};
