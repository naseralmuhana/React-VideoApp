import styled from "@emotion/styled"
import Stack from "@mui/material/Stack"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { CustomBreadcrumbs, NotFound, Spinner } from "../../components/UI"
import VideosGrid from "../../components/VideosGrid"
import useHttp from "../../hooks/use-http"
import { getInfo, getUserVideos } from "../../lib/api"
import Cover from "./components/Cover"

const Profile = () => {
  const { userId } = useParams()

  const {
    sendRequest: fetchVideos,
    status: videosStatus,
    data: videosData,
  } = useHttp(true)
  const {
    sendRequest: fetchUser,
    status: userStatus,
    data: userData,
  } = useHttp(true)

  useEffect(() => {
    fetchVideos(getUserVideos, { userId })
  }, [fetchVideos, userId])

  useEffect(() => {
    fetchUser(getInfo, { document: "users", id: userId })
  }, [fetchUser, userId])

  if (videosStatus === "pending" || userStatus === "pending") return <Spinner />
  if (!userData) return <NotFound />

  return (
    <Container>
      <CustomBreadcrumbs title={userData?.displayName} pb="1rem" />
      <Body>
        <Cover src={userData?.photoURL} />
        {videosData.length > 0 && <VideosGrid videos={videosData} />}
      </Body>
    </Container>
  )
}

export default Profile

const Container = styled(Stack)({
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  height: "100%",
})

const Body = styled(Stack)({
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "auto",
})
