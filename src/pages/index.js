import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Inicio"
      description="Plataforma de Video Conferencias"
      lang="es"
    />
    <h1>Hola Todos</h1>
    <p>Bienvenidos al Starter de Moi.</p>
    <p>Vamos a construir algo increíble.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Vamos a la página 2</Link>
  </Layout>
)

export default IndexPage
