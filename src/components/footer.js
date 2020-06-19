import React from "react"
import AppStore from "../icons/appstore-button.svg"
import PlayStore from "../icons/play-store-button.svg"
import FacebookIcon from "../assets/facebook-icon.png"
import InstagramIcon from "../assets/instagram-icon.png"
import SpotifyIcon from "../assets/spotify-icon.png"
import YoutubeIcon from "../assets/youtube-icon.png"

const Footer = () => (
  <>
    <div className="apps-downloads">
      <p>
        Descarga Nuestras Aplicaciones para Disfrutar de nuestro contenido On the Go
      </p>
      <div className="app-buttons">
        <a
          href="https://itunes.apple.com/us/app/305-la-radio/id1436584582?l=es&mt=8"
          target="_blank"
          rel="noopener noreferrer"
          className="app-button"
        >
          <AppStore />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=app305.laradio"
          target="_blank"
          rel="noopener noreferrer"
          className="app-button"
        >
          <PlayStore />
        </a>
      </div>
    </div>
    <footer>
      <div className="copyright">
        <p>
          305 Broadcast Media Center © {new Date().getFullYear()}. Todos los
          Derechos Reservados. <br />
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
  </>
)

export default Footer
