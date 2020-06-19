import React from "react"

const PageHeader = ({ backgroundImage, title }) => (
  <div
    className="page-header"
    style={{
      backgroundImage: "url(" + backgroundImage + ")",
    }}
  >
    <h1>{title}</h1>
  </div>
)

export default PageHeader
