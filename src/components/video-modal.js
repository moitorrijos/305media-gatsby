import React from "react"
import CloseButton from "../icons/close-button.svg"

const VideoModal = ({ src, title, show, setShow }) => {
  return (
    <div className={ show ? "video-modal show" : "video-modal hide" }>
      <div className="inner-video">
        <button
          onClick={() => {
            setShow(!show)
          }}
          className="close-button"
        >
          <CloseButton />
        </button>
        <iframe
          src={src}
          title={title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
        />
      </div>
    </div>
  )
}

export default VideoModal
