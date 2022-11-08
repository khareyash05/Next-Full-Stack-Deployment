import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import Featured from '../components/Featured'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza!!</title>
        <meta name="description" content="Best pizza shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
    </div>
  )
}
