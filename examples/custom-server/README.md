# next-pwa - custom server

This example demonstrates how to use serve a Next PWA with custom server.

It uses `fastify` as a custom server to serve `sw.js` and `precache` scripts statically, and it contains a minimal icon set and a `manifest.json` in the `public` directory. The example also features full offline support and boasts full (all 100) scores on Lighthouse 🎉.

> [Check out Lighthouse's summary](./lighthouse.pdf), or run the test yourself.

It is still recommended to use Next's built-in server instead.

## Usage

[![Open in Gitpod and run](https://img.shields.io/badge/Open%20In-Gitpod.io-%231966D2?style=for-the-badge&logo=gitpod)](https://gitpod.io/#https://gitlab.com/serwist/next-pwa/)

```bash
cd examples/custom-server
pnpm build
pnpm start
```

or

Execute [`degit`](https://github.com/Rich-Harris/degit) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), [pnpm](https://pnpm.io), or [bun](https://bun.sh) to bootstrap the example:

```bash
npx degit git@gitlab.com:serwist/next-pwa/tree/master/examples/custom-server custom-server-app
```

```bash
yarn degit git@gitlab.com:serwist/next-pwa/tree/master/examples/custom-server custom-server-app
```

```bash
pnpx degit git@gitlab.com:serwist/next-pwa/tree/master/examples/custom-server custom-server-app
```

```bash
bunx degit git@gitlab.com:serwist/next-pwa/tree/master/examples/custom-server custom-server-app
```

## Recommended `.gitignore`

```gitignore
**/public/precache.*.js
**/public/sw.js
```
