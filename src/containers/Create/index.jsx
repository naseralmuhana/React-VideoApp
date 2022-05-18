import FormLabel from "@mui/material/FormLabel"
import TextField from "@mui/material/TextField"
import Tooltip from "@mui/material/Tooltip"
import Box from "@mui/material/Box"
import { doc, setDoc } from "firebase/firestore"
//prettier-ignore
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { useRef, useState } from "react"
import { IoTrash } from "react-icons/io5"
import { useNavigate } from "react-router-dom"
import { AlertMsg, CustomBreadcrumbs, Spinner } from "../../components/UI"
import { db, storage } from "../../firebase-config"
import useAlert from "../../hooks/use-alert"
import { useAuth } from "../../store/auth/auth-context"
//prettier-ignore
import { CategoryField, RichTextEditor, SubmitButton, UploadPlaceHolder } from "./components"
//prettier-ignore
import { TitCatContainer, Container, DeleteIconButton, InnerUploadContainer, UploadContainer, VideoPlayer, VideoPlayerContainer } from "./helper"

const Create = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
  const { requestAlert, alert, status, msg } = useAlert()
  const [category, setCategory] = useState(""),
    [videoAsset, setVideoAsset] = useState(null),
    [loading, setLoading] = useState(false),
    [progress, setProgress] = useState(1)

  const title = useRef(""),
    editor = useRef(null)

  const submitHandler = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      if (!videoAsset) {
        requestAlert("error", "Required Video Field are missing!")
      } else {
        const data = {
          id: `${Date.now()}`,
          title: title.current.value,
          userId: user?.uid,
          category: category,
          videoUrl: videoAsset,
          description: editor.current.value,
        }
        await setDoc(doc(db, "videos", `${Date.now()}`), data)
        navigate("/", { replace: true })
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
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
      type="file"
      name="upload-file"
      onChange={uploadFileHandler}
      accept="video/mp4,video/x-m4v,video/*"
      style={{ width: 0, height: 0 }}
    />
  )

  const deleteIcon = (
    <Tooltip title="Delete">
      <DeleteIconButton onClick={deleteVideoHandler}>
        <IoTrash fontSize={20} />
      </DeleteIconButton>
    </Tooltip>
  )

  return (
    <>
      <CustomBreadcrumbs title={"Create a new Video"} />
      <Container onSubmit={submitHandler}>
        {alert && <AlertMsg status={status} msg={msg} />}
        {/* TitleField && CategorySelector Container */}
        <TitCatContainer>
          <TextField inputRef={title} label="Title" required sx={{ flex: 3 }} />
          <CategoryField value={category} onChange={setCategory} />
        </TitCatContainer>
        {/* Upload videoField container */}
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
              {deleteIcon}
              <VideoPlayer src={videoAsset} controls />
            </VideoPlayerContainer>
          )}
        </UploadContainer>
        {/* Text Editor */}
        <Box sx={{ position: "relative", width: "100%", height: "auto" }}>
          <RichTextEditor ref={editor} />
        </Box>
        {/* Submit Button */}
        <SubmitButton loading={loading} />
      </Container>
    </>
  )
}

export default Create
