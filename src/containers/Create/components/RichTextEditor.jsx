import JoditEditor from "jodit-react"
import React from "react"

const RichTextEditor = React.forwardRef((props, ref) => {
  const config = {
    readonly: false,
    width: "100%",
    spellcheck: true,
    height: "auto",
    minHeight: 300,
    minWidth: "auto",
    placeholder: props.placeholder || "Start typings...",
    buttonsXS: [
      "bold",
      "italic",
      "|",
      "brush",
      "paragraph",
      "|",
      "link",
      "image",
      "|",
      "undo",
      "redo",
      "|",
      "dots",
    ],
  }

  return <JoditEditor ref={ref} config={config} tabIndex={1} />
})

export default RichTextEditor
