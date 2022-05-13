import styled from "@emotion/styled"
import { Stack } from "@mui/material"
import Tooltip from "@mui/material/Tooltip"
import React from "react"
import { NavLink } from "react-router-dom"
import { categories } from "./data"
import Zoom from "@mui/material/Zoom"

const SideBar = () => {
  return (
    <Container component={"ul"}>
      {categories.map((category) => (
        <Stack component={"li"} key={category.id} my={2}>
          <CustomLink to={`/category/${category.name}`}>
            <Tooltip
              title={category.name}
              placement="right"
              arrow
              TransitionComponent={Zoom}
              TransitionProps={{ timeout: 400 }}
            >
              <Stack component={"span"}>{category.iconSrc}</Stack>
            </Tooltip>
          </CustomLink>
        </Stack>
      ))}
    </Container>
  )
}

export default SideBar

const Container = styled(Stack)({
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "center",
  padding: 0,
  width: "4rem",
  // position: "fixed",
  // top: 102,
})

const CustomLink = styled(NavLink)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  "&.active": {
    color: "#0CC1F2",
  },
}))
