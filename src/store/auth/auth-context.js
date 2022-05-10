import { signInWithPopup, signOut } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"
import React, { useContext, useState } from "react"
import { auth, db, provider } from "../../firebase-config"
// prettier-ignore
import { removeFromLocalStorage, retrieveStoredUserData, saveToLocalStorage } from "./auth-helper"

const AuthContext = React.createContext({
  token: null,
  user: null,
  login: async () => {},
  logout: async () => {},
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
    saveToLocalStorage(providerData, refreshToken)

    // set the accessToken and user info
    setToken(refreshToken)
    setUser(providerData[0])

    // store user info inside Firestore
    await setDoc(doc(db, "users", providerData[0].uid), providerData[0])
  }

  const logout = async () => {
    // Sign out the user
    await signOut(auth)

    // remove accessToken and user info from LocalStorage
    removeFromLocalStorage()

    // reset the accessToken and user info
    setToken(null)
    setUser(null)
  }

  const contextValue = { token, user, login, logout }
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
