import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/page-header.js"
import QuienesSomos from "../assets/quienes-somos-bg.jpg"

const AboutPage = () => {
  return (
    <Layout>
      <SEO
        title="Quiénes Somos"
        description="Somos la Plataforma No. 1 de la Florida"
      />
      <PageHeader backgroundImage={QuienesSomos} title="Somos la Plataforma No. 1 de la Florida" />
    </Layout>
  )
}

export default AboutPage
