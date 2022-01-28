import { ResponseData, Step } from "./types.ts";
import { emptyResponse, pipe, toResponse } from "./utils.ts";

export interface ResponseBuilder {
    applyAll(steps: Step[]): ResponseBuilder;
    apply(step: Step): ResponseBuilder;
    toResponse(): Response;
}

class Builder implements ResponseBuilder {
    private data: ResponseData = emptyResponse();

    applyAll(steps: Step[]): ResponseBuilder {
        this.data = pipe(steps, this.data);
        return this;
    }

    apply(step: Step) {
        this.data = step(this.data);
        return this;
    }

    toResponse(): Response {
        return toResponse(this.data);
    }
}

export function response(): ResponseBuilder {
    return new Builder();
}
