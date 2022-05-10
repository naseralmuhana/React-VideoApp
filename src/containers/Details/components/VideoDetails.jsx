import DeleteIcon from "@mui/icons-material/Delete"
import Avatar from "@mui/material/Avatar"
import Grid from "@mui/material/Grid"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import moment from "moment"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ConfirmDialog } from "../../../components/UI"
import { getInfo } from "../../../lib/api"
import { useAuth } from "../../../store/auth/auth-context"

const VideoDetails = ({ userId, id }) => {
  const { user } = useAuth(),
    [userInfo, setUserInfo] = useState(null)

  const [open, setOpen] = useState(false)

  const handleClickOpen = (event) => setOpen(event.currentTarget)
  // const handleClose = () => setOpen(null)

  useEffect(() => {
    getInfo({ document: "users", id: userId })
      .then((user) => setUserInfo(user))
      .catch((error) => console.log(error))
  }, [userId])

  return (
    <Grid item container direction="column" xs={4} spacing={2} mt={-1.75}>
      {/* User[avatar & name] && published time  */}
      <Grid item container gap="0.5rem">
        {/* Avatar */}
        <Grid item>
          <Link to={`/users/${userId}`}>
            <Avatar
              src={userInfo?.photoURL}
              sx={{ width: "45px", height: "45px" }}
            />
          </Link>
        </Grid>
        {/* Username & published Time */}
        <Grid item>
          <Typography>{userInfo?.displayName}</Typography>
          <Typography sx={{ fontSize: "11px", color: "text.secondary" }}>
            {moment(new Date(parseInt(id)).toISOString()).calendar()}
          </Typography>
        </Grid>
      </Grid>
      {/* Buttons [Delete & download]  */}
      <Grid item container>
        {/* Delete IconButton */}
        {user.uid === userId && (
          <Grid item>
            <IconButton aria-label="delete" onClick={handleClickOpen}>
              <DeleteIcon />
            </IconButton>
            <ConfirmDialog />
          </Grid>
        )}

        <Grid item></Grid>
      </Grid>
    </Grid>
  )
}

export default VideoDetails
