import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/page-header"
import BackgroundImage from "../assets/nuestros-talentos-bg.jpg"
import { useStaticQuery, graphql } from "gatsby"
import Carousel from "../components/carousel"

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
            relativeDirectory
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
  const directory = data.allFile.edges[0].node.relativeDirectory
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
      <Carousel images={data.allFile.edges} directory={directory} />
    </Layout>
  )
}

export default NuestrosTalentos
