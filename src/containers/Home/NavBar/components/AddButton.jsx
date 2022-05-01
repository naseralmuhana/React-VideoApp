import { alpha, IconButton, Stack } from "@mui/material"
import { IoAdd } from "react-icons/io5"
import { Link } from "react-router-dom"

const AddButton = () => {
  return (
    <Link to="/login">
      <IconButton
        sx={{
          backgroundColor: "#4A5568",
          borderRadius: "5px",
          "&:hover": {
            backgroundColor: alpha("#4A5568", 0.9),
            filter: "drop-shadow(0px 1px 6px rgba(0,0,0,0.2))",
          },
        }}
      >
        <IoAdd size="25" color="#f1f1f1" />
      </IconButton>
    </Link>
  )
}

export default AddButton
