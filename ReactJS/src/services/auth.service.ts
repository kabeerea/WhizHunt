import { type AuthListener, type User } from '../interfaces'
import { isArray } from '../helper/validations'

class AuthService {
  currentUser: User | null = null
  authListener: AuthListener = null

  onAuthStateChange: (listener?: AuthListener) => void = (listener) => {
    if (listener != null) {
      this.authListener = listener
      this.currentUser = JSON.parse(localStorage.getItem('currentUser') as string) as User
      this.authListener(this.currentUser)
    }
  }

  signin: (email: string, password: string) => void = (username, password) => {
    const users = JSON.parse(localStorage.getItem('users') as string)
    if (isArray(users)) {
      this.currentUser = users.find(
        (user: User) => user.email === username && user.password === password
      )
      if (this.currentUser != null) {
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser))
        if (this.authListener != null) {
          this.authListener(this.currentUser)
        }
      }
    }
  }

  signout: () => void = () => {
    localStorage.removeItem('currentUser')
    if (this.authListener != null) {
      this.authListener(null)
    }
  }
}

const authService = new AuthService()
export default authService
