import React from 'react'
import PropTypes from 'prop-types'

const InnerButton = ({ linkTo, children }) => (
  <a
    href={linkTo}
    className="inner-button"
  >
    {children}
  </a>
)

InnerButton.defaultProps = {
  linkTo: '#0'
}

InnerButton.propTypes = {
  linkTo: PropTypes.string
}

export default InnerButton