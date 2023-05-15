import { type User } from '../interfaces'

export const getUsers: () => User[] = () => {
  const data = localStorage.getItem('users')
  const users = (data !== null ? JSON.parse(data) : [])
  return users.filter((user: User) => user.role === 1)
}

export const addUser: (user: User) => void = (user) => {
  const data = localStorage.getItem('users')
  const users = (data !== null ? JSON.parse(data) : [])
  user.id = crypto.randomUUID()
  user.role = 1
  user.password = 'password'
  users.push(user)
  localStorage.setItem('users', JSON.stringify(users))
}

export const editUser: (modifiedUserData: User) => void = (modifiedUserData) => {
  const users = getUsers()
  const modifiedUsers = users.map((user) => {
    return modifiedUserData.id === user.id ? { ...user, ...modifiedUserData } : user
  })
  localStorage.setItem('users', JSON.stringify(modifiedUsers))
}

export const deleteUser: (userId: string) => void = (userId) => {
  const users = getUsers()
  const modifiedUsers = users.filter((user) => userId !== user.id)
  localStorage.setItem('users', JSON.stringify(modifiedUsers))
}
