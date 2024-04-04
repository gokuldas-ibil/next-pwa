// @ts-check
import { getRollupOptions } from "@serwist/configs/rollup";

import packageJson from "./package.json" with { type: "json" };

export default getRollupOptions({
  packageJson,
  jsFiles: [
    {
      input: {
        index: "src/index.ts",
        fallback: "src/fallback.ts",
        "sw-entry": "src/sw-entry.ts",
        "sw-entry-worker": "src/sw-entry-worker.ts",
      },
      output: [
        {
          dir: "dist",
          entryFileNames: "[name].cjs",
          chunkFileNames: "[name].cjs",
          format: "cjs",
          exports: "named",
        },
        {
          dir: "dist",
          entryFileNames: "[name].js",
          chunkFileNames: "[name].js",
          format: "esm",
        },
      ],
    },
  ],
  declFiles: [
    {
      input: {
        index: "dist/dts/src/index.d.ts",
        "sw-entry": "dist/dts/src/sw-entry.d.ts",
      },
      output: [
        {
          dir: "dist",
          entryFileNames: "[name].d.cts",
          chunkFileNames: "[name].d.cts",
          format: "cjs",
          exports: "named",
        },
        {
          dir: "dist",
          entryFileNames: "[name].d.ts",
          chunkFileNames: "[name].d.ts",
          format: "esm",
        },
      ],
    },
  ],
});
