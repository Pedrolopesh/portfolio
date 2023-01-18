// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import React, { useEffect } from 'react';
import ChangeLang from "../components/ChangeLang";
import MainContent from "../components/MainContent";
import HeadPages from '../components/HeadPages';
import HeaderOptions from '../components/HeaderOptions';
// import Head from 'next/head'
import { useRouter } from 'next/router'

const Home = () => {
  const router = useRouter()
  const setbodyBg = () => {
    const body = document.querySelector('body');
    body.classList.add('it_bg');
  }

  const handlePath = (currentPath: string) => {
    localStorage.setItem('sourceRoute', currentPath)
  }

  useEffect(() => {
    setbodyBg();
    handlePath(router.pathname);
  }, [])

  return (
    <div>
      <HeadPages />
      <HeaderOptions />
      <ChangeLang />
      <MainContent />
    </div>
  )
}


export default Home