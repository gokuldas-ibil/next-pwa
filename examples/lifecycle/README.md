# next-pwa - lifecycle and register workflow control example

This example demonstrates how to control the service worker registration (instead of it automatically registering) and add an event listener to handle the lifecycle events. It gives you more control over the PWA lifecycle.

This example also demonstrates how to [prompt the user to reload the page when a new version is available](https://developers.google.com/web/tools/workbox/guides/advanced-recipes#offer_a_page_reload_for_users).

## Usage

[![Open in Gitpod and run](https://img.shields.io/badge/Open%20In-Gitpod.io-%231966D2?style=for-the-badge&logo=gitpod)](https://gitpod.io/#https://gitlab.com/serwist/next-pwa/)

```bash
cd examples/lifecycle
pnpm build
pnpm start
```

or

Execute [`degit`](https://github.com/Rich-Harris/degit) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), [pnpm](https://pnpm.io), or [bun](https://bun.sh) to bootstrap the example:

```bash
npx degit git@gitlab.com:serwist/next-pwa/tree/master/examples/lifecycle lifecycle-app
```

```bash
yarn degit git@gitlab.com:serwist/next-pwa/tree/master/examples/lifecycle lifecycle-app
```

```bash
pnpx degit git@gitlab.com:serwist/next-pwa/tree/master/examples/lifecycle lifecycle-app
```

```bash
bunx degit git@gitlab.com:serwist/next-pwa/tree/master/examples/lifecycle lifecycle-app
```

## Recommended `.gitignore`

```gitignore
**/public/precache.*.js
**/public/sw.js
```
