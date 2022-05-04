import styled from "@emotion/styled"
import { FormLabel } from "@mui/material"
import Stack from "@mui/material/Stack"

export const CustomStack = styled("form")(({ theme }) => ({
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

export const CatLocStack = styled(Stack)({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  gap: "0.5rem",
  margin: "0.5rem",
})

export const VideoStack = styled(Stack)(({ theme }) => ({
  border: "1px dashed",
  height: "400px",
  width: "100%",
  borderRadius: "5px",
  overflow: "hidden",
  position: "relative",
  justifyContent: "center",
  alignItems: "center",
  borderColor: theme.palette.otherColor.borderColor,
}))

export const InnerVideoStack =styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  cursor: "pointer",
}))
