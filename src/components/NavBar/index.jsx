import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import styled from "@emotion/styled"
import Toolbar from "@mui/material/Toolbar"
import { Logo } from "../UI"
import { NavMenu, Search } from "./components"

export default function PrimarySearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1, position: "sticky", top: 0, zIndex: 100 }}>
      <CustomAppBar>
        <Toolbar>
          {/* Logo */}
          <Logo />
          <Box sx={{ flexGrow: 1, mx: { xs: "0.2rem", sm: "0.4rem" } }} />
          {/* Search */}
          <Search />
          {/* Menu */}
          <NavMenu />
        </Toolbar>
      </CustomAppBar>
    </Box>
  )
}

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  position: "inherit",
}))
