import styled from "@emotion/styled"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import notFoundSvg from "../../assets/images/notfound.svg"

const NotFound = () => {
  return (
    <Container>
      <Box component="img" src={notFoundSvg} width={600} />
      <Typography fontSize={40}>Not Found</Typography>
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
