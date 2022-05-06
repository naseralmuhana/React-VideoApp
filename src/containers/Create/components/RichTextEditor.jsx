import JoditEditor from "jodit-react"
import React from "react"

const RichTextEditor = React.forwardRef((props, ref) => {
  const config = {
    readonly: false,
    width: "100%",
    height: "300px",
    placeholder: props.placeholder || "Start typings...",
  }

  return <JoditEditor ref={ref} config={config} tabIndex={1} />
})

export default RichTextEditor

/* <div dangerouslySetInnerHTML={{ __html: content }} /> */
