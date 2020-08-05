import React from "react"
import Carousel from "./carousel"
import { useStaticQuery, graphql } from "gatsby"

const YoutubeCarousel = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)/" }
          relativeDirectory: { eq: "youtube" }
        }
      ) {
        edges {
          node {
            relativeDirectory
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
  const images = data.allFile.edges
  return (
    <Carousel
      images={images}
      socialMediaLink="https://www.youtube.com/c/305MediaTV/videos"
    />
  )
}

export default YoutubeCarousel
