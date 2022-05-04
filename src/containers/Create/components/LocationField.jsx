import { InputAdornment } from "@mui/material"
import TextField from "@mui/material/TextField"
import { IoLocation } from "react-icons/io5"
import React from "react"

const LocationField = React.forwardRef((props, ref) => {
  return (
    <TextField
      inputRef={ref}
      sx={{ flex: 1 }}
      placeholder="Location"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IoLocation />
          </InputAdornment>
        ),
      }}
    />
  )
})

export default LocationField
