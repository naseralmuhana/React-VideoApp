import styled from "@emotion/styled"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import notFoundSvg from "../../assets/images/notfound.svg"

import { motion } from "framer-motion"
import { variants } from "../../utilities"

const NotFound = ({ msg = "Not Found" }) => {
  return (
    <Container
      component={motion.div}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Box
        component="img"
        src={notFoundSvg}
        sx={{ width: "70%", maxWidth: "600px", objectFit: "cover" }}
      />
      <Typography sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" } }}>
        {msg}
      </Typography>
    </Container>
  )
}

export default NotFound

const Container = styled(Stack)({
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
  height: "100%",
})
