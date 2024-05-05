import { Code } from "bright";
import type { CSSProperties } from "react";

import { title } from "./bright-extensions.js";

Code.theme = {
  dark: "github-dark",
  light: "github-light",
  lightSelector: "html[data-theme='light']",
};
Code.extensions = [title];
Code.className =
  "!rounded-lg !border !border-neutral-300 dark:!border-neutral-800";
Code.style = {
  "--tab-top-border": "transparent",
} as unknown as CSSProperties;

export { Code };
