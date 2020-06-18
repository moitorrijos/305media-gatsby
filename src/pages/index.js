import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import MediaButton from "../components/media-button"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Inicio"
      description="Plataforma de Video Conferencias"
      lang="es"
    />
    <Hero />
    <div className="main-container">
      <div className="inner-container">
        <h2>Somos la Plataforma de Contenido Digital Número 1 de la Florida</h2>
        <MediaButton />
      </div>

    </div>
  </Layout>
)

export default IndexPage
