import { ResponseData, Step } from "./types.ts";

export function emptyResponse(): ResponseData {
    return { headers: new Headers() };
}

export function pipe(steps: Step[], start?: ResponseData) {
    return steps.reduce((currentValue, currentFunction) => {
        return currentFunction(currentValue);
    }, start || emptyResponse());
}

export const pipeSteps = pipe;

export function toResponse(r: ResponseData): Response {
    return new Response(r.body, r);
}
