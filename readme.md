# Please Respond

## Functional

```ts
import { body, html, pipe, toResponse } from "$URL/please-respond/mod.ts";
toResponse(pipe([html, body("<h1>🦕</h1>")]));
toResponse(pipe([html, body({ simple: "JSON support" })]));
```

## OOP

```ts
import { body, html } from "$URL/please-respond/mod.ts";
import { response } from "$URL/please-respond/oop.ts";
response().applyAll([
    html,
    body("<h1>🦕</h1>"),
]).toResponse();
```
