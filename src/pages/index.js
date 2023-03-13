import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Budget from '../containers/Budget'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
<>
    <div className={styles.main}>
      <Head>
        
      </Head>
      <h1>Muta video</h1>
      <Budget></Budget>

      <Link href='/about'>ir a about</Link>

    </div>
    </>
  )
}
