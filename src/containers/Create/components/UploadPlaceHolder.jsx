import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import { IoCloudUpload } from "react-icons/io5"

const UploadPlaceHolder = () => {
  return (
    <>
      <Box
        component={IoCloudUpload}
        sx={{ fontSize: { xs: "25px", sm: "30px" } }}
      />
      <Typography
        component={"span"}
        mt={2}
        fontWeight={500}
        sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}
      >
        Click to upload
      </Typography>
    </>
  )
}

export default UploadPlaceHolder
