import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const EnVivo = () => (
  <Layout>
    <SEO
      title="Señal en Vivo"
      description="305 Media TV"
    />
    <div className="main-container live-video">
      <div className="live-video-player">
        <iframe
          allowFullScreen
          title="Señal en vivo 305Media.tv"
          className="iframe_streaming"
          frameBorder="0"
          scrolling="no"
          src="https://iframe.dacast.com/b/160248/c/541107"
          width="1160"
          height="700"
        ></iframe>
      </div>
    </div>
  </Layout>
)

export default EnVivo