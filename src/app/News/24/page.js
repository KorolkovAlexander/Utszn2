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
      


      <div className={styles.title2}>Жительнице города Ровеньки вручено удостоверение российского образца, как члену семьи умершего участника Великой Отечественной войны</div>
      <div className={styles.text2}> В рамках реализации приказа Министерства труда и социальной политики Луганской Народной Республики от 02.08.2024 г. № 577 «Об утверждении Порядка замены удостоверений, выданных до 01 марта 2023 года, на удостоверения члена семьи погибшего (умершего) инвалида войны, участника Великой Отечественной войны и ветерана боевых действий», филиал № 14 Государственного казенного учреждения Луганской Народной Республики «Республиканский центр социальной защиты населения» г. Ровеньки осуществляет замену удостоверений. 
Согласно данного Порядка, Проценко Марии Васильевне вручено удостоверение российского образца, как члену семьи умершего участника Великой Отечественной войны.
Удостоверение является бессрочным и действует на всей территории Российской Федерации.<br/>
За более подробной информацией обращаться в Филиал № 14 ГКУ ЛНР «РЦСЗН» в г. Ровеньки по адресу: г. Ровеньки, ул. Кооперативная, 1.<br/>
•	Режим работы филиала № 14 ГКУ ЛНР «РЦСЗН» в г. Ровеньки: <br/>
понедельник-пятница – с 9.00 до 18.00, перерыв с 13.00 до 14.00<br/>
•	 тел. 5-19-61<br/>
<br/>

<br/>
<br/>

        <br/>





</div>





      </main>
      <Footer className={styles.footer} />
    </div>
  )}