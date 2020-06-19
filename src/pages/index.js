import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import MediaButton from "../components/media-button"
import InnerButton from "../components/inner-button"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Inicio"
      description="Plataforma de Video Conferencias"
    />
    <Hero />
    <div className="main-container">
      <div className="header-container">
        <div className="slogan">
          <p>Somos la Plataforma de Contenido Digital Número 1 de la Florida</p>
        </div>
        <MediaButton />
        <InnerButton linkTo="/en-vivo">Mira nuestra señal en vivo</InnerButton>
      </div>
    </div>
  </Layout>
)

export default IndexPage
