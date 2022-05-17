import styled from "@emotion/styled"
import Stack from "@mui/material/Stack"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { CustomBreadcrumbs, NotFound, Spinner } from "../../components/UI"
import VideosGrid from "../../components/VideosGrid"
import useHttp from "../../hooks/use-http"
import { getAllVideos, getCategoryVideos } from "../../lib/api"

const Home = () => {
  const { sendRequest, status, data } = useHttp(true)
  const { categoryId } = useParams()
  useEffect(() => {
    if (categoryId) {
      sendRequest(getCategoryVideos, { categoryId })
    } else {
      sendRequest(getAllVideos)
    }
  }, [sendRequest, categoryId])

  if (status === "pending") return <Spinner />

  if (categoryId)
    return (
      <Container>
        <CustomBreadcrumbs title={categoryId} />
        {data?.length === 0 && status === "completed" && <NotFound />}
        {data.length > 0 && <VideosGrid videos={data} />}
      </Container>
    )
  if (data?.length === 0 && status === "completed") return <NotFound />
  return data.length > 0 && <VideosGrid videos={data} />
}

export default Home

const Container = styled(Stack)({
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  height: "100%",
})
