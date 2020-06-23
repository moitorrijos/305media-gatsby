import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Carousel from "./carousel"

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
  const directory = data.allFile.edges[0].node.relativeDirectory
  return (
    <Carousel images={images} directory={directory} />
  )
}

export default InstagramCarousel
