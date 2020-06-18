import React from "react"
import FacebookIcon from "../assets/facebook-icon.png"
import InstagramIcon from "../assets/instagram-icon.png"
import SpotifyIcon from "../assets/spotify-icon.png"
import YoutubeIcon from "../assets/youtube-icon.png"

const Footer = () => (
  <footer>
    <div className="copyright">
      <p>
        305 Broadcast Media Center © {new Date().getFullYear()}. Todos los
        Derechos Reservados.
      </p>
      <p>
        Diseñado y Desarrollado por
        {` `}
        <a
          href="https://moitorrijos.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Moi Torrijos.
        </a>
      </p>
    </div>
    <div className="social-media">
      <a
        href="https://www.facebook.com/305Media.tv/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <img src={FacebookIcon} alt="Facebook Icon" />
      </a>
      <a
        href="https://www.instagram.com/305media.tv/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <img src={InstagramIcon} alt="Instagram Icon" />
      </a>
      <a
        href="https://open.spotify.com/episode/1YApYXJCt2L55OgxuqfrAJ?t=0"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <img src={SpotifyIcon} alt="Spotify Icon" />
      </a>
      <a
        href="https://www.youtube.com/channel/UCcohsI2R_G0zjlbGLailRNQ"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <img src={YoutubeIcon} alt="Youtube Icon" />
      </a>
    </div>
  </footer>
)

export default Footer
