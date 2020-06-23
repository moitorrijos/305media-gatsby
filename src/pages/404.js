import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import PageHeader from "../components/page-header"
import BackgroundImage from "../assets/404.jpg"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Esta página no existe" />
    <PageHeader
      backgroundImage={BackgroundImage}
      title="Estamos Para Servirte"
    />
    <div className="main-container">
      <h1>!Oh Oh!</h1>
      <p>Llegaste a una página que no existe...</p>
      <p>Puedes regresar a la página de inicio <Link to="/">aquí.</Link></p>
    </div>
  </Layout>
)

export default NotFoundPage
