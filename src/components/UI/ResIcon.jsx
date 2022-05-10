import React from "react"
import Box from "@mui/material/Box"

// Responsive Icon
const ResIcon = ({ icon }) => {
  return (
    <Box
      component={icon}
      sx={(theme) => ({
        fontSize: "2rem",
        [theme.breakpoints.down("sm")]: {
          fontSize: "1.5rem",
        },
        color: "#d1d1d1",
        cursor: "pointer",
      })}
    />
  )
}

export default ResIcon
