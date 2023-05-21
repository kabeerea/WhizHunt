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


export enum UserRoles  {
    ADMIN = 0,
    USER = 1
}