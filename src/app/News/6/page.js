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
      


      <div className={styles.title2}>Важная информация для инвалидов</div>
      <div className={styles.text2}>Для сохранения права на получение предусмотренных законодательством мер социальной поддержки лицам с инвалидностью, у которых срок действия документов, подтверждающих инвалидность, истекает (истек) в период  с 23.02.2022 по 31.12.2024 необходимо пройти переосвидетельствование МСЭ.
<br/>
По вопросу оформления документов необходимо обращаться в медицинскую организацию по месту жительства.



</div>





      </main>
      <Footer className={styles.footer} />
    </div>
  )}