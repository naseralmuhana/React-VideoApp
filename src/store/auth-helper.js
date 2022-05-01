export const retrieveStoredUserData = () => {
  // retrieve the stored stored Token, if not found clear the localStorage
  const storedToken = localStorage.getItem("accessToken")
    ? JSON.parse(localStorage.getItem("accessToken"))
    : localStorage.clear()

  // retrieve the stored user data, if not found clear the localStorage
  const storedUser = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))[0]
    : localStorage.clear()

  return { storedToken, storedUser }
}

export const savetoLocalStorage = (providerData, refreshToken) => {
  // store accessToken and user info into LocalStorage
  localStorage.setItem("user", JSON.stringify(providerData))
  localStorage.setItem("accessToken", JSON.stringify(refreshToken))
}
