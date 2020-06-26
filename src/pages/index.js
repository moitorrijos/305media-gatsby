import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import MediaButton from "../components/media-button"
import InnerButton from "../components/inner-button"
import InstagramCarousel from "../components/instagram-carousel"
import YoutubeCarousel from "../components/youtube-carousel"
import InstagramIcon from "../icons/instagram-sketched.svg"
import SpotifyIcon from "../icons/spotify-logo.svg"
import YoutubeLogo from "../icons/youtube-logo.svg"
import SpotifyTuner from "../components/spotify-tuner"

const IndexPage = () => (
  <Layout>
    <SEO title="305MediaTV" description="Somos Gente que Habla Como Tú" />
    <Hero />
    <div className="header-container">
      <div id="main-slogan" className="slogan">
        <p>Somos la Plataforma de Contenido Digital Número 1 de la Florida</p>
      </div>
      <MediaButton />
      <InnerButton linkTo="/en-vivo">Mira nuestra señal en vivo</InnerButton>
    </div>
    <div className="youtube-feed">
      <h2 className="centered">
        <a
          href="https://www.youtube.com/channel/UCcohsI2R_G0zjlbGLailRNQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nuestro Canal de YouTube
          <YoutubeLogo style={{ height: "1.5rem" }} />
        </a>
      </h2>
    </div>
    <YoutubeCarousel />
    <div className="instagram-feed">
      <h2 className="centered">
        <a
          href="https://www.instagram.com/305media.tv/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Síguenos en Instagram
          <InstagramIcon style={{ height: "1.5rem" }} />
        </a>
      </h2>
    </div>
    <InstagramCarousel />
    <div className="spotify-tuner">
      <a
        href="https://open.spotify.com/episode/1YApYXJCt2L55OgxuqfrAJ?t=0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className="centered">
          Escucha Nuestro Podcast en
          <SpotifyIcon style={{ height: "1.5rem" }} />
        </h2>
      </a>
      <SpotifyTuner />
    </div>
  </Layout>
)

export default IndexPage
