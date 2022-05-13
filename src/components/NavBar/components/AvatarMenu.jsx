import { Logout } from "@mui/icons-material"
import {
  Avatar,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
} from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"
import useNavAction from "../../../hooks/use-nav-action"
import { useAuth } from "../../../store/auth/auth-context"

const AvatarMenu = () => {
  const { user, logout } = useAuth()
  const { action: logoutHandler } = useNavAction(logout, "/login")

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{
          "&:hover": {
            backgroundColor: "transparent",
            filter: "drop-shadow(0px 1px 3px rgba(0,0,0,0.2))",
          },
        }}
      >
        <Avatar src={user.photoURL} sx={{ width: 40, height: 40 }} />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={menuPaperProps}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem component={Link} to={`/users/${user.uid}`}>
          <Avatar /> My account
        </MenuItem>

        <Divider />

        <MenuItem onClick={logoutHandler}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  )
}

export default AvatarMenu

const menuPaperProps = {
  elevation: 0,
  sx: {
    overflow: "visible",
    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    mt: 1.5,
    "& .MuiAvatar-root": {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: "background.paper",
      transform: "translateY(-50%) rotate(45deg)",
      zIndex: 0,
    },
  },
}
