export const retrieveStoredTheme = () => {
  // retrieve the storedThemeMode, if not found return light as default
  const storedTheme = localStorage.getItem("theme")
    ? JSON.parse(localStorage.getItem("theme"))
    : "light"

  return storedTheme
}

export const savetoLocalStorage = (themeMode) => {
  // store theme Mode into LocalStorage
  localStorage.setItem("theme", JSON.stringify(themeMode))
}
