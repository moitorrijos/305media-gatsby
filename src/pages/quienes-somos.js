import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/page-header.js"
import QuienesSomos from "../assets/quienes-somos-bg.jpg"
import Video1 from "../assets/video-1.jpg"
import Video2 from "../assets/video-2.jpg"
import Service1 from "../assets/crea-tu-canal.jpg"
import Service2 from "../assets/305-podcast.jpg"
import Service3 from "../assets/305-academy.jpg"
import Service4 from "../assets/305-online-broacast.jpg"
import InnerButton from "../components/inner-button"

const AboutPage = () => {
  return (
    <Layout>
      <SEO
        title="Quiénes Somos"
        description="Somos la Plataforma No. 1 de la Florida"
      />
      <PageHeader
        backgroundImage={QuienesSomos}
        title="Somos la Plataforma No.1 de la Florida"
      />
      <h2 className="centered page-slogan">
        Somos una plataforma digital de comunicación e interacción, generadora
        de contenido listo para llevar.
      </h2>
      <div className="main-container about-us main-grid">
        <div className="content order-1">
          <h3>GENTE QUE HABLA COMO TÚ</h3>
          <p>
            305 Media TV es un Canal de entretenimiento con programas de humor,
            farándula, noticias, deportes, y tecnología realizados en una
            Plataforma Digital de Comunicación e interacción con contenido listo
            para llevar, no es solo radio ni tv, somos gente que habla como tu.
          </p>
          <p>
            Creamos contenido de Valor realizado por talentos Hispanos desde la
            Ciudad de Miami para todo el Mundo, entretenimiento, noticias,
            humor, estilo de vida, deportes, espectáculos y más, estamos en
            todas las plataformas digitales, somos{" "}
            <em>#GenteQueHablaComoTu.</em>
          </p>
        </div>
        <div className="player order-2">
          <img
            src={Video2}
            alt="Video promocional de 305 Broadcast Media Center"
          />
        </div>
        <div className="player order-4">
          <img
            src={Video1}
            alt="Video promocional de 305 Broadcast Media Center"
          />
        </div>
        <div className="content order-3">
          <h3>305 BROADCAST MEDIA CENTER</h3>
          <p>
            Con sede principal en Miami, Florida, 305 Broadcast es un
            internacionalmente reconocido distribuidor e integrador de equipos
            de Broadcast que se ha transformado en ofrecer soluciones de
            streaming y producción local e internacional.
          </p>
          <p>
            Con más de 12 exitosos años en el mercado, nuestra ubicación
            estratégica nos permite facilitar la distribución de productos y
            servicios a cualquier cliente en cualquier lugar del mundo; estamos
            ubicados a 10 minutos del Aeropuerto Internacional de Miami y a 20
            minutos del Puerto de Miami.
          </p>
        </div>
      </div>
      <h2 className="centered">Nuestros Servicios</h2>
      <div className="main-container services secondary-grid">
        <div className="service">
          <img src={Service1} alt="Crea tu canal" />
          <h4>CREA TU CANAL</h4>
          <p>
            Alquiler de estudio profesional personalizable para transmisión de
            contenido en redes sociales y plataformas digitales.
          </p>
          <InnerButton linkTo="http://channel.305bmc.com/">
            Conoce Más
          </InnerButton>
        </div>
        <div className="service">
          <img src={Service2} alt="305 Podcast" />
          <h4>305 PODCAST</h4>
          <p>
            Alquiler de estudio profesional, acondicionado para desarrollo de
            Audio y Video Podcast.
          </p>
          <InnerButton linkTo="http://podcast.305bmc.com/">
            Conoce Más
          </InnerButton>
        </div>
        <div className="service">
          <img src={Service3} alt="305 Academy" />
          <h4>305 ACADEMY</h4>
          <p>
            Espacio educativo dirigido a emprendedores que quieran aprender a
            monetizar con su talento en redes sociales.
          </p>
          <InnerButton linkTo="http://academy.305bmc.com/">
            Conoce Más
          </InnerButton>
        </div>
        <div className="service">
          <img src={Service4} alt="Online Live Broadcast production" />
          <h4>Online Live Broadcast Production</h4>
          <p>Somos una productora ONLINE para eventos en vivo.</p>
          <InnerButton linkTo="http://streaming.305bmc.com/">
            Conoce Más
          </InnerButton>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
