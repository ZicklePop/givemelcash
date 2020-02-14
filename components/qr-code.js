import React from 'react'
import PropTypes from 'prop-types'

const cx = {
  container: 'vh-100 w-100 dt absolute absolute--fill bg-white pointer invert',
  imgContainer: 'dtc v-mid tc',
  img: ''
}

const QRCode = ({ className, src }) => (
  <div className={className}>
    <div className={cx.imgContainer}>
      <img
        src={src}
        alt={'Press to go back.'}
        className={cx.img}
      />
    </div>
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
