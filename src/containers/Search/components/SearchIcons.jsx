import CloseIcon from "@mui/icons-material/Close"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import ContentPasteIcon from "@mui/icons-material/ContentPaste"
import SearchIcon from "@mui/icons-material/Search"
import IconButton from "@mui/material/IconButton"
import Tooltip from "@mui/material/Tooltip"

const TooltipIcon = ({ title, onClick, children }) => {
  return (
    <Tooltip title={title} placement="top">
      <IconButton
        type="button"
        aria-label={title.toLowerCase()}
        onClick={onClick}
        sx={{ display: { xs: "none", sm: "flex" } }}
      >
        {children}
      </IconButton>
    </Tooltip>
  )
}

// Clear
export const ClearIconButton = ({ setSearch, searchFocus }) => {
  const handleClear = () => {
    setSearch("")
    searchFocus()
  }
  return (
    <Tooltip title="Clear" placement="top">
      <IconButton type="button" aria-label="clear" onClick={handleClear}>
        <CloseIcon sx={{ fontSize: { xs: "1.1rem", sm: "1.5rem" } }} />
      </IconButton>
    </Tooltip>
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
    <TooltipIcon title="Copy" onClick={handleCopy}>
      <ContentCopyIcon />
    </TooltipIcon>
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
    <TooltipIcon title="Paste" onClick={handlePaste}>
      <ContentPasteIcon />
    </TooltipIcon>
  )
}

// SearchIcon
export const SearchIconButton = () => {
  return (
    <Tooltip title="Search" placement="top">
      <IconButton type="submit" aria-label="search">
        <SearchIcon sx={{ fontSize: { xs: "1.1rem", sm: "1.5rem" } }} />
      </IconButton>
    </Tooltip>
  )
}
