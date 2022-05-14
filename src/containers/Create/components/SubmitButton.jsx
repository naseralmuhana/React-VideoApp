import { Save } from "@mui/icons-material"
import { LoadingButton } from "@mui/lab"
import React from "react"

const SubmitButton = ({ loading }) => {
  return (
    <LoadingButton
      type="submit"
      loading={loading}
      loadingPosition="center"
      startIcon={<Save />}
      variant={`${loading ? "outlined" : "contained"}`}
      sx={{ mt: "0.5rem", width: "40%" }}
    >
      Upload
    </LoadingButton>
  )
}

export default SubmitButton
