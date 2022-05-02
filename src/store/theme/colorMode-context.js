import { ThemeProvider, createTheme } from "@mui/material/styles"
import React, { useState, useMemo, useContext } from "react"
import { savetoLocalStorage, retrieveStoredTheme } from "./colorMode-helper"
import { themeObj } from "./theme"

const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
  mode: "light",
})

export const ColorModeProvider = ({ children }) => {
  // Get the initialThemeMode from localStorage
  const initialThemeMode = retrieveStoredTheme()
  const [mode, setMode] = useState(initialThemeMode)

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
      },
      mode,
    }),
    [mode]
  )

  const theme = useMemo(() => {
    savetoLocalStorage(mode)
    return createTheme({
      palette: {
        mode,
        ...themeObj[mode],
      },
    })
  }, [mode])

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export const useColorMode = () => useContext(ColorModeContext)
