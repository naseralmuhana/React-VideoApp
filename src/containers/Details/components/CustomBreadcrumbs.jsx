import React from "react"
import { emphasize, styled } from "@mui/material/styles"
import Breadcrumbs from "@mui/material/Breadcrumbs"
import Chip from "@mui/material/Chip"
import HomeIcon from "@mui/icons-material/Home"
import { Link } from "react-router-dom"
import { Typography } from "@mui/material"

const CustomBreadcrumbs = ({ title }) => {
  return (
    <Breadcrumbs getter aria-label="breadcrumb" sx={{ alignSelf: "baseline" }}>
      <StyledBreadcrumb
        component={Link}
        to="/"
        label="Home"
        icon={<HomeIcon fontSize="small" />}
      />
      <Typography color="text.primary">{title}</Typography>
    </Breadcrumbs>
  )
}

export default CustomBreadcrumbs

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[300]
      : theme.palette.grey[800]
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    cursor: "pointer",
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
      boxShadow: theme.shadows[1],
    },
    "&:active": {
      boxShadow: theme.shadows[4],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  }
})
