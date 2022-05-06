import styled from "@emotion/styled"
import { IconButton } from "@mui/material"
import Stack from "@mui/material/Stack"

export const Container = styled("form")(({ theme }) => ({
  margin: "3rem",
  border: "1px solid",
  borderRadius: "5px",
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.2rem",
  width: "80%",
  height: "100%",
  borderColor: theme.palette.otherColor.borderColor,
}))

export const CatLocContainer = styled(Stack)({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  gap: "0.5rem",
  margin: "0.5rem",
})

export const UploadContainer = styled(Stack)(({ theme }) => ({
  border: "1px dashed",
  height: "400px",
  width: "100%",
  borderRadius: "5px",
  overflow: "hidden",
  position: "relative",
  justifyContent: "center",
  alignItems: "center",
  borderColor: theme.palette.otherColor.borderColor,
  marginBottom: "0.5rem",
}))

export const InnerUploadContainer = styled(Stack)(({ theme }) => ({
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  cursor: "pointer",
}))

export const VideoPlayerContainer = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  position: "relative",
}))

export const DeleteIconButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: "20px",
  right: "20px",
  zIndex: "10",
  color: theme.palette.error.dark,
  // "&:hover, &.Mui-focusVisible": { backgroundColor: "yellow" },
}))

export const VideoPlayer = styled("video")(({ theme }) => ({
  width: "100%",
  height: "100%",
}))
