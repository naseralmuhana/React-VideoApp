import { Box } from "@mui/material"
import { Link } from "react-router-dom"
import Logo_light from "../../../assets/images/logo.png"
import Logo_Dark from "../../../assets/images/logo_dark.png"
import { useColorMode } from "../../../store/theme/colorMode-context"

const Logo = () => {
  const { mode } = useColorMode()
  return (
    <Link to="/">
      <Box
        width="180px"
        component="img"
        src={mode === "light" ? Logo_Dark : Logo_light}
      />
    </Link>
  )
}

export default Logo
