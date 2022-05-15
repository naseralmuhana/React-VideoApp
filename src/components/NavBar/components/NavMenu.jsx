import styled from "@emotion/styled"
import AddBox from "@mui/icons-material/AddBox"
import Logout from "@mui/icons-material/Logout"
import MoreIcon from "@mui/icons-material/MoreVert"
import Person from "@mui/icons-material/Person"
import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import { useState } from "react"
import { Link } from "react-router-dom"
import useNavAction from "../../../hooks/use-nav-action"
import { useAuth } from "../../../store/auth/auth-context"
import { useColorMode } from "../../../store/theme/colorMode-context"
import AddButton from "./AddButton"
import ThemeButton from "./ThemeButton"

const NavMenu = () => {
  const { user, logout } = useAuth()
  const { toggleColorMode } = useColorMode()
  const { action: logoutHandler } = useNavAction(logout, "/login")

  const [profileAnchorEl, setProfileAnchorEl] = useState(null),
    [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)

  const isProfileMenuOpen = Boolean(profileAnchorEl),
    isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleProfileMenuOpen = (event) =>
    setProfileAnchorEl(event.currentTarget)

  const handleMobileMenuOpen = (event) =>
    setMobileMoreAnchorEl(event.currentTarget)

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleProfileMenuClose = () => {
    setProfileAnchorEl(null)
    handleMobileMenuClose()
  }

  const LogoutMenuItem = (
    <MenuItem
      onClick={logoutHandler}
      sx={{ justifyContent: "flex-start", gap: ".7rem" }}
    >
      <Logout sx={{ fontSize: "1.7rem", my: "5px" }} />
      <p>Logout</p>
    </MenuItem>
  )

  const profileMenuId = "primary-search-account-menu"
  const renderProfileMenu = (
    <Menu
      anchorEl={profileAnchorEl}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      id={profileMenuId}
      keepMounted
      open={isProfileMenuOpen}
      onClose={handleProfileMenuClose}
    >
      <MenuItem
        onClick={handleProfileMenuClose}
        component={Link}
        to={`/users/${user.uid}`}
        sx={{ justifyContent: "flex-start", gap: ".7rem" }}
      >
        <Person sx={{ fontSize: "1.7rem", my: "5px" }} />
        <p>Account</p>
      </MenuItem>
      {LogoutMenuItem}
    </Menu>
  )

  const mobileMenuId = "primary-search-account-menu-mobile"
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MobileMenuItem onClick={toggleColorMode}>
        <ThemeButton withText />
      </MobileMenuItem>

      <MobileMenuItem>
        <AddBox sx={{ fontSize: "1.7rem", my: "5px" }} />
        <p>New</p>
      </MobileMenuItem>

      <MenuItem
        onClick={handleProfileMenuClose}
        component={Link}
        to={`/users/${user.uid}`}
        sx={{ justifyContent: "flex-start", gap: ".7rem" }}
      >
        <Avatar
          src={user.photoURL}
          sx={{ width: "27.5px", height: "27.5px" }}
        />
        <p>Account</p>
      </MenuItem>

      {LogoutMenuItem}
    </Menu>
  )

  return (
    <>
      <DesktopContainer>
        <ThemeButton />
        <AddButton />
        <IconButton
          size="small"
          aria-label="account of current user"
          aria-controls={profileMenuId}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
        >
          <Avatar src={user.photoURL} />
        </IconButton>
      </DesktopContainer>
      <MobileContainer>
        <IconButton
          size="large"
          aria-label="show more"
          aria-controls={mobileMenuId}
          aria-haspopup="true"
          onClick={handleMobileMenuOpen}
        >
          <MoreIcon />
        </IconButton>
      </MobileContainer>

      {renderMobileMenu}
      {renderProfileMenu}
    </>
  )
}

export default NavMenu

const DesktopContainer = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}))

const MobileContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}))

const MobileMenuItem = styled(MenuItem)({
  justifyContent: "flex-start",
  gap: ".7rem",
})
