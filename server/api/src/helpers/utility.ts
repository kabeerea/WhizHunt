import { responseError } from "../global/types"

export function formatSuccessResponse(data: any) {
    return {
        success: true,
        message: "",
        error_code: "",
        data
    }
}

export function formatErrorResponse(errorResponse: responseError) {
    return {
        success: false,
        message: errorResponse.message,
        error_code: errorResponse.error_code,
        data: {}
    }
}