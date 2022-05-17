import Stack from "@mui/material/Stack"

const Backdrop = ({ children }) => {
  return (
    <Stack
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.4)",
      }}
    >
      {children}
    </Stack>
  )
}

export default Backdrop
