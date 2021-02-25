import { useContext } from 'react'

import { EsquecameContext } from '../../contexts/esquecame'

export default function SignIn() {
  const contextData = useContext(EsquecameContext)
  console.log(contextData)

  return (
    <>
      <h1>em desenvolvimento</h1>
    </>
  )
}
