# @disci/adapter-hono

## 1.0.0

### Major Changes

- 889a97b: Introduce new adapter for hono framework
- d79ee3c: All provide packages are esm only

  They can be only imported using `import` statements and cannot be used with `require` statements.
  Check [here](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c) for more information.

  ```diff
  - const { createInteractionRequestHandler } = require('@disci/adapter-hono');
  + import { createInteractionRequestHandler } from "@disci/adapter-hono";
  ```

### Patch Changes

- Updated dependencies [e1a8ffc]
- Updated dependencies [698d46e]
- Updated dependencies [b86e71c]
- Updated dependencies [2f0e179]
- Updated dependencies [d79ee3c]
  - disci@1.0.0
