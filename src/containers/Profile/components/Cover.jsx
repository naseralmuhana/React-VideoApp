import styled from "@emotion/styled"
import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import { motion } from "framer-motion"

const randomImage =
  "https://source.unsplash.com/1600x900/?nature,photography,technology"

const variants = {
  initial: {
    y: "-100vh",
  },
  animate: {
    y: "0vh",
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 80,
    },
  },
}

const Cover = ({ src }) => {
  return (
    <Container
      component={motion.div}
      variants={variants}
      initial="initial"
      animate="animate"
      sx={{
        p: { xs: `0 0.5rem`, md: `0 0.75rem` },
      }}
    >
      <RandomImage component="img" src={randomImage} alt="" />
      <UserAvatar src={src} />
    </Container>
  )
}

export default Cover

const Container = styled(Stack)({
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  position: "relative",
})
const RandomImage = styled(Box)({
  width: "100%",
  maxHeight: "320px",
  minHeight: "100px",
  objectFit: "cover",
  borderRadius: "10px",
  transition: "all 0.5s",
  "@media (max-height: 420px)": {
    height: "100px",
  },
})

const UserAvatar = styled(Avatar)(({ theme }) => ({
  width: "75px",
  height: "75px",
  marginTop: "-40px",
  boxShadow: theme.shadows[2],
}))
