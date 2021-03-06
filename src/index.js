import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import "./index.css"

import { AuthProvider } from "./store/auth/auth-context"
import { ColorModeProvider } from "./store/theme/colorMode-context"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <AuthProvider>
    <ColorModeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ColorModeProvider>
  </AuthProvider>
)
