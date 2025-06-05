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
      


      <div className={styles.title2}>Мобильный офис филиала № 14 ГКУ ЛНР «Республиканский центр социальной защиты населения» в г. Ровеньки продолжает вести выездные приемы граждан</div>
      <div className={styles.text2}>29.05.2025 состоялся выездной прием граждан представителями Филиала № 14 ГКУ ЛНР «Республиканский центр социальной защиты населения» в г. Ровеньки. 
На приёме даны разъяснения 57 жителям города Ровеньки по вопросу оказания меры социальной поддержки (в денежном выражении) для приобретения твердого бытового топлива (угля).
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