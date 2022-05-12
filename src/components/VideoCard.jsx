import React, { useState, useEffect } from "react"
import Grid from "@mui/material/Grid"
// prettier-ignore
import {CardMedia, Card, CardContent, Typography, Avatar, CardActions} from "@mui/material"
import styled from "@emotion/styled"
import { Link } from "react-router-dom"
import { getInfo } from "../lib/api"
import moment from "moment"

const Item = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: theme.spacing(1.5),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(1),
  },
  overflow: "hidden",
  textAlign: "center",
  position: "relative",
  transition: "all 0.15s ease-in-out",
  "&:hover": {
    transform: "scale(1.1)",
  },
}))

const CardLink = styled(Link)({
  textDecoration: "none",
})

const CustomCardContent = styled(CardContent)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  cursor: "default",
  paddingBottom: "0",
})

const VideoCard = ({ data }) => {
  const { videoUrl, title, userId, id } = data
  const [user, setUser] = useState(null)

  useEffect(() => {
    getInfo({ document: "users", id: userId })
      .then((user) => setUser(user))
      .catch((error) => console.log(error))
  }, [userId])

  return (
    <Item item xs={4} sm={4} md={4} lg={3} p={0} component="li">
      <Card>
        <CardLink to={`/videos/${id}`}>
          <CardMedia
            alt={title}
            component="video"
            title={title}
            src={videoUrl}
            muted
            onMouseOver={(e) => e.target.play()}
            onMouseOut={(e) => e.target.pause()}
          />
        </CardLink>
        <CustomCardContent>
          <Typography component="h2">{title}</Typography>
          <Link to={`/users/${userId}`}>
            <Avatar src={user?.photoURL} />
          </Link>
        </CustomCardContent>
        <CardActions sx={{ justifyContent: "flex-end", paddingRight: "16px" }}>
          <Typography color="text.secondary" fontSize="12px">
            {moment(new Date(parseInt(id)).toISOString()).calendar()}
          </Typography>
        </CardActions>
      </Card>
    </Item>
  )
}

export default VideoCard
