import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

const Description = ({ desc }) => {
  return (
    <Stack my="0.5rem" direction="column" alignSelf="baseline">
      <Typography mb="1rem" variant="h5" component="h2">
        Description
      </Typography>
      <Box dangerouslySetInnerHTML={{ __html: desc }} />
    </Stack>
  )
}

export default Description
