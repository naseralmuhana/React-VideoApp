import styled from "@emotion/styled"
import Stack from "@mui/material/Stack"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { CustomBreadcrumbs, NotFound, Spinner } from "../../components/UI"
import VideosGrid from "../../components/VideosGrid"
import useHttp from "../../hooks/use-http"
import { Helmet } from "react-helmet"
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
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Category | {categoryId}</title>
          <link
            rel="canonical"
            href={`https://spiffy-bubblegum-7dabd3.netlify.app/category/${categoryId}`}
          />
          <meta name="description" content={`${categoryId} Videos to watch`} />
        </Helmet>
        <Container>
          <CustomBreadcrumbs title={categoryId} />
          {data?.length === 0 && status === "completed" && <NotFound />}
          {data.length > 0 && <VideosGrid videos={data} />}
        </Container>
      </>
    )
  if (data?.length === 0 && status === "completed") return <NotFound />
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link
          rel="canonical"
          href="https://spiffy-bubblegum-7dabd3.netlify.app/"
        />
        <meta name="description" content="Browse, Watch and Add Videos" />
      </Helmet>
      {data.length > 0 && <VideosGrid videos={data} />}
    </>
  )
}

export default Home

const Container = styled(Stack)({
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  height: "100%",
  overflow: "hidden",
})
