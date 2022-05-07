import React, { useCallback, useContext, useState } from "react"

import { fetchVideos } from "../../lib/api"

const VideoContext = React.createContext({
  videos: [],
  fetchAllVideos: () => {},
})

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([])

  const fetchAllVideos = useCallback(() => {
    fetchVideos()
      .then((data) => setVideos(data))
      .catch((error) => console.log(error))
  }, [])

  const contextValue = { videos, fetchAllVideos }
  return (
    <VideoContext.Provider value={contextValue}>
      {children}
    </VideoContext.Provider>
  )
}

export const useVideos = () => useContext(VideoContext)
