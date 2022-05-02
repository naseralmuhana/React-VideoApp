import { IconButton } from "@mui/material"
import { IoMoon, IoSunny } from "react-icons/io5"
import { useColorMode } from "../../../store/theme/colorMode-context"

const ThemeButton = () => {
  const { mode, toggleColorMode } = useColorMode()

  return (
    <IconButton
      onClick={toggleColorMode}
      sx={{
        "&:hover": {
          backgroundColor: "transparent",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
        },
      }}
    >
      {mode === "light" ? (
        <IoMoon size="25" color="#121212" />
      ) : (
        <IoSunny size="25" color="#d1d1d1" />
      )}
    </IconButton>
  )
}

export default ThemeButton
