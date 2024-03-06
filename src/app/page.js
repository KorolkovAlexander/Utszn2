import styles from "./page.module.css";
import Head from "next/head";
import Footer from "../../Components/Footer";
import Title from "../../Components/Title";
import Link from "next/link";
import Header from "../../Components/Header"
import Postcard from "../../Components/Postcard";
import Image from 'next/image'
export const metadata = {
  title: 'УТСЗН АГР ЛНР',
  description: 'УТСЗН АГР ЛНР',
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
    
  
      <div className={styles.postWrapper}>
      <div><Image 
            src="/1.jpg"
            width={400}
            height={300}
            alt="Picture of the author"
      
      /></div>
      <div>
      </div>
      </div>

    </main>
    <Footer className={styles.footer} />
  </div>
)}
