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
      


      <div className={styles.title2}>Встреча с семьями погибших участников СВО</div>
      <div className={styles.text2}> 	 	25.0117.10.2024 в отделе жизнеобеспечения с. Благовка Администрации городского округа муниципальное образование городской округ город Ровеньки Луганской Народной Республики <br/>
      состоялся выездной прием с семьями погибших участников СВО руководителем Филиала № 14 ГКУ ЛНР «Республиканский центр социальной защиты населения» в г. Ровеньки.<br/>
На приёме даны разъяснения жителям села Благовка по вопросам, входящим в компетенцию Центра.<br/>
	Обратившиеся граждане получили консультации по всем вопросам.<br/>
  






</div>





      </main>
      <Footer className={styles.footer} />
    </div>
  )}