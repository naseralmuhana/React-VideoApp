import styled from "@emotion/styled"
import { IconButton } from "@mui/material"
import Stack from "@mui/material/Stack"
import { motion } from "framer-motion"

export const Container = styled(motion.form)(({ theme }) => ({
  margin: "2rem 0rem",
  border: "1px solid",
  borderRadius: "5px",
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.2rem",
  width: "95%",
  height: "100%",
  borderColor: theme.palette.otherColor.borderColor,
  [theme.breakpoints.between("0", "340")]: {
    padding: "0.5rem",
    margin: "1rem 0.25rem",
  },
}))

export const TitCatContainer = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  gap: "0.5rem",
  margin: "0.5rem",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "stretch",
    gap: "0.75rem",
  },
}))

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
  transition: "all 0.5s",
  [theme.breakpoints.down("sm")]: {
    height: "250px",
  },
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
