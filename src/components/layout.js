/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/_reset.sass"
import '../styles/_layout.sass'

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="main-container">
        <main>{children}</main>
        <footer>
          Todos los derechos reservados © {new Date().getFullYear()}. Diseñado y
          Desarrollado por
          {` `}
          <a
            href="https://moitorrijos.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Moi Torrijos.
          </a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
