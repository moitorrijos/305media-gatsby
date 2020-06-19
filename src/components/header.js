import React, { useState } from "react"
import { Link } from "gatsby"
import Logo from "../assets/logo-305media-tv.png"
import "../styles/style.sass"

const Header = () => {
  const [display, setDisplay] = useState(false)
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Logo 305 Media TV" />
        </Link>
      </div>
      <div className={`navigation ${display ? "show-nav" : "hide-nav"}`}>
        <Link to="/" activeClassName="current-page">
          Inicio
        </Link>
        <Link to="/quienes-somos" activeClassName="current-page">
          Quiénes Somos
        </Link>
        <Link to="/nuestros-talentos" activeClassName="current-page">
          Nuestros Talentos
        </Link>
        <Link to="/programacion" activeClassName="current-page">
          Programación
        </Link>
        <Link to="/contactanos" activeClassName="current-page">
          Contáctanos
        </Link>
        <Link to="/en-vivo" className="secondary-nav-button">
          Señal en Vivo
        </Link>
        <Link to="/on-demand" className="primary-nav-button">
          305 Media On Demand
        </Link>
      </div>
      <button
        onClick={() => {
          setDisplay(!display)
        }}
        className={`menu-toggle ${display ? "close" : ""}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  )
}

export default Header
