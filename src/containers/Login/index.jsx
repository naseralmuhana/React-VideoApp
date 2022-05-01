import Stack from "@mui/material/Stack"
import React from "react"
import Backdrop from "./components/Backdrop"
import BgVideo from "./components/BgVideo"
import LoginButton from "./components/LoginButton"

const Login = () => {
  return (
    <Stack component="section" width="100vw" height="100vh" position="relative">
      <BgVideo />
      <Backdrop>
        <LoginButton />
      </Backdrop>
    </Stack>
  )
}

export default Login
