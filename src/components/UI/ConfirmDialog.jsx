import React from "react"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"

const ConfirmDialog = (props) => {
  const {
    title = "Confirmation",
    children = "Are you sure you want to delete this Video?",
    open,
    setOpen,
    onConfirm,
  } = props
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="confirm-dialog"
    >
      <DialogTitle id="confirm-dialog">{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={() => setOpen(false)}>
          No
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            setOpen(false)
            onConfirm()
          }}
          sx={{ backgroundColor: "error.main" }}
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  )
}
export default ConfirmDialog
