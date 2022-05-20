import { Navigate, Route, Routes, useLocation } from "react-router-dom"
// prettier:ignore
import { Create, Home, Login, Profile, Details, Search } from "./containers"
import { Layout, NotProtectedRoutes, ProtectedRoutes } from "./utilities"
import "video-react/dist/video-react.css" // import css for video Player
import { AnimatePresence } from "framer-motion"

const App = () => {
  const location = useLocation()
  return (
    <AnimatePresence>
      <Routes location={location} key={location.key}>
        <Route element={<NotProtectedRoutes />}>
          <Route path="login" element={<Login />} />
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/category/:categoryId" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/create" element={<Create />} />
            <Route path="/users/:userId" element={<Profile />} />
            <Route path="/videos/:videoId" element={<Details />} />
          </Route>
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default App
