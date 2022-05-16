import Box from "@mui/material/Box"
import { Link } from "react-router-dom"
import Logo_light from "../../assets/images/logo.png"
import Logo_Dark from "../../assets/images/logo_dark.png"
import { useColorMode } from "../../store/theme/colorMode-context"

const Logo = ({ xsw = "110px", smw = "150px", mdw = "180px" }) => {
  const { mode } = useColorMode()
  return (
    <Link to="/">
      <Box
        component="img"
        src={mode === "light" ? Logo_Dark : Logo_light}
        sx={{ width: { xs: xsw, sm: smw, md: mdw } }}
      />
    </Link>
  )
}

export default Logo
