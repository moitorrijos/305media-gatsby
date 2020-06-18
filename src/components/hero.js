import React from "react"
import PlayButton from "../icons/play-button.svg"
import MediaButton from "./media-button"

const Hero = () => (
  <div className="hero">
    <h1>
      Gente que habla como <br /> <strong>tú</strong>
    </h1>
    <MediaButton />
    <PlayButton />
  </div>
)

export default Hero
