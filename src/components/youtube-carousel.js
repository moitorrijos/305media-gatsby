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
            id
            name
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Carousel
      images={data.allFile.edges}
      socialMediaLink="https://www.youtube.com/channel/UCcohsI2R_G0zjlbGLailRNQ"
    />
  )
}

export default YoutubeCarousel
