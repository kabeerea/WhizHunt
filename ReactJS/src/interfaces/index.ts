export interface User {
  id?: string
  name?: string
  age?: number
  phone?: number
  email?: string
  password?: string
  role?: 0 | 1
}

export type AuthListener = ((user: User | null) => void) | null
