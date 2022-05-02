import { Button } from "@mui/material"
import React from "react"
import { FcGoogle } from "react-icons/fc"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../../store/auth/auth-context"

const LoginButton = () => {
  const navigate = useNavigate()
  const { login } = useAuth()
  
  // Login Handler
  const loginHandler = async () => {
    await login()
    // navigate to the home page after login done
    navigate("/", { replace: true })
  }
  return (
    <Button
      onClick={loginHandler}
      variant="contained"
      startIcon={<FcGoogle size="25" />}
      sx={{
        textTransform: "none",
        fontSize: "1rem",
        backgroundColor: "rgba(255,255,255,0.30)",
        "&:hover": {
          backgroundColor: "rgba(255,255,255,0.48)",
        },
      }}
    >
      SignIn with Google
    </Button>
  )
}

export default LoginButton
