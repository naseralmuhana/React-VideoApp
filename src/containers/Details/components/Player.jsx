import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Slider from "@mui/material/Slider"
import Stack from "@mui/material/Stack"
import styled from "@emotion/styled"
import { useRef, useState } from "react"
import { IoPause, IoPlay } from "react-icons/io5"
// prettier-ignore
import { MdForward10, MdFullscreen, MdOutlineReplay10, MdVolumeOff, MdVolumeUp } from "react-icons/md"
import ReactPlayer from "react-player"
import screenfull from "screenfull"
import { Logo } from "../../../components/UI"
import { format } from "../../../utilities"

const Player = ({ url }) => {
  const [isPlaying, setIsPlaying] = useState(false),
    [isMuted, setIsMuted] = useState(false),
    [volume, setVolume] = useState(0.1),
    [volumeInst, setVolumeInst] = useState(0.1),
    [played, setPlayed] = useState(0),
    [isSeeking, setIsSeeking] = useState(false),
    playerRef = useRef(),
    playerContainer = useRef()

  const currentTime = playerRef.current
      ? playerRef.current.getCurrentTime()
      : "00:00",
    duration = playerRef.current ? playerRef.current.getDuration() : "00:00"

  const elapsedTime = format(currentTime),
    totalDuration = format(duration)

  // onToggle (play & pause) Video
  const toggleVideoHandler = () => setIsPlaying((prevState) => !prevState)
  // onToggle (mute & unmute) audio
  const toggleAudioHandler = () => {
    if (!isMuted) {
      setVolumeInst(volume)
      setVolume(0)
    } else {
      setVolume(volumeInst)
    }
    setIsMuted((prevState) => !prevState)
  }
  // control audio using slider
  const controlAudioHandler = (e, newValue) => {
    setVolume(parseFloat(newValue / 100))
    newValue === 0 ? setIsMuted(true) : setIsMuted(false)
  }
  // onClick seek 10 second forward
  const seekForwardHandler = () =>
    playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10)

  // onClick seek 10 second forward
  const seekBackwardHandler = () =>
    playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10)

  // sync the video progress with the slider
  const progressHandler = (state) => {
    if (!isSeeking) setPlayed(parseFloat(state.played * 100))
  }
  // onClick change the slider position
  const videoChangeHandler = (e, newValue) => setPlayed(parseFloat(newValue))
  // onMouseDown pause the progress
  const seekMouseDownHandler = () => setIsSeeking(true)
  // onMouseUp resume the progress and change the time of the video
  const seekMouseUpHandler = (e, newValue) => {
    setIsSeeking(false)
    playerRef.current.seekTo(newValue / 100)
  }
  // onToggle Full Screen
  const fullScreenHandler = () => screenfull.toggle(playerContainer.current)

  return (
    //md={8}
    <Grid item xs={13} md={9.55} position="relative" ref={playerContainer}>
      {/* Video player */}
      <ReactPlayer
        ref={playerRef}
        url={url}
        height="100%"
        width="100%"
        playing={isPlaying}
        muted={isMuted}
        volume={volume}
        onProgress={progressHandler}
        loop
      />
      {/* Controls for video player */}
      <ControlsContainer>
        {/* Centered Play Icons Container */}
        <CenteredPlayContainer onClick={toggleVideoHandler}>
          {/* Centered Play Icons */}
          {!isPlaying && <CenteredPlayIcon />}
        </CenteredPlayContainer>
        {/* Bottom Progress Control */}
        <BottomControlsContainer>
          {/* Slider */}
          <VideoSlider
            value={played}
            onChange={videoChangeHandler}
            onMouseDown={seekMouseDownHandler}
            onChangeCommitted={seekMouseUpHandler}
            min={0}
            max={100}
          />
          {/* Other control */}
          <OtherControlsContainer container>
            {/* + 10 icon   */}
            <Grid item onClick={seekBackwardHandler}>
              <IconBox component={MdOutlineReplay10} />
            </Grid>
            {/* play && pause icons */}
            <Grid item onClick={toggleVideoHandler}>
              {!isPlaying ? (
                <IconBox component={IoPlay} />
              ) : (
                <IconBox component={IoPause} />
              )}
            </Grid>
            {/* - 10 icon   */}
            <Grid item onClick={seekForwardHandler}>
              <IconBox component={MdForward10} />
            </Grid>
            {/* Audio icon (toggle) */}
            <Grid item onClick={toggleAudioHandler}>
              {!isMuted ? (
                <IconBox component={MdVolumeUp} />
              ) : (
                <IconBox component={MdVolumeOff} />
              )}
            </Grid>
            {/* Slider */}
            <Grid item>
              <AudioSlider
                value={volume * 100}
                onChange={controlAudioHandler}
              />
            </Grid>
            {/* Video Duration */}
            <Grid item container sx={{ width: "auto" }}>
              <DurationTypography>{elapsedTime}</DurationTypography>
              <DurationTypography>/</DurationTypography>
              <DurationTypography>{totalDuration}</DurationTypography>
            </Grid>
            {/* Logo */}
            <LogoGrid item>
              <Logo xsw="40px" smw="70px" mdw="100px" />
            </LogoGrid>
            {/* FullScreen icon */}
            <FullScreenGrid item onClick={fullScreenHandler}>
              <IconBox component={MdFullscreen} />
            </FullScreenGrid>
          </OtherControlsContainer>
        </BottomControlsContainer>
      </ControlsContainer>
    </Grid>
  )
}

