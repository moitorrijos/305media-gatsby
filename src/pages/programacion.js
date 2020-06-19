import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/page-header"
import BackgroundImage from "../assets/programacion-bg.jpg"
import ProgramTable from "../components/program-table"

const Programacion = () => {
  return (
    <Layout>
      <SEO
        title="Nuestra Programación"
        description="Entretenimiento, Noticias, Humor, Estilo de Vida, Deportes, Farándula, Tecnología y mucho más"
      />
      <PageHeader
        backgroundImage={BackgroundImage}
        title="Nuestra Programación"
      />
      <ProgramTable />
    </Layout>
  )
}

export default Programacion
