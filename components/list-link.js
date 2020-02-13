import React, { useState } from 'react'
import PropTypes from 'prop-types'
import QRCode from './qr-code'

const cx = {
  li: 'mv2 tc ttu tracked',
  a: 'f5 fw4 pointer no-underline br3 br--left ba bw1 ph3 pv2 mb2 grow tc dib w-75',
  qr: 'f5 fw4 pointer no-underline br3 br--right ba bw1 pv2 ml1 mb2 grow tc dib w-20'
}

const ListLink = ({ className, text, rel, url, urlClassName, qrCode }) => {
  const [show, setShow] = useState(false)

  return (
    <li className={className}>
      <a
        className={urlClassName}
        rel={rel}
        href={url}
      >
        {text}
      </a>
      <a
        className={cx.qr}
        onClick={() => { setShow(true) }}
      >
        QR
      </a>
      {show && <QRCode src={qrCode} onClick={() => { setShow(false) }} />}
    </li>
  )
}

ListLink.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  rel: PropTypes.string,
  url: PropTypes.string,
  urlClassName: PropTypes.string,
  qrCode: PropTypes.string
}

ListLink.defaultProps = {
  className: cx.li,
  urlClassName: cx.a
}

export default ListLink
