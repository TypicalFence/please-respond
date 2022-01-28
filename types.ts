export interface ResponseData extends ResponseInit {
    body?: BodyInit;
    headers: Headers;
}

export type Step = (resp: ResponseData) => ResponseData;

export type BodyType = BodyInit | Record<string, unknown>;
