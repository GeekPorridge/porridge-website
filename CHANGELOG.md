# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.1.3](https://github.com/GeekPorridge/porridge-website/compare/v0.1.2...v0.1.3) (2026-06-12)


### Bug Fixes

* add postinstall hook to auto-generate Prisma Client on Vercel build ([80bc787](https://github.com/GeekPorridge/porridge-website/commit/80bc787b9493bb0fcdc54a6776f2aa674c708ce5))
* persist locale preference via cookie to prevent reset on navigation ([56fe225](https://github.com/GeekPorridge/porridge-website/commit/56fe225e5c494127f23a18e48455a7d9ee7af014))
* resolve language-switcher causing stale [locale] segment on navigation ([c59298a](https://github.com/GeekPorridge/porridge-website/commit/c59298a7cb3e57a8d72bfc976ccd151aab995307))

### [0.1.2](https://github.com/GeekPorridge/porridge-website/compare/v0.1.1...v0.1.2) (2026-06-09)


### Bug Fixes

* add postinstall hook to generate Prisma client on install ([159da15](https://github.com/GeekPorridge/porridge-website/commit/159da1589150350b0877f7ec8112e7ff96c9fd3b))

### 0.1.1 (2026-06-09)


### Features

* 新增路由,改好所有骨架 ([4c64617](https://github.com/GeekPorridge/porridge-website/commit/4c64617f36fae4e9110cd500f590602c3c63f456))


### Bug Fixes

* remove redundant email pattern that rejected numeric local-parts like 1703067850@qq.com ([ea94be3](https://github.com/GeekPorridge/porridge-website/commit/ea94be31093c5007766c99224b7169840d8dde1d))
* resolve LiveClock hydration mismatch by deferring state to useEffect ([5e5425a](https://github.com/GeekPorridge/porridge-website/commit/5e5425a05fdad4b807f40f44da18f416a663234b))
* 修复水合错误,修改header排版 ([d7c167a](https://github.com/GeekPorridge/porridge-website/commit/d7c167a24cef0ad102c90642fd6df107ae8fdda8))
* 修复终端控制台警告问题 ([6f9cc47](https://github.com/GeekPorridge/porridge-website/commit/6f9cc473685424b1bac912a82d00d210c3bce31f))


### Chores

* add standard-version for automated versioning and changelog generation ([affc8f7](https://github.com/GeekPorridge/porridge-website/commit/affc8f7b626306e754266964114138cc7e09a5f6))
