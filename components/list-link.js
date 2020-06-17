import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import lowerFirst from 'lodash/lowerFirst'

const cx = {
  li: 'mv2 tc ttu tracked',
  a: 'f5 fw4 pointer no-underline br3 ba bw1 pv2 mb2 grow tc dib b--green',
  text: 'ph3',
  qr: 'br--right ml1 w-20',
  hasqr: 'br--left w-75',
  noqr: 'w-100'
}

const ListLink = ({ className, text, rel, url, hasQR }) => (
  <li className={className}>
    <a
      className={`${cx.a} ${cx.text} ${hasQR ? cx.hasqr : cx.noqr}`}
      rel={rel}
      href={url}
    >
      {text}
    </a>
    {hasQR && (
      <Link href={`/qr?code=${lowerFirst(text)}`}>
        <a
          className={`${cx.a} ${cx.qr}`}
        >
          {'QR'}
        </a>
      </Link>
    )}
  </li>
)

ListLink.propTypes = {
  className: PropTypes.string,
  hasQR: PropTypes.bool,
  text: PropTypes.string,
  rel: PropTypes.string,
  url: PropTypes.string
}

ListLink.defaultProps = {
  className: cx.li,
  hasQR: true
}

export default ListLink
