import { Navigate, Route, Routes, useLocation } from "react-router-dom"
// prettier:ignore
// import { Create, Home, Login, Profile, Details, Search } from "./containers"
import { Layout, NotProtectedRoutes, ProtectedRoutes } from "./utilities"
import "video-react/dist/video-react.css" // import css for video Player
import { AnimatePresence } from "framer-motion"
import React, { Suspense } from "react"
import { Spinner } from "./components/UI"
import { Box } from "@mui/material"

const Create = React.lazy(() => import("./containers/Create"))
const Login = React.lazy(() => import("./containers/Login"))
const Home = React.lazy(() => import("./containers/Home"))
const Profile = React.lazy(() => import("./containers/Profile"))
const Search = React.lazy(() => import("./containers/Search"))
const Details = React.lazy(() => import("./containers/Details"))

const App = () => {
  const location = useLocation()
  return (
    <AnimatePresence>
      <Suspense
        fallback={
          <Box height="100vh" width="100vw">
            <Spinner />
          </Box>
        }
      >
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
      </Suspense>
    </AnimatePresence>
  )
}

export default App
