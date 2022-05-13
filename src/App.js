import { Route, Routes } from "react-router-dom"
// prettier:ignore
import { Create, Home, Login, Profile, Details } from "./containers"
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
          <Route path="/category/:categoryId" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/users/:userId" element={<Profile />} />
          <Route path="/videos/:videoId" element={<Details />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
