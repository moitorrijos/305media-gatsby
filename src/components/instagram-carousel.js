import React from "react"
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
      {data.allFile.edges.map((image) => (
        <div className="item insta-item">
          <Img fluid={image.node.childImageSharp.fluid} alt={image.node.name} />
        </div>
      ))}
    </div>
  )
}

export default InstagramCarousel
