import React, { useEffect, useState } from 'react'
import { SignedInStack, SignedOutStack } from './navigation'
import { onAuthStateChanged, getAuth } from './firebase'

const AuthNavigation = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const auth = getAuth()

  const userHandler = (user) =>
    user ? setCurrentUser(user) : setCurrentUser(null)

  useEffect(() => onAuthStateChanged(auth, (user) => userHandler(user)), [])
  return <>{currentUser ? <SignedInStack /> : <SignedOutStack />}</>
}

export default AuthNavigation
