import React from 'react'
import PropTypes from 'prop-types'

const cx = {
  container: 'absolute absolute--fill bg-center contain bg-white z-1 pointer invert'
}

const QRCode = ({ className, src, onClick }) => (
  <div
    className={className}
    onClick={onClick}
    style={{ backgroundImage: `url(${src})` }}
  />
)

QRCode.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  src: PropTypes.string
}

QRCode.defaultProps = {
  className: cx.container
}

export default QRCode
