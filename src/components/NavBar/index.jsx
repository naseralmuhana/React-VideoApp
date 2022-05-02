import { AppBar, Container, Paper, Stack } from "@mui/material"
import React from "react"
import { AddButton, AvatarMenu, Logo, Search, ThemeButton } from "./components"

const NavBar = () => {
  return (
    <AppBar
      sx={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "1.5rem",
        padding: "1rem",
        width: "100%",
        bgcolor: "background.default",
      }}
    >
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
    </AppBar>
  )
}

export default NavBar

// <Paper
// elevation={2}
// sx={{
//   display: "flex",
//   gap: "1.5rem",
//   padding: "1rem",
//   justifyContent: "space-between",
//   alignItems: "center",
//   width: "100vw",
//   borderTopRightRadius: 0,
//   borderTopLeftRadius: 0,
// }}
// >
// <Logo />
// <Search />
// <Stack
//   direction="row"
//   alignItems="center"
//   justifyContent="center"
//   gap={2.5}
// >
//   <ThemeButton />
//   <AddButton />
//   <AvatarMenu />
// </Stack>
// </Paper>
