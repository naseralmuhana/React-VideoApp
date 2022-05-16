import CloseIcon from "@mui/icons-material/Close"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import ContentPasteIcon from "@mui/icons-material/ContentPaste"
import SearchIcon from "@mui/icons-material/Search"
import IconButton from "@mui/material/IconButton"

// Clear
export const ClearIconButton = ({ setSearch, searchFocus }) => {
  const handleClear = () => {
    setSearch("")
    searchFocus()
  }
  return (
    <IconButton type="button" aria-label="clear" onClick={handleClear}>
      <CloseIcon sx={{ fontSize: { xs: "1.1rem", sm: "1.5rem" } }} />
    </IconButton>
  )
}
// Copy
export const CopyIconButton = ({ search, requestAlert, searchFocus }) => {
  const handleCopy = () =>
    navigator.clipboard
      .writeText(search)
      .then((text) => {
        requestAlert(
          "success",
          `[${search}] has been Copied to clipboard`,
          3000
        )
        searchFocus()
        console.log(text)
      })
      .catch((err) => {
        console.error("Failed to read clipboard contents: ", err)
      })
  return (
    <IconButton
      type="button"
      aria-label="copy"
      onClick={handleCopy}
      sx={{ display: { xs: "none", sm: "flex" } }}
    >
      <ContentCopyIcon />
    </IconButton>
  )
}

// Paste
export const PasteIconButton = ({ setSearch, searchFocus }) => {
  const handlePaste = () =>
    navigator.clipboard
      .readText()
      .then((text) => {
        setSearch((prevState) => `${prevState}${text}`)
        searchFocus()
      })
      .catch((err) => {
        console.error("Failed to read clipboard contents: ", err)
      })

  return (
    <IconButton
      type="button"
      aria-label="paste"
      onClick={handlePaste}
      sx={{ display: { xs: "none", sm: "flex" } }}
    >
      <ContentPasteIcon />
    </IconButton>
  )
}

// SearchIcon
export const SearchIconButton = () => {
  return (
    <IconButton type="submit" aria-label="search">
      <SearchIcon sx={{ fontSize: { xs: "1.1rem", sm: "1.5rem" } }} />
    </IconButton>
  )
}
