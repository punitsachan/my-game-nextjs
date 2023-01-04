import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>My NextJS Game App</title>
        <meta name="description" content="Home page for pi-game and snake and ladders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>   

        <div className={styles.grid}>
          <Link
            href="/pi-game"
            className={styles.card}           
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Pi Game <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Link to the Pi Game.
            </p>
          </Link>
          <Link
            href="snake-game"
            className={styles.card}            
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Snake and Ladders <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Link to Snake and Ladders
            </p>
          </Link>
        </div>
      </main>
    </>
  )
}
