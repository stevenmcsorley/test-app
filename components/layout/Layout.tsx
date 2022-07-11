import React from 'react'
import Head from 'next/head'
import Script from 'next/script'
import Container from '@mui/material/Container'
import Header from '../header/Header'
import MainNavigation from '../main-navigation/MainNavigation'
import MainFooter from '../footer/MainFooter'

interface LayoutProps {
  children: React.ReactNode
  title: string
}

export const Layout = (props: LayoutProps) => {
  const { children, title } = props

  console.log('Layout.tsx', process.env.NEXT_PUBLIC_GTM_KEY)
  return (
    <>
      <Script strategy="lazyOnload" id="gtm">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer', '${process.env.NEXT_PUBLIC_GTM_KEY}');
          `}
      </Script>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container fixed sx={{ pb: 8 }}>
        <header>
          <Header />
          <MainNavigation />
        </header>

        {children}
      </Container>
      <Container
        maxWidth={false}
        sx={{ borderTop: '1px solid rgb(211 211 211 / 20%)' }}
      >
        <MainFooter />
      </Container>
    </>
  )
}
export default Layout
