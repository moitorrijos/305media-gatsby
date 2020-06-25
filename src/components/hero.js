import React from "react"
import MediaButton from "./media-button"
import DownArrow from "../icons/down-arrow.svg"
import BackgroundVideo from "../components/background-video"

const Hero = () => {
  return (
    <>
      <div className="hero">
        <BackgroundVideo />
        <h1>
          Somos <br />
          Gente que habla como <br />
          <strong>tú</strong>
        </h1>
        <MediaButton />
        <a
          href="#main-slogan"
          aria-label="Go Down"
          className="down-arrow"
        >
          <DownArrow />
        </a>
      </div>
    </>
  )
}

export default Hero
