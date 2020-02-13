import React from 'react'
import Layout from '../components/layout'
import ListLink from '../components/list-link'

const cx = {
  main: 'vh-100 dt w-100',
  container: 'dtc v-mid tc',
  article: 'mw5 center sans-serif f3 fw2 ph2',
  h1: 'lh-title fw2 f2',
  h1a: 'no-underline',
  ul: 'list pl0 tl',
  liLast: 'lh-title mb2 mt4',
  img: 'br-100 h4 w4 center dib ma3'
}

const Index = () => (
  <Layout className={cx.main}>
    <div className={cx.container}>
      <article className={cx.article}>
        <img
          className={cx.img}
          src='/static/uglytarantula-commission.jpg'
          title='commission by @uglytarantula'
        />
        <h1 className={cx.h1}>
          <a
            className={cx.h1a}
            href='/'
          >
            {'Give Mel Cash'}
          </a>
        </h1>

        <ul className={cx.ul}>
          <ListLink
            text='Ko-fi'
            rel='me'
            url='https://ko-fi.com/melkat'
            color='#29ABE0'
            qrCode='/static/qr/ko-fi.png'
          />
          <ListLink
            text='Paypal'
            rel='me'
            url='https://www.paypal.me/melaniekat'
            color='#149BDE'
            qrCode='/static/qr/paypal.png'
          />
          <ListLink
            text='Venmo'
            rel='me'
            url='https://venmo.com/ZicklePop'
            color='#3F94CF'
            qrCode='/static/qr/venmo.png'
          />
          <ListLink
            text='Cash'
            rel='me'
            url='https://cash.app/$melkat39'
            color='#17B742'
            qrCode='/static/qr/cash.png'
          />
        </ul>
      </article>
    </div>
  </Layout>
)

export default Index
