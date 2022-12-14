import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import React from 'react'

const ProtectedRoute = (Component) => {
  const Comp = () => {
    const isAllowed = useSelector(state => state.allowed)
    return !isAllowed
      ? (
      <Navigate replace to='signIn' />
        )
      : (
    <div className="data-component">
      <Component />
    </div>
        )
  }

  return Comp
}

export default ProtectedRoute
