import styled from "@emotion/styled"
import IconButton from "@mui/material/IconButton"
import { IoAdd } from "react-icons/io5"
import { Link } from "react-router-dom"
import { useColorMode } from "../../../store/theme/colorMode-context"

const AddButton = () => {
  const { mode } = useColorMode()
  return (
    <Link to="create">
      <CustomIconButton mode={mode}>
        <IoAdd size="25" color={mode === "light" ? "#fff" : "#121212"} />
      </CustomIconButton>
    </Link>
  )
}

export default AddButton

const CustomIconButton = styled(IconButton)(({ mode }) => ({
  backgroundColor: mode === "light" ? "#121212" : "#d1d1d1",
  borderRadius: "5px",
  transitionTimingFunction: "ease-in-out",
  transitionDuration: "0.2s",
  "&:hover": {
    backgroundColor: mode === "light" ? "#3b3b3b" : "#a3a3a3",
    filter: "drop-shadow(0px 1px 6px rgba(0,0,0,0.2))",
  },
}))
