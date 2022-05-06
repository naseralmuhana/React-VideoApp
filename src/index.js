import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import "./index.css"
import { AuthProvider } from "./store/auth/auth-context"
import { VideoProvider } from "./store/data/videos-context"
import { ColorModeProvider } from "./store/theme/colorMode-context"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <AuthProvider>
    <VideoProvider>
      <ColorModeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ColorModeProvider>
    </VideoProvider>
  </AuthProvider>
)
