import { Box } from "@mui/material"
import { Link } from "react-router-dom"
// import Logo_light from "../../../../assets/images/logo.png"
import Logo_Dark from "../../../../assets/images/logo_dark.png"

const Logo = () => {
  return (
    <Link to="/">
      <Box width="180px" component="img" src={Logo_Dark} />
    </Link>
  )
}

export default Logo
