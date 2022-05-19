import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

const Description = ({ desc }) => {
  return (
    <Stack my="0.5rem" direction="column" alignSelf="baseline" width="100%">
      <Typography
        mb="1rem"
        variant="h5"
        component="h2"
        sx={{ fontSize: { xs: "1.2rem", sm: "1.35rem", md: "1.5rem" } }}
      >
        Description
      </Typography>
      <Box dangerouslySetInnerHTML={{ __html: desc }} />
    </Stack>
  )
}

export default Description
