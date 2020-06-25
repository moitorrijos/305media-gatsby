import React from "react"
import VideoBackgroundMp4 from "../videos/305mediatv-bg-video.mp4"
import VideoBackgroundWebM from "../videos/305mediatv-bg-video.webm"

const BackgroundVideo = () => (
  <video
    autoPlay
    muted
    loop
    className="background-video"
  >
    <source src={VideoBackgroundWebM} type="video/webm" />
    <source src={VideoBackgroundMp4} type="video/mp4" />
  </video>
)

export default BackgroundVideo
