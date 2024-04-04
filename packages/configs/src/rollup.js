// @ts-check
import alias from "@rollup/plugin-alias";
import json from "@rollup/plugin-json";
import nodeResolve from "@rollup/plugin-node-resolve";
import swc from "@rollup/plugin-swc";
import typescript from "@rollup/plugin-typescript";
import { defineConfig } from "rollup";
import dts from "rollup-plugin-dts";

import { swcConfig } from "./swc-config.js";

const isDev = process.env.NODE_ENV !== "production";

/**
 * @type {typeof import("./rollup.d.ts").getRollupOptions}
 */
export const getRollupOptions = ({ packageJson, jsFiles, declFiles = [] }) => {
  const forcedExternals = [
    ...Object.keys(packageJson.dependencies ?? {}).map((e) => new RegExp(`^${e}`)),
    ...Object.keys(packageJson.peerDependencies ?? {}).map((e) => new RegExp(`^${e}`)),
  ];

  return [
    ...jsFiles.map(({ input, output, external = [], plugins }) => {
      return defineConfig({
        input,
        output,
        external: [...(Array.isArray(external) ? external : [external]), ...forcedExternals],
        plugins: [
          nodeResolve({
            exportConditions: ["node"],
            preferBuiltins: true,
            extensions: [".js", ".ts"],
          }),
          alias({
            entries: [{ find: /node:(?!test)(.*)$/, replacement: "$1" }],
          }),
          json(),
          swc({
            swc: swcConfig,
          }),
          !isDev &&
            typescript({
              noForceEmit: true,
              noEmit: false,
              emitDeclarationOnly: true,
              outDir: "dist",
              declaration: true,
              declarationDir: "dist/dts",
            }),
          ...[plugins ?? []],
        ],
      });
    }),
    ...(declFiles && !isDev
      ? declFiles.map(({ input, output, external = [], plugins }) => {
          return defineConfig({
            input,
            output,
            external: [...(Array.isArray(external) ? external : [external]), ...forcedExternals],
            plugins: [dts(), ...[plugins ?? []]],
          });
        })
      : []),
  ];
};
