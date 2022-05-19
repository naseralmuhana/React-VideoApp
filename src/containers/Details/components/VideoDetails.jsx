import DeleteIcon from "@mui/icons-material/Delete"
import Tooltip from "@mui/material/Tooltip"
import Avatar from "@mui/material/Avatar"
import Grid from "@mui/material/Grid"
import IconButton from "@mui/material/IconButton"
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

  const handleClickOpen = () => setOpen(true)
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
    <Grid
      item
      container
      direction="column"
      xs={12}
      md={3}
      spacing={2}
      mt={-1.75}
    >
      {/* User[avatar & name] && published time  */}
      <Grid item container gap="0.5rem">
        {/* Avatar */}
        <Grid item>
          <Link to={`/users/${userId}`}>
            <Avatar
              src={userInfo?.photoURL}
              sx={{
                width: { xs: "33px", sm: "45px" },
                height: { xs: "33px", sm: "45px" },
              }}
            />
          </Link>
        </Grid>
        {/* Username & published Time */}
        <Grid item>
          <Typography sx={{ fontSize: { xs: "0.75rem", sm: "1rem" } }}>
            {userInfo?.displayName}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "0.55rem", sm: "0.7rem" },
              color: "text.secondary",
            }}
          >
            {moment(new Date(parseInt(id)).toISOString()).calendar()}
          </Typography>
        </Grid>
      </Grid>
      {/* Buttons [Delete & download]  */}
      {user.uid === userId && (
        <Grid item container alignItems="center" justifyContent="space-evenly">
          {/* Delete IconButton with a popup dialog  */}
          <Grid item>
            <Tooltip title="Delete">
              <IconButton aria-label="delete" onClick={handleClickOpen}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
            {/* Delete Dialog */}
            <ConfirmDialog
              open={open}
              setOpen={setOpen}
              onConfirm={confirmHandler}
            />
          </Grid>
        </Grid>
      )}
    </Grid>
  )
}

export default VideoDetails
