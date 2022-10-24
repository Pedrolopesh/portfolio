// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import React, { useEffect } from 'react';
import ChangeLang from "../components/ChangeLang";
import MainContent from "../components/MainContent";
import HeadPages from '../components/HeadPages'
// import Head from 'next/head'

const Home = () => {

  const setbodyBg = () => {
    const body = document.querySelector('body');
    body.classList.add('it_bg');
  }

  useEffect(() => {
    setbodyBg();
  }, [])

  return (
    <div>
      <HeadPages />
      <ChangeLang />
      <MainContent />
    </div>
  )
}


export default Home