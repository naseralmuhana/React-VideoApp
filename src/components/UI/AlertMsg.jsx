import styled from "@emotion/styled"
import Alert from "@mui/material/Alert"

const AlertMsg = ({ status, msg, sx }) => {
  return (
    <CustomAlert severity={`${status ? status : "info"}`} css={sx}>
      {msg}
    </CustomAlert>
  )
}

export default AlertMsg

const CustomAlert = styled(Alert)((props) => ({
  "@keyframes slideIn": {
    from: {
      transform: "translateY(-100%)",
    },

    to: {
      transform: "translateY(0)",
    },
  },
  marginBottom: "0.5rem",
  width: "100%",
  // transition: "all 0.5s ease-in-out",
  animation: `slideIn 1s ease`,
  ...props.css,
}))
