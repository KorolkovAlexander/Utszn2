import styles from "./page.module.css";
import Head from "next/head";
import Footer from "../../Components/Footer";
import Title from "../../Components/Title";
import Link from "next/link";
import Header from "../../Components/Header"
import Postcard from "../../Components/Postcard";
import Image from 'next/image'
export const metadata = {
  title: 'Филиал №14 ГКУ ЛНР РЦСЗН в г.Ровеньки',
  description: 'Филиал №14 ГКУ ЛНР РЦСЗН в г.Ровеньки',
}


export default function Home() {
  return (
   
    <div className={styles.container}>

   
    <div className={styles.headerframe}>
      <div className={styles.flag}>
        <img src="flag.png" />
      </div>
      <Title className={styles.title} />
      <div className={styles.logo}>
        <img src="logo.svg" />
      </div>
    </div>

    <Header />

    <main className={styles.maini}>
    
  
      <div className={styles.postWrappermain}>
      <div><Image 
            src="/222.jpg"
            width={650}
            height={450}
            alt="Picture of the author"
      
      /></div>
      <div><Image 
            src="/1111.jpg"
            width={700}
            height={450}
            alt="Picture of the author"
      
      /></div>
            <div><Image 
            src="/333.jpg"
            width={650}
            height={450}
            alt="Picture of the author"
      
      /></div>
      </div>

    </main>
    <Footer className={styles.footer} />
  </div>
)}
