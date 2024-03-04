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
      

      <div className={styles.title2}>Предоставление меры социальной поддержки для приобретения бытового топлива (угля)</div>
      <div className={styles.text2}>Управлением труда и социальной защиты населения Администрации города Ровеньки Луганской Народной Республики за период с января по октябрь 2023 года проведена работа и составлено 5 794 акта с указанием наличия в жилом помещении печного отопления, а также отсутствия другого вида отопления для предоставления меры социальной поддержки (в денежном выражении) по приобретению твердого бытового топлива (угля) в соответствии с «Порядком предоставления меры социальной поддержки (в денежном выражении) для приобретения твердого бытового топлива (угля) гражданам отдельных категорий, проживающим на территории Луганской Народной Республики», утвержденным постановлением Правительства Луганской Народной Республики от 12.08.2022 № 625/22.


</div>
       
      </main>
      <Footer className={styles.footer} />
    </div>
  )}