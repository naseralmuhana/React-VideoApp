import Stack from "@mui/material/Stack"

import Backdrop from "./components/Backdrop"
import BgVideo from "./components/BgVideo"
import LoginButton from "./components/LoginButton"
import { motion } from "framer-motion"
import { variants } from "../../utilities"

const Login = () => {
  return (
    <Stack
      component={motion.section}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      // width="100vw"
      height="100vh"
      position="relative"
      sx={{
        overflowX: "hidden",
      }}
    >
      <BgVideo />
      <Backdrop>
        <LoginButton />
      </Backdrop>
    </Stack>
  )
}

export default Login
