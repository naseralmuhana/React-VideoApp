import styled from "@emotion/styled"
import Box from "@mui/material/Box"
import LinearProgress from "@mui/material/LinearProgress"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { useEffect } from "react"
import { Circles } from "react-loader-spinner"

const SpinnerStack = styled(Stack)({
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "100%",
  padding: "0 3rem",
  gap: "1rem",
})

const Spinner = ({ msg, progress }) => {
  useEffect(() => {}, [progress])
  return (
    <>
      <SpinnerStack>
        <Circles color="#00BFFF" height={80} width={80} />
        <Typography fontSize={20} textAlign="center">
          {msg}
        </Typography>
        {progress && (
          <Box width="100%">
            <LinearProgress
              variant="determinate"
              value={Number.parseInt(progress)}
            />
          </Box>
        )}
      </SpinnerStack>
    </>
  )
}

export default Spinner
