import React, { useContext, useEffect, useState } from "react"

import { fetchVideos } from "../../api/fetch-videos"

const VideoContext = React.createContext({ videos: [] })

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchVideos()
      .then((data) => setVideos(data))
      .catch((error) => console.log(error))
  }, [])

  const contextValue = { videos }
  return (
    <VideoContext.Provider value={contextValue}>
      {children}
    </VideoContext.Provider>
  )
}

export const useVideos = () => useContext(VideoContext)
