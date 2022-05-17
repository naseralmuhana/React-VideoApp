import Button from "@mui/material/Button"
import { FcGoogle } from "react-icons/fc"
import useNavAction from "../../../hooks/use-nav-action"
import { useAuth } from "../../../store/auth/auth-context"

const LoginButton = () => {
  const { login } = useAuth()
  const { action: loginHandler } = useNavAction(login, "/")

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
