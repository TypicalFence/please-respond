export function isBodyInit(b?: unknown): b is BodyInit {
    return (
        b == null ||
        typeof b === "string" ||
        (typeof Blob !== "undefined" && b instanceof Blob) ||
        (typeof ArrayBuffer !== "undefined" &&
            (b instanceof ArrayBuffer || ArrayBuffer.isView(b))) ||
        (typeof FormData !== "undefined" && b instanceof FormData) ||
        (typeof URLSearchParams !== "undefined" &&
            b instanceof URLSearchParams) ||
        (typeof ReadableStream !== "undefined" && b instanceof ReadableStream)
    );
}
