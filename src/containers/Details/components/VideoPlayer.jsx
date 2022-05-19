import styled from "@emotion/styled"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import BigPlayButton from "video-react/lib/components/BigPlayButton"
import ControlBar from "video-react/lib/components/control-bar/ControlBar"
import ForwardControl from "video-react/lib/components/control-bar/ForwardControl"
import PlaybackRateMenuButton from "video-react/lib/components/control-bar/PlaybackRateMenuButton"
import ReplayControl from "video-react/lib/components/control-bar/ReplayControl"
import VolumeMenuButton from "video-react/lib/components/control-bar/VolumeMenuButton"
import ProgressControl from "video-react/lib/components/control-bar/ProgressControl"
import PlayToggle from "video-react/lib/components/control-bar/PlayToggle"
import Player from "video-react/lib/components/Player"
import CurrentTimeDisplay from "video-react/lib/components/time-controls/CurrentTimeDisplay"
import TimeDivider from "video-react/lib/components/time-controls/TimeDivider"
import DurationDisplay from "video-react/lib/components/time-controls/DurationDisplay"
import RemainingTimeDisplay from "video-react/lib/components/time-controls/RemainingTimeDisplay"
import FullscreenToggle from "video-react/lib/components/control-bar/FullscreenToggle"

const VideoPlayer = ({ src }) => {
  return (
    <Grid item xs={12} md={9} position="relative">
      <Player
        fluid
        playsInline
        // aspectRatio="16:9"
        src={src}
      >
        <BigPlayButton position="center" />
        <ControlBar disableDefaultControls>
          {/* PlayToggle */}
          <PlayToggle order={1} />
          {/* Replay 10 seconds */}
          <ControlIconHideXs
            component={ReplayControl}
            seconds={10}
            order={1.1}
          />
          {/* Forward 10 seconds */}
          <ControlIconHideXs
            component={ForwardControl}
            seconds={10}
            order={1.2}
          />
          {/* Volume Menu Button */}
          <VolumeMenuButton vertical order={4} />

          {/* CurrentTime */}
          <ControlIconHideXs component={CurrentTimeDisplay} order={4.1} />
          {/* Divider `/` */}
          <ControlIconHideXs component={TimeDivider} order={4.2} />
          {/* Total Duration */}
          <ControlIconHideXs component={DurationDisplay} order={4.3} />
          {/* Remaining Time */}
          <ControlIconShowXs component={RemainingTimeDisplay} order={4.3} />
          {/* ProgressBar */}
          <ProgressControl order={5} />
          {/* Speed */}
          <ControlIconHideXs
            component={PlaybackRateMenuButton}
            rates={[2, 1.5, 1, 0.5, 0.25]}
            order={7.1}
          />
          {/* FullScreen */}
          <FullscreenToggle order={7.2} />
        </ControlBar>
      </Player>
    </Grid>
  )
}
// { xs: "none !important", sm: "flex !important" }
const ControlIconHideXs = styled(Box)(({ theme }) => ({
  display: "flex !important",
  [theme.breakpoints.down("sm")]: {
    display: "none !important",
  },
}))
const ControlIconShowXs = styled(Box)(({ theme }) => ({
  display: "none !important",
  [theme.breakpoints.down("sm")]: {
    display: "flex !important",
  },
}))

export default VideoPlayer
