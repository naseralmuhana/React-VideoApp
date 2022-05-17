import { Stack, styled } from "@mui/material"
import React from "react"
import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import SideBar from "../components/SideBar"

const Layout = () => {
  return (
    <>
      <NavBar />

      <Main>
        <SideBar />
        <MainContent component="section">
          <Outlet />
        </MainContent>
      </Main>
    </>
  )
}

export default Layout

const Main = styled("main")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  width: "100%",
  minHeight: "calc(100vh - 64px)",
  [theme.breakpoints.down("sm")]: {
    minHeight: "calc(100vh - 56px)",
  },
  overflowX: "hidden",
  display: "flex",
}))

const MainContent = styled(Stack)({
  display: "flex",
  // justifyContent: "center",
  alignItems: "center",
  width: "100%",
})
