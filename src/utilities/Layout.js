import React from "react"
import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"

const Layout = () => {
  return (
    <>
      {/* NavBar */}
      <NavBar />

      {/* Sidebar */}
      {/* <SideBar  /> */}

      {/* Main */}
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout
