import Layout from '../components/layout'
import ListLink from '../components/list-link'

const cx = {
  main: 'vh-75 dt w-100',
  container: 'dtc v-mid tc',
  article: 'mw5 center sans-serif f3 fw2 ph2',
  h1: 'lh-title fw2 f2 strike',
  h1a: 'no-underline',
  ul: 'list pl0 tl',
  liLast: 'lh-title mb2 mt4',
  img: 'br-100 h4 w4 center dib ma3 o-30',
  p: 'lh-copy'
}

const Index = () => (
  <Layout className={cx.main}>
    <div className={cx.container}>
      <article className={cx.article}>
        <img
          className={cx.img}
          src='/static/uglytarantula-commission.jpg'
          title='commission by @rosygaze'
        />
        <h1 className={cx.h1}>
          <a
            className={cx.h1a}
            href='/'
          >
            Give Mel Cash
          </a>
        </h1>

        <p className={cx.p}>
          Please help those who need it most
        </p>
        <ul className={cx.ul}>
          <ListLink
            text='#transcrowdfund'
            url='https://twitter.com/search?q=%23transcrowdfund'
            hasQR={false}
          />
          <ListLink
            text='Trans Lifeline'
            url='https://www.translifeline.org'
            hasQR={false}
          />
          <ListLink
            text='Trevor Project'
            url='https://www.thetrevorproject.org'
            hasQR={false}
          />
          <ListLink
            text='Trans Law Center'
            url='https://transgenderlawcenter.org'
            hasQR={false}
          />
        </ul>

        <ul className={`${cx.ul} dn`}>
          <ListLink
            text='Ko-fi'
            rel='me'
            url='https://ko-fi.com/melkat'
          />
          <ListLink
            text='Paypal'
            rel='me'
            url='https://www.paypal.me/melaniekat'
          />
          <ListLink
            text='Venmo'
            rel='me'
            url='https://venmo.com/melkat'
          />
          <ListLink
            text='Cash'
            rel='me'
            url='https://cash.app/$melkat39'
          />
        </ul>
      </article>
    </div>
  </Layout>
)

export default Index
