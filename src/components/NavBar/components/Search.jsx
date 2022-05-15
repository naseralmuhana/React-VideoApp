import styled from "@emotion/styled"
import Box from "@mui/material/Box"
import { IoSearch, IoClose } from "react-icons/io5"
import { useEffect, useRef, useState } from "react"
import { useColorMode } from "../../../store/theme/colorMode-context"

const Search = () => {
  const { mode } = useColorMode()
  const targetRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const showSearchInput = isHovered || isFocused

  const clearSearchInput = () => {
    targetRef.current.value = ""
  }
  const handleSearch = (e) => {
    e.preventDefault()
    const enteredText = targetRef.current.value
    console.log(enteredText)
  }

  useEffect(() => {
    clearSearchInput()
  }, [showSearchInput])

  return (
    <Container
      component={"form"}
      onSubmit={handleSearch}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      showSearchInput={showSearchInput}
      mode={mode}
    >
      <SearchInput
        type="text"
        placeholder="Search..."
        ref={targetRef}
        showSearchInput={showSearchInput}
      />
      {showSearchInput ? (
        <ArrowIcon onClick={clearSearchInput} mode={mode} />
      ) : (
        <SearchIcon mode={mode} />
      )}
    </Container>
  )
}

export default Search

const Container = styled(Box)((props) => ({
  position: "relative",
  width: "50px",
  height: "50px",
  borderRadius: "50px",
  padding: "2px",
  transition: "all 0.5s",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  ...(props.showSearchInput && {
    width: "100%",
    boxShadow: "1px 3px 6px 2px rgba(0, 0, 0, 0.15)",
    height: "35px",
    borderRadius: "10px",
  }),
}))

const SearchInput = styled("input")((props) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  lineHeight: "30px",
  outline: 0,
  border: 0,
  fontSize: "1rem",
  borderRadius: "10px",
  padding: "0 10px",
  margin: 0,
  appearance: "none",
  display: props.showSearchInput ? "block" : "none",
}))

const iconCommonCss = {
  zIndex: 10,
  fontSize: "1.5rem",
  "@keyframes fadeIn": {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },
}

const SearchIcon = styled(IoSearch)(({ theme, mode }) => ({
  ...iconCommonCss,
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.2rem",
  },
  fill: mode === "dark" ? "#d1d1d1" : "#121212",
  animation: `fadeIn 1s ease`,
}))

const ArrowIcon = styled(IoClose)(({ theme, mode }) => ({
  ...iconCommonCss,
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.2rem",
  },
  fill: mode === "light" ? "#d1d1d1" : "#121212",
  alignSelf: "flex-end",
  animation: `fadeIn 0.5s linear`,
  cursor: "pointer",
}))
