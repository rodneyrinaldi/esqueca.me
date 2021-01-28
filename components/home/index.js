import Link from 'next/link'
import Image from 'next/image'

import styles from './index.module.css'

export default function Home() {
  return (
    <>
      <header>
        <div className={styles.tierHeader}>
          <Image
            src="/esqueca-me.png"
            alt="esqueça-me"
            layout="intrinsic"
            width={437}
            height={90}
          />
        </div>
      </header>

      <main className={styles.tierMain}>
        <session className={styles.tierLogo}>
          <Image
            src="/anger-face.png"
            alt="esqueça-me"
            layout="intrinsic"
            width={182}
            height={228}
          />
        </session>

        <session className={styles.tierTitle}>
          <h1>Cansado de receber spam</h1>
          <p>Recebimento de mensagens não autorizadas</p>
          <p>Quer sessar o abuso de privacidade</p>
          <Link href="#">
            <a>
              MAIS INFORMAÇÕES
            </a>
          </Link>
        </session>
      </main>
    </>
  )
}