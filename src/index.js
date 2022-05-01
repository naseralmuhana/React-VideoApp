import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "@mui/material"
import { theme } from "./theme"
import { AuthProvider } from "./store/auth-context"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <AuthProvider>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </AuthProvider>
)
