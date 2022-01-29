# Please Respond

A Response Builder for Deno with a functional interface that consists of small composable functions, alternativly there is a more OOP style interface.

The basic idea is that there's small functions that change a detail about a given response, the library calls such functions steps. Said steps can then be chained to form the desired response.

There is also a `pipe` function which will apply all steps for a given response, per default an empty response is used.

Internally it represents response as a custom type that holds all data of a response, because you can't easily get the body out of a response.

All steps should copy their input and return a new object.

There is a single tiny dependency for easier currying.

## Examples

### Functional

```ts
import { body, html, pipe } from "https://deno.land/x/please_respond/mod.ts";
import { toResponse } from "https://deno.land/x/please_respond/mod.ts";
toResponse(pipe([html, body("<h1>🦕</h1>")]));
toResponse(pipe([json, body({ simple: "JSON support" })]));
```

### OOP

```ts
import { body, html } from "https://deno.land/x/please_respond/mod.ts";
import { response } from "https://deno.land/x/please_respond/oop.ts";
response().applyAll([
    html,
    body("<h1>🦕</h1>"),
]).toResponse();
```
