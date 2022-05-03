import { styled } from "@mui/material"
import React from "react"
import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import SideBar from "../components/SideBar"

const CustomBox = styled("main")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  minHeight: "calc(100vh - 250px)",
  overflowX: "hidden",
  display: "flex",
}))

const Layout = () => {
  return (
    <>
      <NavBar />

      <CustomBox>
        <SideBar />
        <Outlet />
      </CustomBox>
    </>
  )
}

export default Layout
