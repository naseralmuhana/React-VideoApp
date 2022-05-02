import { Route, Routes } from "react-router-dom"
import { Create, Home, Login, Profile } from "./containers"
import { Layout, NotProtectedRoutes, ProtectedRoutes } from "./utilities"

const App = () => {
  return (
    <Routes>
      <Route element={<NotProtectedRoutes />}>
        <Route path="login" element={<Login />} />
      </Route>
      <Route element={<ProtectedRoutes />}>
        <Route element={<Layout />}>
          <Route path="/*" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
