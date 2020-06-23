import React, { useState, useRef } from "react"
import PrevIcon from "../icons/prev-button.svg"
import NextIcon from "../icons/next-button.svg"
import Img from "gatsby-image"

const Carousel = ({ images, directory }) => {
  let [position, setPosition] = useState(0)
  let innerRef = useRef(null)
  let imageRef = useRef(null)
  const displacement = innerRef.current ? innerRef.current.offsetWidth : 0
  const imageWidth = imageRef.current ? imageRef.current.offsetWidth : 0
  const imageLength = ((imageWidth * images.length) / imageWidth)/2
  console.log(imageLength)
  const moveRight = () => {
    setPosition((position += 1))
    if (position > imageLength) {
      setPosition((position = 0))
    }
  }
  const moveLeft = () => {
    setPosition((position -= 1))
    if (position < 1) {
      setPosition((position = 0))
    }
  }

  return (
    <div className="carousel">
      <button className={(position == 0) ? 'hidden' : 'prev'}  onClick={moveLeft}>
        <PrevIcon />
      </button>
      <div className="inner-carousel" ref={innerRef}>
        {images.map((image) => (
          <div
            className={directory ? `item ${directory}` : "item"}
            key={image.node.id}
            style={{ transform: `translateX(${-displacement * position/2}px)` }}
            ref={imageRef}
          >
            <Img
              fluid={image.node.childImageSharp.fluid}
              alt={image.node.name}
            />
          </div>
        ))}
      </div>
      <button className="next" onClick={moveRight}>
        <NextIcon />
      </button>
    </div>
  )
}

export default Carousel
