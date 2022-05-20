import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import styled from "@emotion/styled"
import Toolbar from "@mui/material/Toolbar"
import { Logo } from "../UI"
import { NavMenu } from "./components"
import { motion } from "framer-motion"

const containerVariants = {
  initial: { opacity: 0, y: "-20vh" },
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.25, type: "spring", stiffness: 120 },
  },
}

const NavBar = () => {
  return (
    <Box
      component={motion.div}
      variants={containerVariants}
      initial="initial"
      animate="animate"
      sx={{ flexGrow: 1, position: "sticky", top: 0, zIndex: 100 }}
    >
      <CustomAppBar>
        <Toolbar>
          {/* Logo */}
          <Logo />
          <Box sx={{ flexGrow: 1, mx: { xs: "0.2rem", sm: "0.4rem" } }} />
          {/* Menu */}
          <NavMenu />
        </Toolbar>
      </CustomAppBar>
    </Box>
  )
}

export default NavBar

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  position: "inherit",
}))
