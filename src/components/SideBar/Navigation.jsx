import { styled } from "@mui/material/styles"
import MuiAppBar from "@mui/material/AppBar"
import { IconButton, Stack, Toolbar } from "@mui/material"
import { Menu } from "@mui/icons-material"

import {
  AddButton,
  AvatarMenu,
  Logo,
  Search,
  ThemeButton,
} from "../NavBar/components"

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open, drawerWidth }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const Navigation = ({ open, onDrawerOpen, drawerWidth }) => {
  return (
    <AppBar
      position="fixed"
      open={open}
      drawerWidth={drawerWidth}
      sx={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "1.5rem",

        width: "100%",
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={onDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }),
          }}
        >
          <Menu />
        </IconButton>

        <Logo />
        <Search />
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          gap={2.5}
        >
          <ThemeButton />
          <AddButton />
          <AvatarMenu />
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Navigation
