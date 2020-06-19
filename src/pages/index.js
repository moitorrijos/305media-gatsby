import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import MediaButton from "../components/media-button"
import InnerButton from "../components/inner-button"
import InstagramCarousel from "../components/instagram-carousel"
import YoutubeCarousel from "../components/youtube-carousel"
import InstagramIcon from "../icons/instagram-sketched.svg"
import YoutubeLogo from "../icons/youtube-logo.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Inicio" description="Plataforma de Video Conferencias" />
    <Hero />
    <div className="main-container">
      <div className="header-container">
        <div className="slogan">
          <p>Somos la Plataforma de Contenido Digital Número 1 de la Florida</p>
        </div>
        <MediaButton />
        <InnerButton linkTo="/en-vivo">Mira nuestra señal en vivo</InnerButton>
      </div>
      <div className="youtube-feed">
        <h2 className="centered">
          Nuestro Canal de YouTube
          <YoutubeLogo style={{ height: "1.5rem", marginLeft: "1rem" }} />
        </h2>
        <YoutubeCarousel />
      </div>
      <div className="instagram-feed">
        <h2 className="centered">
          Síguenos en Instagram
          <InstagramIcon style={{ height: "1.5rem", marginLeft: "1rem" }} />
        </h2>
        <InstagramCarousel />
      </div>
    </div>
  </Layout>
)

export default IndexPage
