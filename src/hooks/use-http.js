import { useCallback, useReducer } from "react"

const httpReducer = (state, action) => {
  switch (action.type) {
    case "SEND":
      return {
        status: "pending",
        data: null,
        error: null,
      }

    case "SUCCESS":
      return {
        status: "completed",
        data: action.responseData,
        error: null,
      }

    case "ERROR":
      return {
        status: "completed",
        data: null,
        error: action.errorMessage,
      }

    default:
      return state
  }
}

const useHttp = (startWithPending = false) => {
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: startWithPending ? "pending" : null,
    data: null,
    error: null,
  })

  const sendRequest = useCallback(
    async (requestFunction, requestData) => {
      if (isNaN(startWithPending)) dispatch({ type: "SEND" })
      try {
        const responseData = await requestFunction(requestData)
        dispatch({ type: "SUCCESS", responseData })
      } catch (error) {
        const errorMessage = error.message || "Something went wrong!"
        dispatch({ type: "ERROR", errorMessage })
      }
    },
    [startWithPending]
  )

  return { sendRequest, ...httpState }
}

export default useHttp
