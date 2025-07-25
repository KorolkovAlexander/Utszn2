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
      


      <div className={styles.title2}>Выплата денежной компенсации задолженности по заработной плате, образованной в учреждениях бюджетной сферы Луганской Народной Республики в период до 01.05.2015</div>
      <div className={styles.text2}> Специалисты филиала № 14 ГКУ ЛНР «Республиканский центр социальной защиты населения» в г. Ровеньки осуществили прием заявлений о выплате денежной компенсации задолженности по заработной плате, образованной в период до 1 мая 2015 года 
      в Благовском учебно-воспитательном комплексе Ровеньковского городского совета Луганской области. Согласно Порядку выплаты денежной компенсации задолженности по заработной плате, образованной в учреждениях бюджетной сферы Луганской Народной Республики в период до 01.05.2015,
      утвержденному постановлением Правительства Луганской Народной Республики от 17.12.2024 № 293/24, срок выплаты компенсации установлен до 31.12.2025.

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