import styled from "@emotion/styled"
import Stack from "@mui/material/Stack"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { CustomBreadcrumbs, NotFound, Spinner } from "../../components/UI"
import VideosGrid from "../../components/VideosGrid"
import useHttp from "../../hooks/use-http"
import { getInfo, getUserVideos } from "../../lib/api"
import Cover from "./components/Cover"
import { Helmet } from "react-helmet"

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
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>User | {userData?.displayName}</title>
        <link
          rel="canonical"
          href={`https://spiffy-bubblegum-7dabd3.netlify.app/user/${userId}`}
        />
        <meta
          name="description"
          content={`${userData?.displayName} Profile & Videos`}
        />
      </Helmet>
      <Container>
        <CustomBreadcrumbs title={userData?.displayName} pb="1rem" />
        <Body>
          <Cover src={userData?.photoURL} />
          {videosData.length > 0 && <VideosGrid videos={videosData} />}
        </Body>
      </Container>
    </>
  )
}

export default Profile

const Container = styled(Stack)({
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  height: "100%",
  overflow: "hidden",
})

const Body = styled(Stack)({
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "auto",
})
