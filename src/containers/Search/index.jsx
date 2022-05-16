import styled from "@emotion/styled"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import React, { useState, useEffect } from "react"
import SearchBar from "./components/SearchBar"
import { useSearchParams } from "react-router-dom"
import useHttp from "../../hooks/use-http"
import { NotFound, Spinner } from "../../components/UI"
import { getAllVideos } from "../../lib/api"
import VideosGrid from "../../components/VideosGrid"
import { Box } from "@mui/material"

const filterData = (query, data) => {
  if (!query) {
    return data
  } else {
    return data.filter((video) =>
      video.title.toLowerCase().includes(query.trim().toLowerCase())
    )
  }
}

const Search = () => {
  const [filteredData, setFilteredData] = useState([])
  const { sendRequest, status, data } = useHttp(true)
  const searchParams = useSearchParams()[0]

  useEffect(() => {
    sendRequest(getAllVideos)
  }, [sendRequest])

  useEffect(() => {
    if (searchParams.get("q") && data) {
      const search = searchParams.get("q")
      setFilteredData(filterData(search, data))
    }
  }, [searchParams, data])

  const resultCounter = (
    <Stack sx={{ alignSelf: "flex-start" }}>
      <Box sx={{ p: { xs: "0.5rem 0.5rem  0", md: "0.5rem 0.75rem 0" } }}>
        <CustomSpan component="span">{filteredData.length} </CustomSpan>
        Results for
        <CustomSpan component="span"> `{searchParams.get("q")}`</CustomSpan>
      </Box>
    </Stack>
  )
  return (
    <Container>
      <SearchBar />
      {searchParams.has("q") && resultCounter}
      {status === "pending" && <Spinner />}
      {filteredData.length > 0 && <VideosGrid videos={filteredData} />}
      {filteredData.length === 0 &&
        !searchParams.has("q") &&
        data?.length > 0 && <VideosGrid videos={data} />}
      {filteredData.length === 0 && searchParams.has("q") && (
        <NotFound msg="No Results Found" />
      )}
    </Container>
  )
}

export default Search

const Container = styled(Stack)({
  flexDirection: "column",
  alignItems: "center",
  // justifyContent: "center",
  width: "100%",
  height: "100%",
})

const CustomSpan = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  color: theme.palette.primary.main,
}))
