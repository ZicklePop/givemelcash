import Layout from '../components/layout'
import Link from 'next/link'
import QRCode from '../components/qr-code'
import get from 'lodash/get'
import upperFirst from 'lodash/upperFirst'

const cx = {
  main: 'vh-75 dt w-100',
  container: 'dtc v-mid tc',
  article: 'center sans-serif',
  a: 'f5 fw4 mt4 ph3 pointer tracked no-underline br3 ba bw1 pv2 mb2 grow tc dib b--gray'
}

const QR = ({ title, description, image }) => (
  <Layout
    title={title}
    description={description}
    className={cx.main}
  >
    <div className={cx.container}>
      <article className={cx.article}>
        <QRCode src={image} />
        <Link href='/'>
          <a className={cx.a}>
            ← Back home
          </a>
        </Link>
      </article>
    </div>
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
