# Serverless hosting

### Platforms available

Here some of the platforms you can use to host a serverless application,

1. [Cloudflare workers](https://workers.cloudflare.com/)\*

::: tip \* Tested
:::

::: info
For this guide we will use [Cloudflare workers](https://workers.cloudflare.com/)
:::

### Creating a project

To start you can either use our cli tool `create-disci` or generate one on your own using wrangler (by cloudflare). This guide will explore on how to create a new bot using our cli tool `create-disci`

First open a commands prompt and cd into the directory you want to create the project in and then run following command

::: code-tabs#cmd

@tab pnpm

```bash
  pnpm create disci cf-worker-ts
```
@tab yarn

```bash
 yarn create disci cf-worker-ts
```
@tab:active npx

```bash
 npx create-disci cf-worker-ts
```

:::


This should quickly scaffold a new application for you