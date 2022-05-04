import { Stack, styled } from "@mui/material"
import React from "react"
import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import SideBar from "../components/SideBar"

const CustomBox = styled("main")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  width: "100%",
  minHeight: "calc(100vh - 103px)",
  overflowX: "hidden",
  display: "flex",
}))

const Layout = () => {
  return (
    <>
      <NavBar />

      <CustomBox>
        <SideBar />
        <Stack
          component={"section"}
          justifyContent="center"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <Outlet />
        </Stack>
      </CustomBox>
    </>
  )
}

export default Layout
