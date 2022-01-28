# Please Respond

## Functional

```ts
import { body, html, pipe } from "https://deno.land/x/please_respond/mod.ts";
import { toResponse } from "https://deno.land/x/please_respond/mod.ts";
toResponse(pipe([html, body("<h1>🦕</h1>")]));
toResponse(pipe([html, body({ simple: "JSON support" })]));
```

## OOP

```ts
import { body, html } from "https://deno.land/x/please_respond/mod.ts";
import { response } from "https://deno.land/x/please_respond/oop.ts";
response().applyAll([
  html,
  body("<h1>🦕</h1>"),
]).toResponse();
```
