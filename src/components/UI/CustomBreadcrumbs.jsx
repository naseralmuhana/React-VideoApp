import React from "react"
import { emphasize, styled } from "@mui/material/styles"
import Breadcrumbs from "@mui/material/Breadcrumbs"
import Chip from "@mui/material/Chip"
import HomeIcon from "@mui/icons-material/Home"
import { Link } from "react-router-dom"
import Typography from "@mui/material/Typography"

const CustomBreadcrumbs = ({ title, pb = 0 }) => {
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      sx={{
        alignSelf: "baseline",
        p: { xs: `1rem 0.5rem ${pb}`, md: `1rem 0.75rem ${pb}` },
      }}
    >
      <StyledBreadcrumb
        component={Link}
        to="/"
        label="Home"
        icon={<HomeIcon fontSize="small" />}
      />
      <TitleTypography color="text.primary">{title}</TitleTypography>
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

const TitleTypography = styled(Typography)({
  "@media (max-width: 320px)": {
    fontSize: "12px",
  },
})
