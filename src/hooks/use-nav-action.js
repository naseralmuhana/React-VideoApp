import { useNavigate } from "react-router-dom"

const useNavAction = (requestedAction, requestedNavigation) => {
  const navigate = useNavigate()

  const action = async () => {
    await requestedAction()
    // navigate to [requestedNavigation] after [requestedAction] done
    navigate(requestedNavigation, { replace: true })
  }

  return { action }
}

export default useNavAction
