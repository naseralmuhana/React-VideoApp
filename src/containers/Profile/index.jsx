import { useEffect } from "react"
import useHttp from "../../hooks/use-http"
import { useParams } from "react-router-dom"
import { getUserVideos, getInfo } from "../../lib/api"
import { Spinner, CustomBreadcrumbs } from "../../components/UI"
import Stack from "@mui/material/Stack"
import styled from "@emotion/styled"
import Cover from "./components/Cover"
import VideosGrid from "../../components/VideosGrid"

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

  console.log("PROFILE")
  return (
    <Container>
      <CustomBreadcrumbs title={userData?.displayName} />
      <Body>
        <Cover src={userData?.photoURL} />
        {videosData.length > 0 && (
          <VideosGrid
            title={`${userData?.displayName} Videos`}
            videos={videosData}
          />
        )}
      </Body>
    </Container>
  )
}

export default Profile

const Container = styled(Stack)({
  flexDirection: "column",
  alignItems: "center",
  // justifyContent: "center",
  width: "100%",
  height: "100%",
  padding: "1rem 1.5rem",
  gap: "1rem",
})

const Body = styled(Stack)({
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "auto",
})
