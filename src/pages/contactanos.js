import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/page-header"
import BackgroundImage from "../assets/contactanos-mapa-bg.jpg"
import ContactForm from "../components/contact-form.js"

const ContactUs = () => {
  return (
    <Layout>
      <SEO
        title="Contáctanos"
        description="Con sede principal en Miami, Florida para el Mundo"
      />
      <PageHeader
        backgroundImage={BackgroundImage}
        title="Estamos Para Servirte"
      />
      <h2 className="centered page-slogan">
        Con sede principal en Miami, Florida, 305 Broadcast es un
        internacionalmente reconocido distribuidor e integrador de equipos de
        transmisión
      </h2>
      <div className="main-container contact-form-info">
        <ContactForm />
        <div className="info">
          <p>
            305 MEDIA TV
            <br />
            3553NW 79AVE. MIAMI, FL. 33122
            <br />
            Phone: <a href="tel:(305) 200-3322">(305) 200-3322</a>
          </p>
          <p>
            PROGRAMACIÓN
            <br />
            CARLOS MARQUEZ
            <br />
            cmarquez@305media.tv
            <br />
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default ContactUs
