import { isString } from "./validation"

export function createResponse (data: any) {
    if(isString(data)){
        return {
            status: "",
            code: "",
            data: {},
            message: "",
            error: {}
        }
    }
}