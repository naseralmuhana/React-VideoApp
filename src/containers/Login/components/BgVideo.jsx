import Box from "@mui/material/Box"
import React from "react"


const BgVideo = () => {
  return (
    <Box
      component="video"
      src="/videos/watchme.mp4"
      type="video/mp4"
      autoPlay
      loop
      playsInline
      muted
      sx={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}

export default BgVideo
