import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import VideoCard from "../../../components/VideoCard"

const RecommendedVideos = ({ videos }) => {
  return (
    <Stack my="0.5rem" direction="column" alignSelf="baseline">
      <Typography mb="1rem" variant="h5" component="h2">
        Recommended Videos
      </Typography>
      <Grid
        container
        columns={{ xs: 4, sm: 8, md: 12 }}
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

export default RecommendedVideos
