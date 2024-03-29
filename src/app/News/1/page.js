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
      


      <div className={styles.title2}>О выездном приеме граждан в пгт. Новодарьевка</div>
      <div className={styles.text2}>28.03.2024 в отделе жизнеобеспечения пгт. Кленовый Администрации городского округа муниципальное образование городской округ город Ровеньки Луганской Народной Республики состоялся выездной прием граждан представителями управления труда и социальной защиты населения Администрации города Ровеньки.<br/>
      На приёме даны разъяснения жителям пгт. Новодарьевка по вопросам:<br/>
-	оказания меры социальной поддержки (в денежном выражении) для приобретения твердого бытового топлива (угля).<br/>
	Обратившиеся ровенчане получили консультации по всем вопросам.<br/>


</div>





      </main>
      <Footer className={styles.footer} />
    </div>
  )}