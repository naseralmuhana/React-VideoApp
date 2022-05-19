import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import { styled } from "@mui/material/styles"
import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { CustomBreadcrumbs, Spinner, NotFound } from "../../components/UI"
import VideosGrid from "../../components/VideosGrid"
import useHttp from "../../hooks/use-http"
import { getInfo, getRecommendedVideos } from "../../lib/api"
import { Description, Player, VideoDetails } from "./components"

const Details = () => {
  const { videoId } = useParams()
  const {
    sendRequest: detailsRequest,
    status: detailsStatus,
    data: detailsData,
  } = useHttp(true)
  const {
    sendRequest: recommendedRequest,
    status: recommendedStatus,
    data: recommendedData,
  } = useHttp(true)

  useEffect(() => {
    recommendedRequest(getRecommendedVideos, {
      category: detailsData?.category,
      videoId,
    })
  }, [recommendedRequest, detailsData, detailsData?.category, videoId])

  useEffect(() => {
    detailsRequest(getInfo, { document: "videos", id: videoId })
  }, [detailsRequest, videoId])

  if (detailsStatus === "pending" || recommendedStatus === "pending")
    return <Spinner />
  if (!detailsData) return <NotFound />

  return (
    <Container>
      <CustomBreadcrumbs title={detailsData?.title} />
      <Grid container columns={13} gap="0.5rem">
        {/* Player */}
        <Player url={detailsData?.videoUrl} />
        {/* video details (user who upload the video , publish date, download button) */}
        <VideoDetails
          userId={detailsData?.userId}
          id={detailsData?.id}
          url={detailsData?.videoUrl}
        />
      </Grid>
      {/* Description */}
      {detailsData?.description && (
        <Description desc={detailsData?.description} />
      )}
      {recommendedData && (
        <VideosGrid title="Recommended Videos" videos={recommendedData} />
      )}
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
