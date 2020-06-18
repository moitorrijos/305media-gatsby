import React from 'react'
import PropTypes from 'prop-types'

const InnerButton = ({ linkTo, content }) => (
  <a
    href={linkTo}
    className="inner-button"
  >
    {content}
  </a>
)

InnerButton.defaultProps = {
  linkTo: '#0'
}

InnerButton.PropTypes = {
  linkTo: PropTypes.string,
  content: PropTypes.string
}

export default InnerButton