export default Player

// COMPONENTS

// Control Container
const ControlsContainer = styled(Stack)({
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  position: "absolute",
  inset: 0,
  zIndex: "1",
  cursor: "pointer",
})

// Centered Play Icon Container
const CenteredPlayContainer = styled(Stack)({
  width: "100%",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
})

// playIcon
const CenteredPlayIcon = styled(IoPlay)(({ theme }) => ({
  fontSize: "4rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.4rem",
  },
  color: "#d1d1d1",
}))

// Bottom Controls Container(slider and the other icons)
const BottomControlsContainer = styled(Stack)({
  cursor: "default",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  padding: "0 1rem",
  background:
    "linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.04))",
})

// Video Slider
const VideoSlider = styled(Slider)(({ theme }) => ({
  padding: "0.35rem 0",

  "& .MuiSlider-thumb": {
    height: 15,
    width: 15,
    "&:focus, &:hover, &.Mui-active": {
      boxShadow:
        "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
    },
  },
  "& .MuiSlider-rail": {
    opacity: 0.5,
    backgroundColor: theme.palette.grey[600],
  },
}))

// other controls container(grid)
const OtherControlsContainer = styled(Grid)(({ theme }) => ({
  alignItems: "center",
  gap: "1rem",
  [theme.breakpoints.down("sm")]: {
    gap: "0.7rem",
  },
  margin: "0.25rem 0",
}))

// IconBox(Style the other controls icons)
const IconBox = styled(Box)(({ theme }) => ({
  fontSize: "2rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.75rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
  },
  color: "#d1d1d1",
  cursor: "pointer",
}))

// Audio Slider
const AudioSlider = styled(VideoSlider)(({ theme }) => ({
  width: "4.5rem",

  height: "3px",
  "& .MuiSlider-thumb": {
    height: 12,
    width: 12,
  },
  [theme.breakpoints.down("sm")]: {
    width: "3.5rem",
    "& .MuiSlider-thumb": {
      height: 10,
      width: 10,
    },
  },
}))

// video Duration
const DurationTypography = styled(Typography)(({ theme }) => ({
  fontSize: "0.9rem",
  color: "#d1d1d1",
  [theme.breakpoints.down("sm")]: { fontSize: "0.7rem" },
}))

// logo container
const LogoGrid = styled(Grid)(({ theme }) => ({
  marginLeft: "auto",
  [theme.breakpoints.between("0", "620")]: { display: "none" },
}))

// fullScreen container
const FullScreenGrid = styled(Grid)(({ theme }) => ({
  // [theme.breakpoints.down("md")]: { marginLeft: "auto" },
  [theme.breakpoints.between("0", "620")]: {
    marginLeft: "auto",
  },
}))
