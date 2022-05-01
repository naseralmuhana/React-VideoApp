import { Stack } from "@mui/material"
import React from "react"
import { AddButton, AvatarMenu, Logo, Search, ThemeButton } from "./components"

const NavBar = () => {
  return (
    <Stack
      width="100vw"
      alignItems="center"
      justifyContent="space-between"
      p={2}
      direction="row"
      gap={2.5}
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
    </Stack>
  )
}

export default NavBar
