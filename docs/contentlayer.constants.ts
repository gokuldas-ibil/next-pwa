import rehypeShiki from "@shikijs/rehype";
import { githubDark } from "./contentlayer.themes.github-dark.js";
import { githubLight } from "./contentlayer.themes.github-light.js";
import rehypeSlug from "./md-plugins/headings/sluggify.js";

export const rehypePlugins: any[] = [
  rehypeSlug,
  [
    rehypeShiki,
    {
      langs: ["bash", "json", "ts", "js", "tsx", "jsx", "svelte", "html", "vue"],
      themes: {
        light: githubLight,
        dark: githubDark,
      },
    },
  ],
];

export const remarkPlugins: any[] = [];
