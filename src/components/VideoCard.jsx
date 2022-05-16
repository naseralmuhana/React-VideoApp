import styled from "@emotion/styled"
import Avatar from "@mui/material/Avatar"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import moment from "moment"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getInfo } from "../lib/api"

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
          <TitleTypography component="h2">{title}</TitleTypography>
          <Link to={`/users/${userId}`}>
            <Avatar src={user?.photoURL} />
          </Link>
        </CustomCardContent>
        <CustomCardActions>
          <Typography
            color="text.secondary"
            sx={{ fontSize: { xs: "10px", sm: "12px" } }}
          >
            {moment(new Date(parseInt(id)).toISOString()).calendar()}
          </Typography>
        </CustomCardActions>
      </Card>
    </Item>
  )
}

export default VideoCard

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

const CustomCardContent = styled(CardContent)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  cursor: "default",
  paddingBottom: "0",
  // flexWrap: "wrap",
  [theme.breakpoints.between("0", "320")]: {
    padding: "0.5rem 0.5rem 0",
  },
}))

const TitleTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.between("0", "320")]: {
    fontSize: "0.8rem",
    textAlign: "left",
  },
}))

const CustomCardActions = styled(CardActions)({
  justifyContent: "flex-end",
  paddingRight: "16px",
})
