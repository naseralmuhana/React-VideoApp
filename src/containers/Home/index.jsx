import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { Spinner, NotFound } from "../../components/UI"
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
  if (data?.length === 0) return <NotFound />

  return data.length > 0 && <VideosGrid videos={data} />
}

export default Home
