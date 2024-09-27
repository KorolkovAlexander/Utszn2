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
      


      <div className={styles.title2}>Прием граждан в пгт Ясеновский</div>
      <div className={styles.text2}> 	27.09.2024 в отделе жизнеобеспечения пгт Ясеновский Администрации городского округа муниципальное образование городской округ город Ровеньки Луганской Народной Республики состоялся выездной прием граждан представителями Филиала             № 14 ГКУ ЛНР «Республиканский центр социальной защиты населения» в          г. Ровеньки.
На приёме даны разъяснения  жителю пгт Ясеновский по вопросу оказания меры социальной поддержки (в денежном выражении) для приобретения твердого бытового топлива (угля).
	Обратившийся ровенчанин получил консультации по всем вопросам.





</div>





      </main>
      <Footer className={styles.footer} />
    </div>
  )}