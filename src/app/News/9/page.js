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
      


      <div className={styles.title2}>Выездной прием граждан в пгт Нагольно-Тарасовка</div>
      <div className={styles.text2}>


04.09.2024 в отделе жизнеобеспечения пгт Нагольно-Тарасовка Администрации городского округа муниципальное образование городской округ город Ровеньки Луганской Народной Республики состоялся выездной прием с семьями погибших участников СВО руководителем Филиала № 14       ГКУ ЛНР «Республиканский центр социальной защиты населения»             в г. Ровеньки.<br/>
На приёме даны разъяснения жителям пгт Нагольно-Тарасовка по вопросам, входящим в компетенцию Центра.<br/>
	Обратившиеся ровенчане получили консультации по всем вопросам.






</div>





      </main>
      <Footer className={styles.footer} />
    </div>
  )}