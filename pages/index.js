import Head from 'next/head'
import HomeComp from '../components/home'

export default function Index() {
  return (
    <>
      <Head>
        <title>Esqueça-me Page</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100&display=swap" rel="stylesheet" />
      </Head>
      <HomeComp />
    </>
  )
}
