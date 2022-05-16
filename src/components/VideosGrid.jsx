import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import VideoCard from "./VideoCard"

const VideosGrid = ({ videos, title }) => {
  if (videos.length === 0) return
  return (
    <Stack my="0.5rem" direction="column" alignSelf="baseline" width="100%">
      {title && (
        <Typography mb="1rem" variant="h5" component="h2">
          {title}
        </Typography>
      )}

      <Grid
        container
        columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
        component="ul"
        sx={{ listStyleType: "none", margin: 0, padding: 0 }}
      >
        {videos.map((video) => (
          <VideoCard key={video.id} data={video} />
        ))}
      </Grid>
    </Stack>
  )
}

export default VideosGrid
