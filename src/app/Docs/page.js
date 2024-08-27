import styles from "../page.module.css";
import Title from "../../../Components/Title";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import Post from "../../../Components/Post"

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
  
      <main className={styles.mainpost}>
      
      <div className={styles.about}>
  <h3>Нормативно-правовая информация</h3>
  <ul className={styles.ul}>
<li className={styles.li}>
<img src="pdf.png" className={styles.image}/><a href={`https://glava-lnr.info/`} className={styles.link}>-Сайт Главы ЛНР</a></li>
<li className={styles.li}>
<img src="pdf.png" className={styles.image}/><a href={`https://mintrudlnr.su/`} className={styles.link}>-Сайт Мин. труда и соц. политики</a></li>
<li className={styles.li}>
<img src="pdf.png" className={styles.image}/><a href={`https://nslnr.su/`} className={styles.link}>-Сайт Народного Совета ЛНР</a></li>
<li className={styles.li}>
<img src="pdf.png" className={styles.image}/><a href={`https://rov-adm.su/`} className={styles.link}>-Сайт Администрации города Ровеньки</a></li>
<li className={styles.li}>
<img src="icon-lnr.png" className={styles.image}/><a href={`https://glava-lnr.info/`} className={styles.link}>-Сайт Главы ЛНР</a></li>
<li className={styles.li}>
<img src="icon-lnr.png" className={styles.image}/><a href={`https://mintrudlnr.su/`} className={styles.link}>-Сайт Мин. труда и соц. политики</a></li>
<li className={styles.li}>
<img src="icon-lnr.png" className={styles.image}/><a href={`https://nslnr.su/`} className={styles.link}>-Сайт Народного Совета ЛНР</a></li>
<li className={styles.li}>
<img src="icon-adm-rovenki.png" className={styles.image}/><a href={`https://rov-adm.su/`} className={styles.link}>-Сайт Администрации города Ровеньки</a></li>
<li className={styles.li}>
<img src="icon-lnr.png" className={styles.image}/><a href={`https://glava-lnr.info/`} className={styles.link}>-Сайт Главы ЛНР</a></li>
<li className={styles.li}>
<img src="icon-lnr.png" className={styles.image}/><a href={`https://mintrudlnr.su/`} className={styles.link}>-Сайт Мин. труда и соц. политики</a></li>
<li className={styles.li}>
<img src="icon-lnr.png" className={styles.image}/><a href={`https://nslnr.su/`} className={styles.link}>-Сайт Народного Совета ЛНР</a></li>
<li className={styles.li}>
<img src="icon-adm-rovenki.png" className={styles.image}/><a href={`https://rov-adm.su/`} className={styles.link}>-Сайт Администрации города Ровеньки</a></li>
  
  
  
  
  
  
  
  
  
  </ul>
</div>
       
      </main>
      <Footer className={styles.footer} />
    </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
 
  
  
  
  )}