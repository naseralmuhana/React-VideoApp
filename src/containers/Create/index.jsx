//prettier-ignore
import { Button, FormLabel, TextField } from "@mui/material"
//prettier-ignore
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { useRef, useState } from "react"
import { IoTrash } from "react-icons/io5"
import AlertMsg from "../../components/AlertMsg"
import Spinner from "../../components/Spinner"
import { storage } from "../../firebase-config"
import useAlert from "../../hooks/use-alert"
import { CategoryField, LocationField, UploadPlaceHolder } from "./components"
//prettier-ignore
import { CatLocContainer, Container, DeleteIconButton, InnerUploadContainer, UploadContainer, VideoPlayer, VideoPlayerContainer } from "./helper"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css" // ES6

const Create = () => {
  console.log("CREATE")
  const { requestAlert, alert, status, msg } = useAlert()
  const title = useRef("")
  const location = useRef("")
  const inputFile = useRef(null)
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
        setLoading(false)
      },
      () => {
        // Handle successful uploads on complete
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setVideoAsset(downloadURL)
          setLoading(false)
          requestAlert(
            "success",
            "Your video is uploaded to our server successfully"
          )
        })
      }
    )
  }

  const deleteVideoHandler = () => {
    // Create a reference to the file to delete
    const desertRef = ref(storage, videoAsset)
    // Delete the file
    deleteObject(desertRef)
      .then(() => {
        // File deleted successfully
        setVideoAsset(null)
        requestAlert("warning", "Your video was removed successfully")
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
        console.log(error)
      })
  }

  const input = (
    <input
      ref={inputFile}
      type="file"
      name="upload-file"
      onChange={uploadFileHandler}
      accept="video/mp4,video/x-m4v,video/*"
      style={{ width: 0, height: 0 }}
    />
  )

  return (
    <Container onSubmit={submitHandler}>
      {alert && <AlertMsg status={status} msg={msg} />}
      {/* TitleField */}
      <TextField inputRef={title} label="Title" required fullWidth />
      {/* categorySelect , locationField container */}
      <CatLocContainer>
        <CategoryField value={category} onChange={setCategory} />
        <LocationField ref={location} />
      </CatLocContainer>
      {/* upload videoField container */}
      <UploadContainer>
        {!videoAsset ? (
          <FormLabel sx={{ width: "100%", flex: 1 }}>
            <InnerUploadContainer>
              {loading ? (
                <Spinner msg={"Uploading Your Video"} progress={progress} />
              ) : (
                <>
                  <UploadPlaceHolder />
                  {input}
                </>
              )}
            </InnerUploadContainer>
          </FormLabel>
        ) : (
          <VideoPlayerContainer>
            <DeleteIconButton onClick={deleteVideoHandler}>
              <IoTrash fontSize={20} />
            </DeleteIconButton>
            <VideoPlayer src={videoAsset} controls />
          </VideoPlayerContainer>
        )}
      </UploadContainer>
      {/* Text Editor */}
      {/* <ReactQuill /> */}

      {/* <Button type="submit" variant="outlined">
        Add
      </Button> */}
    </Container>
  )
}

export default Create
