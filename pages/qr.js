import React from 'react'
import Layout from '../components/layout'
import Link from 'next/link'
import QRCode from '../components/qr-code'
import get from 'lodash/get'
import upperFirst from 'lodash/upperFirst'

const QR = ({ title, description, image }) => (
  <Layout title={title} description={description}>
    <Link href='/'>
      <a>
        <QRCode src={image} />
      </a>
    </Link>
  </Layout>
)

QR.getInitialProps = async function ({ res, query }) {
  const code = get(query, 'code')
  if (res && !code) {
    res.writeHead(301, {
      Location: '/'
    })
    res.end()
  }

  const method = upperFirst(code)
  return {
    title: `GiveMel.Cash — Scan this QR code to pay using ${method}`,
    description: `The best way to give Melanie Kat your money by QR code for ${method}`,
    image: `/static/qr/${code}.png`
  }
}

export default QR
