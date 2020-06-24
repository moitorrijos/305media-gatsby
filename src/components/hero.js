import React, { useState } from "react"
import PlayButton from "../icons/play-button.svg"
import MediaButton from "./media-button"
import VideoModal from "./video-modal"
import DownArrow from "../icons/down-arrow.svg"

const Hero = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <VideoModal
        src="https://www.youtube.com/embed/sRFdqk4iDV8"
        title="Gente que Habla Como Tú"
        show={show}
        setShow={setShow}
      />
      <div className="hero">
        <h1>
          Gente que habla como <br /> <strong>tú</strong>
        </h1>
        <MediaButton />
        <button
          className="play-button"
          onClick={() => {
            setShow(!show)
          }}
        >
          <PlayButton />
        </button>
        <DownArrow className="down-arrow" />
      </div>
    </>
  )
}

export default Hero
