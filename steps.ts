import { curry } from "https://deno.land/x/curry/mod.ts";
import { setBody, setHeader } from "./api.ts";
import { BodyType, ResponseData, Step } from "./types.ts";

export const header: (name: string, val: string) => Step = (n, v) =>
    (r) => setHeader(r, n, v);
export const body = curry<[BodyType, ResponseData], ResponseData>(setBody);
export const json: Step = (r) =>
    setHeader(r, "content-type", "application/json");
export const text: Step = (r) => setHeader(r, "content-type", "text/plain");
export const html: Step = (r) =>
    setHeader(r, "content-type", "text/html; charset=UTF-8");
