import { BodyType, ResponseData, Step } from "./types.ts";
import { isBodyInit } from "./internal/mod.ts";

export const copy: Step = (r) => ({ ...r, headers: new Headers(r.headers) });

export const setHeader = (input: ResponseData, name: string, value: string) => {
    const resp = copy(input);
    resp.headers.set(name, value);
    return resp;
};

export const setBody = (value: BodyType, input: ResponseData): ResponseData => {
    const resp = copy(input);
    if (isBodyInit(value)) {
        resp.body = value;
    } else {
        resp.body = JSON.stringify(value);
    }

    return resp;
};

export const setStatus = (status: number, input: ResponseData) => {
    const resp = copy(input);
    resp.status = status;
    return resp;
};

export const setStatusText = (text: string, input: ResponseData) => {
    const resp = copy(input);
    resp.statusText = text;
    return resp;
};

