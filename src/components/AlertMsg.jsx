import Alert from "@mui/material/Alert"

const AlertMsg = ({ status, msg }) => {
  return (
    <Alert
      severity={`${status ? status : "info"}`}
      sx={{ marginBottom: "0.5rem", width: "100%" }}
    >
      {msg}
    </Alert>
  )
}

export default AlertMsg
