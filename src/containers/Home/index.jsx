import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import { useEffect } from "react"
import Spinner from "../../components/Spinner"

import { useVideos } from "../../store/data/videos-context"
import VideoCard from "./components/VideoCard"

const Home = () => {
  const { videos, fetchAllVideos } = useVideos()

  useEffect(() => {
    fetchAllVideos()
  }, [fetchAllVideos])

  if (videos.length === 0) return <Spinner />

  return (
    <Box sx={{ flex: "1", width: "100%", padding: "1.5rem 2.5rem" }}>
      <Grid
        container
        columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
        component="ul"
        sx={{ listStyleType: "none", margin: 0 }}
      >
        {videos.map((video) => (
          <VideoCard key={video.id} data={video} />
        ))}
      </Grid>
    </Box>
  )
}

export default Home
