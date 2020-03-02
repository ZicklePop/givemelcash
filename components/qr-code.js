import React from 'react'
import PropTypes from 'prop-types'

const cx = {
  container: 'v-mid tc invert',
  img: ''
}

const QRCode = ({ className, src }) => (
  <div className={cx.container}>
    <img
      src={src}
      alt='Press to scan.'
      className={cx.img}
    />
  </div>
)

QRCode.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string
}

QRCode.defaultProps = {
  className: cx.container
}

export default QRCode
