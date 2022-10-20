import type { NextPage } from 'next'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Error from '@/pages/error'

interface LayoutProps {
  children: React.ReactNode | any
}

const Layout: NextPage<LayoutProps> = ({ children }) => {
  if (children.type.name === 'Error') {
    return (
      <>
        <Header />
        <Error />
        <Footer />
      </>
    )
  } else {
    return (
      <>
        <Header />
        {children}
        <Footer />
      </>
    )
  }
}

export default Layout
