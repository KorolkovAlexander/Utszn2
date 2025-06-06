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
      


      <div className={styles.title2}>Мобильный офис филиала № 14 ГКУ ЛНР «Республиканский центр социальной защиты населения» в г. Ровеньки продолжает вести выездные приемы граждан в пгт. Пролетарском</div>
      <div className={styles.text2}>05.06.2025 состоялся выездной прием граждан представителями Филиала № 14 ГКУ ЛНР «Республиканский центр социальной защиты населения» в г. Ровеньки в отделе жизнеобеспечения 
пгт. Пролетарский Администрации городского округа муниципальное образование городской округ город Ровеньки Луганской Народной Республики.
На приёме даны разъяснения 36 жителям пгт. Пролетарский по вопросу оказания меры социальной поддержки (в денежном выражении) для приобретения твердого бытового топлива (угля).
	Обратившиеся ровенчане получили консультации по всем вопросам.

<br/>
 <br/>

<br/>


<br/>

<br/>
<br/>

        <br/>





</div>





      </main>
      <Footer className={styles.footer} />
    </div>
  )}