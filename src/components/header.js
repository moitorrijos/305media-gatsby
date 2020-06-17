import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import '../styles/_header.sass'

const Header = ({ siteTitle }) => (
  <header>
    <div className="inner-container">
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <div className="logo">

      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
