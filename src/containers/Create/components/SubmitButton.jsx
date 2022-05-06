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
      sx={{
        marginTop: "0.5rem",
        width: "80%",
      }}
    >
      Upload
    </LoadingButton>
  )
}

export default SubmitButton
