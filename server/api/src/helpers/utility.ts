import { isString } from "./validation";

export function createSuccessResponse(value: Record<string, string> | string) {
    return {
        status: "success",
        code: "",
        data: isString(value) ? {} : value,
        message: isString(value) ? value : "",
        errors: {}
    }
}

export function createErrorResponse(value: Record<string, string>) {
    return {
        status: "error",
        code: "",
        data: {},
        message: isString(value) ? value : "",
        errors: value.errors || {}
    }
}