import { createContext, useContext } from 'react'

function createGenericContext<T>() {
  const genericContext = createContext<T | undefined>(undefined)

  const useGenericContext = () => {
    const ctx = useContext(genericContext)
    if (!ctx) throw new Error('use Context should be used within a provider')
    return ctx
  }

  return [useGenericContext, genericContext.Provider] as const
}

export default createGenericContext
