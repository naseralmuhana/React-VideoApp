import { Route, Routes } from "react-router-dom"
import { Home, Login } from "./containers"
import { NotProtectedRoutes, ProtectedRoutes } from "./utilities/PrivateRoutes"

const App = () => {
  return (
    <Routes>
      <Route element={<NotProtectedRoutes />}>
        <Route path="login" element={<Login />} />
      </Route>
      <Route element={<ProtectedRoutes />}>
        <Route path="/*" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
