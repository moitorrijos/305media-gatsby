import React from "react"
import PrevIcon from "../icons/prev-button.svg"
import NextIcon from "../icons/next-button.svg"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const InstagramCarousel = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)/" }
          relativeDirectory: { eq: "instagram" }
        }
      ) {
        edges {
          node {
            name
            id
            childImageSharp {
              fluid(fit: CONTAIN) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <div className="carousel">
      <button className="prev">
        <PrevIcon />
      </button>
      <div className="inner-carousel">
        {data.allFile.edges.map((image) => (
          <div className="item insta-item" key={image.node.id}>
            <Img fluid={image.node.childImageSharp.fluid} alt={image.node.name} />
          </div>
        ))}
      </div>
      <button className="next">
        <NextIcon />
      </button>
    </div>
  )
}

export default InstagramCarousel
