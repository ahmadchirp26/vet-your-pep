'use client'
import React, { type PropsWithChildren, useEffect, useState } from 'react'
import useAuthSessionContext from '../context/AuthSessionContext'

const AuthVerifyingRoutes = ['/login', '/register']

const AuthRedirection = ({ children }: PropsWithChildren) => {
  const { status } = useAuthSessionContext()
  const [isReloading, setReloading] = useState(false)
 
  useEffect(() => {
    if (status === 'unauthenticated') {
      const isOnAuthVerifyingRoute = AuthVerifyingRoutes.some(v => v === window.location.pathname)
      if (!isOnAuthVerifyingRoute) {
        window.location.href = `${window.location.origin}/login`
      }
    } else if (status === 'authenticated') {
      const isOnAuthVerifyingRoute = AuthVerifyingRoutes.some(v => v === window.location.pathname)
      if (isOnAuthVerifyingRoute) {
        window.location.href = `${window.location.origin}/`
      }
    }
  }, [status])

  useEffect(() => {
    setReloading(false)
    const handleBeforeUnload = () => {
      setReloading(true)
      return
    }
    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => window.removeEventListener('beforeunload', handleBeforeUnload)
  }, [])

  if (status === 'loading' || isReloading) {
    return <p>{'Redirecting'}</p>
  }
  return <>{children}</>
}

export default AuthRedirection
