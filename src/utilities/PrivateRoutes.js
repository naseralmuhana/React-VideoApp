import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../store/auth/auth-context"

export const ProtectedRoutes = () => {
  const { token } = useAuth()
  return token ? <Outlet /> : <Navigate to="/login" replace />
}

export const NotProtectedRoutes = () => {
  const { token } = useAuth()
  return !token ? <Outlet /> : <Navigate to="/" replace />
}
