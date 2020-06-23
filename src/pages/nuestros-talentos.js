import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/page-header"
import BackgroundImage from "../assets/nuestros-talentos-bg.jpg"
import PrevIcon from "../icons/prev-button.svg"
import NextIcon from "../icons/next-button.svg"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const NuestrosTalentos = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)/" }
          relativeDirectory: { eq: "talentos" }
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
    <Layout>
      <SEO
        title="Nuestros Talentos"
        description="Talentos Hispanos desde la Ciudad de Miami para el Mundo"
      />
      <PageHeader
        backgroundImage={BackgroundImage}
        title="Contenido Hispano De Valor"
      />
      <h2 className="centered page-slogan">
        Talentos Hispanos desde la Ciudad de Miami para el Mundo:
        Entretenimiento, Noticias, Humor, Estilo de Vida, Deportes, Farándula,
        Tecnología y mucho más.
      </h2>
      <div className="carousel">
        <button className="prev">
          <PrevIcon />
        </button>
        <div className="inner-carousel">
          {data.allFile.edges.map((image) => (
            <div className="item talentos-item">
              <Img
                fluid={image.node.childImageSharp.fluid}
                alt={image.node.name.replace(/-/g, " ")}
              />
            </div>
          ))}
        </div>
        <button className="next">
          <NextIcon />
        </button>
      </div>
    </Layout>
  )
}

export default NuestrosTalentos
