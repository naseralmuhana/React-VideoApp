import styled from "@emotion/styled"
import Stack from "@mui/material/Stack"
import { categories } from "./data"
import SideItem from "./components/SideItem"
import { IoSearchOutline } from "react-icons/io5"
import { motion } from "framer-motion"

const containerVariants = {
  initial: { opacity: 0, x: "-10vw" },
  animate: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.5, type: "spring", stiffness: 80 },
  },
}

const SideBar = () => {
  return (
    <Container
      component={motion.ul}
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <SideItem
        title="Search"
        icon={<IoSearchOutline fontSize="25px" />}
        to={`/search`}
      />
      {categories.map((category) => (
        <SideItem
          key={category.id}
          title={category.name}
          icon={category.iconSrc}
          to={`/category/${category.name}`}
        />
      ))}
    </Container>
  )
}

export default SideBar

const Container = styled(Stack)(({ theme }) => ({
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "center",
  padding: 0,
  backgroundColor: theme.palette.background.paper,
  width: "4rem",
  boxShadow: `0px 2px 4px -1px rgb(0 0 0 / 20%),
     0px 4px 5px 0px rgb(0 0 0 / 14%),
     0px 1px 10px 0px rgb(0 0 0 / 12%)`,
}))
