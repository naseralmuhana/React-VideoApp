import DeleteIcon from "@mui/icons-material/Delete"
import Avatar from "@mui/material/Avatar"
import Grid from "@mui/material/Grid"
import IconButton from "@mui/material/IconButton"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import moment from "moment"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ConfirmDialog } from "../../../components/UI"
import { deleteInfo, getInfo } from "../../../lib/api"
import { useAuth } from "../../../store/auth/auth-context"

const VideoDetails = ({ userId, id, url }) => {
  const { user } = useAuth(),
    navigate = useNavigate(),
    [userInfo, setUserInfo] = useState(null)

  const [open, setOpen] = useState(false)

  const handleClickOpen = (event) => setOpen(event.currentTarget)
  const confirmHandler = () => {
    deleteInfo({ id })
    navigate("/", { replace: true })
  }

  useEffect(() => {
    getInfo({ document: "users", id: userId })
      .then((user) => setUserInfo(user))
      .catch((error) => console.log(error))
  }, [userId])

  return (
    <Grid item container direction="column" xs={3} spacing={2} mt={-1.75}>
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
      <Grid item container alignItems="center">
        {/* Delete IconButton with a popup dialog  */}
        {user.uid === userId && (
          <Grid item>
            <IconButton aria-label="delete" onClick={handleClickOpen}>
              <DeleteIcon />
            </IconButton>
            {/* Delete Dialog */}
            <ConfirmDialog
              open={open}
              setOpen={setOpen}
              onConfirm={confirmHandler}
            />
          </Grid>
        )}
        {/* Download Button */}
        {/* <Grid item>
          <a href={url} download onClick={(e) => e.stopPropagation()}>
            <Button variant="contained">Free Download</Button>
          </a>
        </Grid> */}
      </Grid>
    </Grid>
  )
}

export default VideoDetails
