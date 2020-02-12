import React from 'react'
import PropTypes from 'prop-types'

const cx = {
  li: 'mv2 tc',
  a: 'f5 fw4 pointer no-underline br3 br--left ba bw1 ph3 pv2 mb2 grow tc dib w-75 white b--white',
  qr: 'f5 fw4 pointer no-underline br3 br--right ba bw1 pv2 ml1 mb2 grow tc dib w-20 white b--white'
}

const ListLink = ({ className, color, text, rel, prefix, postfix, url, urlClassName }) => (
  <li className={className}>
    {prefix}
    <a
      style={{ backgroundColor: color }}
      className={urlClassName}
      rel={rel}
      href={url}
    >
      {text}
    </a>
    <a className={cx.qr}>
      QR
    </a>
  </li>
)

ListLink.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
  rel: PropTypes.string,
  prefix: PropTypes.string,
  postfix: PropTypes.string,
  url: PropTypes.string,
  urlClassName: PropTypes.string
}

ListLink.defaultProps = {
  className: cx.li,
  urlClassName: cx.a,
  color: '',
  text: '',
  prefix: '',
  postfix: ''
}

export default ListLink
