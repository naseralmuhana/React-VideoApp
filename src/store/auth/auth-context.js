import { signInWithPopup } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"
import React, { useContext, useState } from "react"
import { auth, db, provider } from "../../firebase-config"
import { retrieveStoredUserData, savetoLocalStorage } from "./auth-helper"

const AuthContext = React.createContext({
  token: null,
  user: null,
  login: async () => {},
})

export const AuthProvider = ({ children }) => {
  const { storedToken, storedUser } = retrieveStoredUserData()

  const [token, setToken] = useState(storedToken)
  const [user, setUser] = useState(storedUser)

  const login = async () => {
    // signInWithPopup google and get the accessToken and user info
    const { user } = await signInWithPopup(auth, provider)
    const { providerData, refreshToken } = user

    // store accessToken and user info in LocalStorage
    savetoLocalStorage(providerData, refreshToken)

    // set the accessToken and user info
    setToken(refreshToken)
    setUser(user)

    // store user info inside Firestore
    await setDoc(doc(db, "users", providerData[0].uid), providerData[0])
  }

  const contextValue = { token, user, login }
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
