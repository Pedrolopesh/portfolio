// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import ChangeLang from "../components/ChangeLang" 
import MainContent from "../components/MainContent" 

const Home = () => {
  return (
    <div>
      <ChangeLang />
      <MainContent />
    </div>
  )
}


export default Home