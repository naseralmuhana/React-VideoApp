import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { Spinner } from "../../components/UI"
import useHttp from "../../hooks/use-http"
import { getInfo } from "../../lib/api"

import Grid from "@mui/material/Grid"
import { CustomBreadcrumbs, Description, Player } from "./components"
import { styled } from "@mui/material/styles"
import Stack from "@mui/material/Stack"

const Details = () => {
  console.log("Details")
  const { videoId } = useParams()
  const { sendRequest, status, data, error } = useHttp(true)

  useEffect(() => {
    sendRequest(getInfo, { document: "videos", id: videoId })
  }, [sendRequest, videoId])

  if (status === "pending" && !error && !data) return <Spinner />
  return (
    <Container>
      <CustomBreadcrumbs title={data?.title} />
      <Grid container>
        {/* Player */}
        <Player url={data?.videoUrl} />
        <Grid item xs={4}></Grid>
      </Grid>
      {/* Description */}
      {data?.description && <Description desc={data?.description} />}
    </Container>
  )
}

export default Details

const Container = styled(Stack)({
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  padding: "1rem 1.5rem",
  gap: "1rem",
})

// TODO: if user enter incorrect url => should display no such video there with button to goto the home page (under some code to use)

// const navigate = useNavigate()
// if (status === "completed" && !error && !data)
