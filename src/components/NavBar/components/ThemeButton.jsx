import LightModeOutlined from "@mui/icons-material/LightModeOutlined"
import DarkMode from "@mui/icons-material/DarkMode"
import IconButton from "@mui/material/IconButton"
import { useColorMode } from "../../../store/theme/colorMode-context"

const ThemeButton = ({ withText = false }) => {
  const { mode, toggleColorMode } = useColorMode()

  if (withText)
    return mode === "light" ? (
      <>
        <DarkMode sx={{ color: "#121212", ...iconSx }} />
        <p>Dark</p>
      </>
    ) : (
      <>
        <LightModeOutlined sx={{ color: "#d1d1d1", ...iconSx }} />
        <p>Light</p>
      </>
    )

  return (
    <IconButton onClick={toggleColorMode}>
      {mode === "light" ? (
        <DarkMode sx={{ color: "#121212" }} />
      ) : (
        <LightModeOutlined sx={{ color: "#d1d1d1" }} />
      )}
    </IconButton>
  )
}

export default ThemeButton

const iconSx = { fontSize: "1.7rem", my: "5px" }
