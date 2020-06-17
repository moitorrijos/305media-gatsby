import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import home from '../assets/inicio.svg'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hola, desde la página 2</h1>
    <p>Bienvenidos a la página 2</p>
    <Link to="/">Volver a inicio <img src={home} alt="Inicio"/> </Link>
  </Layout>
)

export default SecondPage
