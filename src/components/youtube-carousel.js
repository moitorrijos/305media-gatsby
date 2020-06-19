import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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
    <div className="youtube-carousel">
      {data.allFile.edges.map((image) => (
        <div className="youtube-item">
          <Img fluid={image.node.childImageSharp.fluid} alt={image.node.name} />
        </div>
      ))}
    </div>
  )
}

export default YoutubeCarousel
