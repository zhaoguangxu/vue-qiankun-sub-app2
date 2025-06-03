# vue-qiankun-sub-app2

This template should help get you started developing with Vue 3 in Vite.

## Git提交规范配置

本项目使用统一的Git提交信息模板，请按照以下步骤配置：

```bash
npm run setup-git-template
```

配置成功后，每次执行 `git commit` 时都会自动加载提交模板。

### 提交信息格式

```
<type>(<scope>): <subject>

<body>

<footer>
```

类型说明：
- feat: 新功能
- fix: 修复bug
- docs: 文档修改
- style: 代码格式修改
- refactor: 代码重构
- perf: 性能优化
- test: 测试用例修改
- chore: 其他修改
- revert: 回滚
- build: 打包
- ci: CI配置相关

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
