// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import ChangeLang from "../components/ChangeLang";
import MainContent from "../components/MainContent";
import MoldalOptionPage from '../components/MoldalOptionPage';
import HeadPages from '../components/HeadPages'
// import Head from 'next/head'

const Home = () => {
  return (
    <div>
      <HeadPages />

      <MoldalOptionPage />

      <ChangeLang />
      <MainContent />
    </div>
  )
}


export default Home