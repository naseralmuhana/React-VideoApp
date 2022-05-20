import Box from "@mui/material/Box"
import FormControl from "@mui/material/FormControl"
import InputAdornment from "@mui/material/InputAdornment"
import InputLabel from "@mui/material/InputLabel"
import OutlinedInput from "@mui/material/OutlinedInput"
import { useRef, useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { AlertMsg } from "../../../components/UI"
import useAlert from "../../../hooks/use-alert"
import { motion } from "framer-motion"
// prettier-ignore
import { ClearIconButton, CopyIconButton, PasteIconButton, SearchIconButton } from "./SearchIcons"

const SearchBar = () => {
  const [search, setSearch] = useState("")
  const setSearchParams = useSearchParams()[1]
  const { requestAlert, alert, status, msg } = useAlert()
  const searchRef = useRef()

  const searchFocus = () => searchRef.current.firstChild.focus()

  const handleChange = (event) => setSearch(event.target.value)

  const handleForm = (e) => {
    e.preventDefault()
    if (search) {
      setSearchParams({ q: search })
    } else {
      console.log("asd")
      setSearchParams({})
      requestAlert("error", `Enter any thing`, 10000)
    }
    searchFocus()
  }

  useEffect(() => {
    searchFocus()
  }, [])

  return (
    <Box
      component={motion.form}
      initial={{ y: "-30vh" }}
      animate={{ y: "0vh" }}
      exit={{ y: "-30vh" }}
      transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
      // transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
      onSubmit={handleForm}
      sx={{ width: "100%", p: { xs: "1rem 0.5rem  0", md: "1rem 0.75rem 0" } }}
    >
      {alert && (
        <AlertMsg
          alert={alert}
          status={status}
          msg={msg}
          sx={{ width: "100%" }}
        />
      )}

      <FormControl sx={{ width: "100%" }} variant="outlined">
        <InputLabel htmlFor="search">Search</InputLabel>
        <OutlinedInput
          id="search"
          type="text"
          ref={searchRef}
          value={search}
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              {search && (
                <ClearIconButton
                  setSearch={setSearch}
                  searchFocus={searchFocus}
                />
              )}
              {search && (
                <CopyIconButton
                  search={search}
                  requestAlert={requestAlert}
                  searchFocus={searchFocus}
                />
              )}
              {
                <PasteIconButton
                  setSearch={setSearch}
                  searchFocus={searchFocus}
                />
              }
              {<SearchIconButton />}
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
    </Box>
  )
}

export default SearchBar
