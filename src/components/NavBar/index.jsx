import { AppBar, Stack } from "@mui/material"
import React from "react"
import { AddButton, AvatarMenu, Logo, Search, ThemeButton } from "./components"

const NavBar = () => {
  return (
    <AppBar
      sx={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "1.5rem",
        padding: "1rem",
        width: "auto",
        bgcolor: "background.default",
        position: "sticky",
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
