export const errors = {
    serverError: {
        error_code: 'err500',
        message: 'Server Error'
    },
    invalidCredentials: {
        error_code: 'err400',
        message: 'Please enter a valid username or password'
    }
}

export const errorCodes = {
    success: 200,
    badRequest: 400,
    Unauthorized: 401,
    forbidden: 403,
    serverError: 500,
}

export const userRoles = {
    admin: 0,
    user: 1
}