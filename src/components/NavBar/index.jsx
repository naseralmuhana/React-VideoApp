import styled from "@emotion/styled"
import { AppBar, Stack } from "@mui/material"
import React from "react"
import { Logo } from "../UI"
import { AddButton, AvatarMenu, Search, ThemeButton } from "./components"

const NavBar = () => {
  return (
    <CustomAppBar>
      <Logo />
      {/* <Search /> */}
      <AppBarItemsContainer>
        <ThemeButton />
        <AddButton />
        <AvatarMenu />
      </AppBarItemsContainer>
    </CustomAppBar>
  )
}

export default NavBar

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "1.5rem",
  padding: "1rem",
  width: "auto",
  backgroundColor: theme.palette.background.default,
  position: "sticky",
}))

const AppBarItemsContainer = styled(Stack)({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "20px",
})
