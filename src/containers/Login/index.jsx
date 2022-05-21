import Stack from "@mui/material/Stack"

import Backdrop from "./components/Backdrop"
import BgVideo from "./components/BgVideo"
import LoginButton from "./components/LoginButton"
import { motion } from "framer-motion"
import { variants } from "../../utilities"
import { Helmet } from "react-helmet"

const Login = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login</title>
        <link
          rel="canonical"
          href="https://spiffy-bubblegum-7dabd3.netlify.app/user/"
        />
        <meta name="description" content="Login Page" />
      </Helmet>
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
    </>
  )
}

export default Login
