import styled from "@emotion/styled"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { NotFound, Spinner } from "../../components/UI"
import VideosGrid from "../../components/VideosGrid"
import useHttp from "../../hooks/use-http"
import { getAllVideos } from "../../lib/api"
import SearchBar from "./components/SearchBar"
import { Helmet } from "react-helmet"

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
      {status === "pending" ? (
        <Spinner />
      ) : (
        <>
          <Helmet>
            <meta charSet="utf-8" />
            <title>
              {searchParams.has("q")
                ? `Search | ${searchParams?.get("q")}`
                : "Search"}
            </title>
            <link
              rel="canonical"
              href={`https://spiffy-bubblegum-7dabd3.netlify.app/search?q=${searchParams?.get(
                "q"
              )}`}
            />
            <meta
              name="description"
              content={`Results for ${searchParams.get("q")}`}
            />
          </Helmet>
          {data?.length === 0 && status === "completed" && <NotFound />}
          {filteredData.length === 0 &&
            !searchParams.has("q") &&
            data?.length > 0 && <VideosGrid videos={data} />}
          {searchParams.has("q") && resultCounter}
          {filteredData.length === 0 && searchParams.has("q") && (
            <NotFound msg="No Results Found" />
          )}

          {filteredData.length > 0 && <VideosGrid videos={filteredData} />}
        </>
      )}
    </Container>
  )
}

export default Search

const Container = styled(Stack)({
  flexDirection: "column",
  alignItems: "center",

  width: "100%",
  height: "100%",
  overflow: "hidden",
})

const CustomSpan = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  color: theme.palette.primary.main,
}))
