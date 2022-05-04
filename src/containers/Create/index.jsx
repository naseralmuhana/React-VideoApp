import { Box, Button, FormLabel, Stack, TextField } from "@mui/material"
import { useRef, useState } from "react"
import Spinner from "../../components/Spinner"
import { CategoryField, LocationField, UploadPlaceHolder } from "./components"
import { CatLocStack, CustomStack, InnerVideoStack, VideoStack } from "./helper"
//prettier-ignore
import {ref, uploadBytesResumable, getDownloadURL, deleteObject} from 'firebase/storage'
import { storage } from "../../firebase-config"

const Create = () => {
  console.log("CREATE")
  const title = useRef("")
  const location = useRef("")
  const [category, setCategory] = useState("")

  const [videoAsset, setVideoAsset] = useState(null)
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(1)

  const submitHandler = (e) => {
    e.preventDefault()
    const enteredTitle = title.current.value
    const enteredLocation = location.current.value
    console.log("Title =>", enteredTitle)
    console.log("Category =>", category)
    console.log("Location =>", enteredLocation)
  }

  const uploadFileHandler = (e) => {
    setLoading(true)
    // Selected File
    const videoFile = e.target.files[0]
    console.log(videoFile)
    // get a Ref to where we gonna upload the file
    const storageRef = ref(storage, `Videos/${Date.now()}-${videoFile.name}`)
    // Upload the file and metadata
    const uploadTask = uploadBytesResumable(storageRef, videoFile)
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setProgress(uploadProgress)
      },
      (error) => {
        // Handle unsuccessful uploads
        console.log(error)
      },
      () => {
        // Handle successful uploads on complete
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setVideoAsset(downloadURL)
          setLoading(false)
        })
      }
    )
  }

  return (
    <CustomStack onSubmit={submitHandler}>
      <TextField inputRef={title} label="Title" required fullWidth />
      <CatLocStack>
        <CategoryField value={category} onChange={setCategory} />
        <LocationField ref={location} />
      </CatLocStack>

      <VideoStack>
        {!videoAsset ? (
          <FormLabel sx={{ width: "100%", flex: 1 }}>
            <InnerVideoStack>
              {loading ? (
                <Spinner msg={"Uploading Your Video"} progress={progress} />
              ) : (
                <UploadPlaceHolder />
              )}
            </InnerVideoStack>

            {!loading && (
              <input
                type="file"
                name="upload-file"
                onChange={uploadFileHandler}
                accept="video/mp4,video/x-m4v,video/*"
                style={{ width: 0, height: 0 }}
              />
            )}
          </FormLabel>
        ) : (
          <Box>Something</Box>
        )}
      </VideoStack>
      <Button type="submit" variant="outlined">
        Add
      </Button>
    </CustomStack>
  )
}

export default Create
