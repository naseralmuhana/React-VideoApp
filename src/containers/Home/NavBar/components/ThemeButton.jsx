import { IconButton } from "@mui/material"
import { IoMoon, IoSunny } from "react-icons/io5"

const ThemeButton = () => {
  return (
    <IconButton
      sx={{
        "&:hover": {
          backgroundColor: "transparent",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
        },
      }}
    >
      <IoMoon size="25" />
    </IconButton>
  )
}
// <IoSunny size="25" />
export default ThemeButton
