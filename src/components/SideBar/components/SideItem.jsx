import styled from "@emotion/styled"
import Stack from "@mui/material/Stack"
import Tooltip from "@mui/material/Tooltip"
import Zoom from "@mui/material/Zoom"
import { NavLink } from "react-router-dom"

const SideItem = ({ title, icon, to = "/" }) => {
  return (
    <Stack component="li" my={2}>
      <CustomLink to={to}>
        <Tooltip
          title={title}
          placement="right"
          arrow
          TransitionComponent={Zoom}
          TransitionProps={{ timeout: 400 }}
        >
          <Stack component={"span"}>{icon}</Stack>
        </Tooltip>
      </CustomLink>
    </Stack>
  )
}

export default SideItem

const CustomLink = styled(NavLink)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  "&.active": {
    color: "#0CC1F2",
  },
}))
