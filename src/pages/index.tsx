import type { NextPage } from 'next'
import Head from 'next/head'

import { useEffect, useState } from 'react'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Content from '@/components/Content'
import Loading from '@/pages/loading'

import styles from '@/styles/pages/home.module.scss'

const Home: NextPage = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <>
      <Head>
        <title>Pokedex</title>
        <meta
          name='description'
          content='React coding challenge of Invendent'
        />
        <link rel='icon' href='@/favicon/favicon.ico' />
      </Head>

      <div className={styles.layout}>
        <Header />
        {loading ? <Loading /> : <Content />}
        <Footer />
      </div>
    </>
  )
}

export default Home
