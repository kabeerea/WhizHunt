import React, { useEffect, useState } from 'react'
import Login from './pages/Login'
import NoPageFound from './pages/NoPageFound'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Users from './pages/Users'
import Settings from './pages/Settings'
import PrivateWrapper from './components/PrivateWrapper'
import authService from './services/auth.service'
import { type User } from './interfaces'
import { screenPath } from './constants'

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>()

  useEffect(() => {
    authService.onAuthStateChange((user) => {
      setCurrentUser(user)
    })
  }, [])

  return currentUser !== undefined
    ? (
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateWrapper renderCondition={currentUser !== null} redirectPath={screenPath.LOGIN} />}>
            <Route path={screenPath.HOME} element={<Navigate to={screenPath.USERS} />} />
            <Route path={screenPath.USERS} element={<Users />} />
            <Route path={screenPath.SETTINGS} element={<Settings />} />
          </Route>
          <Route element={<PrivateWrapper renderCondition={currentUser === null} redirectPath={screenPath.HOME} />}>
            <Route path={screenPath.LOGIN} element={<Login />} />
          </Route>
          <Route path="*" element={<NoPageFound />} />
        </Routes>
      </BrowserRouter>
      )
    : null
}

export default App
