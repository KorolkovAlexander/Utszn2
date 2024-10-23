import styles from "../../page.module.css";
import Title from "../../../../Components/Title";
import Header from "../../../../Components/Header";
import Footer from "../../../../Components/Footer";
import Image from "next/image";


export default function Page() {
    return (
     
      <div className={styles.container}>
  
     
      <div className={styles.headerframe}>
        <div className={styles.flag}>
          <img src="../flag.png" />
        </div>
        <Title className={styles.title} />
        <div className={styles.logo}>
          <img src="../logo.svg" />
        </div>
      </div>
  
      <Header />
  
      <main className={styles.mainpost2}>
      


      <div className={styles.title2}>ОСТОРОЖНО МОШЕННИКИ</div>
      <div className={styles.text2}>Будьте умнее телефонных мошенников! Кладите трубку, если Вас просят сообщить код из смс. Перевести деньги на безопасный счет.  
<br/>
  






</div>





      </main>
      <Footer className={styles.footer} />
    </div>
  )}