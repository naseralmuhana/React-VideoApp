import { Typography } from "@mui/material"
import { IoCloudUpload } from "react-icons/io5"

const UploadPlaceHolder = () => {
  return (
    <>
      <IoCloudUpload fontSize={30} />
      <Typography component={"span"} mt={2} fontSize={20} fontWeight={500}>
        Click to upload
      </Typography>
    </>
  )
}

export default UploadPlaceHolder
