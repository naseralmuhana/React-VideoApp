export const retrieveStoredUserData = () => {
  // retrieve the stored stored Token, if not found clear the localStorage
  const storedToken = localStorage.getItem("accessToken")
    ? JSON.parse(localStorage.getItem("accessToken"))
    : removeFromLocalStorage()

  // retrieve the stored user data, if not found clear the localStorage
  const storedUser = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))[0]
    : removeFromLocalStorage()

  return { storedToken, storedUser }
}

export const saveToLocalStorage = (providerData, refreshToken) => {
  // store accessToken and user info into LocalStorage
  localStorage.setItem("user", JSON.stringify(providerData))
  localStorage.setItem("accessToken", JSON.stringify(refreshToken))
}

export const removeFromLocalStorage = () => {
  // remove accessToken and user info from LocalStorage
  localStorage.removeItem("user")
  localStorage.removeItem("accessToken")
}
