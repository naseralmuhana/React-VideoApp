import { useReducer } from "react"

const initialState = {
  alert: false,
  status: "",
  msg: "",
}

const alertReducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return {
        alert: true,
        status: action.alertData.status,
        msg: action.alertData.msg,
      }
    case "RESET":
      return initialState

    default:
      return state
  }
}

const useAlert = () => {
  const [state, dispatch] = useReducer(alertReducer, initialState)

  const requestAlert = (status, msg) => {
    dispatch({ type: "CREATE", alertData: { status, msg } })
    setTimeout(() => {
      dispatch({ type: "RESET" })
    }, 5000)
  }

  return { requestAlert, ...state }
}

export default useAlert
