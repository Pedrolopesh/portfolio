// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import ChangeLang from "../components/ChangeLang" 
import MainContent from "../components/MainContent" 
import Head from 'next/head'

const Home = () => {
  return (
    <div>
      <Head>
        <title> Pedro Lopes </title>
      </Head>
      <ChangeLang />
      <MainContent />
    </div>
  )
}


export default Home