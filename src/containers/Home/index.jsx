import { Typography, Box } from "@mui/material"
import Spinner from "../../components/Spinner"

import { useVideos } from "../../store/data/videos-context"

const Home = () => {
  console.log("HOME")
  const { videos } = useVideos()
  if (videos.length === 0) return <Spinner />

  return (
    <>
      <Box>
        <Typography variant="h4">Home</Typography>
      </Box>
    </>
  )
}

export default Home
