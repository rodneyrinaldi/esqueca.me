import { createContext, useState } from 'react'

export const EsquecameContext = createContext({})

export function EsquecameProvider({ children }) {
  const [level, setLevel] = useState(1)

  function levelUp() {
    setLevel(level + 1)
  }

  return (
    <EsquecameContext.Provider value={{ level: 1, levelUp }}>
      {children}
    </EsquecameContext.Provider>
  )
}