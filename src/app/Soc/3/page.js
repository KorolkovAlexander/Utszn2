
import styles from "../../page.module.css";
import Title from "../../../../Components/Title";
import Header from "../../../../Components/Header";
import Footer from "../../../../Components/Footer";
import Post from "../../../../Components/Post";

import Link from "next/link";


export default function Page() {


 
  
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
  
      <main className={styles.socpost}>
 

<nav className={styles.socnav}>
<Link href={"/Soc"} className={styles.soclink}><div>Что такое социальный контракт</div></Link>
<Link href={"/Soc/2"} className={styles.soclink}><div>Виды социальных контрактов</div></Link>


</nav>
<div className={styles.socdesk}>

<div className={styles.about}>
  <h3>Нормативно-правовая документация</h3>
  <ul className={styles.ul}>
<li className={styles.li}>
<img src="pdf.png" className={styles.image}/><a href={`https://glava-lnr.info/`} className={styles.link}>-Сайт Главы ЛНР</a></li>
  </ul>
</div>

</div>  </main>
      <Footer className={styles.footer} />
    </div>
  )
}
  
  
  
  
  
  
  