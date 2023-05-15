import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

interface PrivateRouteProps {
  renderCondition: boolean
  redirectPath: string
}

const PrivateWrapper: React.FC<PrivateRouteProps> = ({
  renderCondition,
  redirectPath
}) => {
  return renderCondition ? <Outlet /> : <Navigate to={redirectPath} />
}

export default PrivateWrapper
