# next-pwa - custom worker

This example demonstrates how to add some custom worker code to the generated service worker.

## Usage

[![Open in Gitpod and run](https://img.shields.io/badge/Open%20In-Gitpod.io-%231966D2?style=for-the-badge&logo=gitpod)](https://gitpod.io/#https://gitlab.com/serwist/next-pwa/)

```bash
cd examples/custom-worker
pnpm build
pnpm start
```

or

Execute [`degit`](https://github.com/Rich-Harris/degit) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), [pnpm](https://pnpm.io), or [bun](https://bun.sh) to bootstrap the example:

```bash
npx degit git@gitlab.com:serwist/tree/master/examples/custom-worker custom-worker-app
```

```bash
yarn degit git@gitlab.com:serwist/tree/master/examples/custom-worker custom-worker-app
```

```bash
pnpx degit git@gitlab.com:serwist/next-pwa/tree/master/examples/custom-worker custom-worker-app
```

```bash
bunx degit git@gitlab.com:serwist/next-pwa/tree/master/examples/custom-worker custom-worker-app
```

## Recommended `.gitignore`

```gitignore
**/public/workbox-*.js
**/public/sw.js
**/public/worker-*.js
```
