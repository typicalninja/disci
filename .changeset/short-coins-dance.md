---
"@disci/adapter-hono": major
"disci": major
---

All provide packages are esm only

They can be only imported using `import` statements and cannot be used with `require` statements.
Check [here](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c) for more information.

```diff
- const { createInteractionRequestHandler } = require('@disci/adapter-hono');
+ import { createInteractionRequestHandler } from "@disci/adapter-hono";
```