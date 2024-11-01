# disci

## 1.0.0

### Major Changes

- d79ee3c: All provide packages are esm only

  They can be only imported using `import` statements and cannot be used with `require` statements.
  Check [here](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c) for more information.

  ```diff
  - const { createInteractionRequestHandler } = require('@disci/adapter-hono');
  + import { createInteractionRequestHandler } from "@disci/adapter-hono";
  ```

### Minor Changes

- e1a8ffc: Removed replyTimeout and added base functions to BaseInteraction
- 698d46e: Refine returned response type
- b86e71c: Adds support for sending buttons in reply to interactions
- 2f0e179: Return a ApiInteraction on successful interaction and error on other instead of returning a response object
