import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import { styled } from "@mui/material/styles"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Spinner } from "../../components/UI"
import useHttp from "../../hooks/use-http"
import { getInfo } from "../../lib/api"
import { useVideos } from "../../store/data/videos-context"
// prettier-ignore
import { CustomBreadcrumbs, Description, Player, RecommendedVideos, VideoDetails } from "./components"

const Details = () => {
  console.log("Details")
  const { videoId } = useParams()
  const { videos, fetchAllVideos } = useVideos()
  const { sendRequest, status, data, error } = useHttp(true)
  const [recommended, setRecommended] = useState([])

  useEffect(() => {
    console.log("Fetch useEffect")
    fetchAllVideos()
  }, [fetchAllVideos])

  useEffect(() => {
    console.log("sendRequest useEffect")
    sendRequest(getInfo, { document: "videos", id: videoId })
  }, [sendRequest, videoId])

  useEffect(() => {
    console.log("RecommendedVideos useEffect")
    if (data && status === "completed") {
      setRecommended(
        videos.filter((v) => v.category === data.category && v.id !== videoId)
      )
    }
  }, [status, data, videoId, videos])

  if (videos.length === 0) return <Spinner />
  if (status === "pending" && !error && !data) return <Spinner />
  return (
    <Container>
      <CustomBreadcrumbs title={data?.title} />
      <Grid container columns={13} gap="0.5rem">
        {/* Player */}
        <Player url={data?.videoUrl} />
        {/* video details (user who upload the video , publish date, download button) */}
        <VideoDetails
          userId={data?.userId}
          id={data?.id}
          url={data?.videoUrl}
        />
      </Grid>
      {/* Description */}
      {data?.description && <Description desc={data?.description} />}
      {recommended.length > 0 && <RecommendedVideos videos={recommended} />}
    </Container>
  )
}

export default Details

const Container = styled(Stack)({
  flexDirection: "column",
  alignItems: "center",
  // justifyContent: "center",
  width: "100%",
  height: "100%",
  padding: "1rem 1.5rem",
  gap: "1rem",
})

// TODO: if user enter incorrect url => should display no such video there with button to goto the home page (under some code to use)

// const navigate = useNavigate()
// if (status === "completed" && !error && !data)
