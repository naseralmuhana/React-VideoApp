import { InputAdornment, TextField } from "@mui/material"
import { IoSearch } from "react-icons/io5"

const Search = () => {
  return (
    <TextField
      label="Search"
      sx={{
        width: "60vw",
        color: "text.primary",
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IoSearch size="22" />
          </InputAdornment>
        ),
      }}
    />
  )
}

export default Search
