
import styles from "../../page.module.css";
import Title from "../../../../Components/Title";
import Header from "../../../../Components/Header";
import Footer from "../../../../Components/Footer";
import Post from "../../../../Components/Post";

import Link from "next/link";


export default function Page() {


 
  
  return (

     
      <div className={styles.container}>
     
      <div className={styles.headerframe}>
        <div className={styles.flag}>
          <img src="flag.png" />
        </div>
        <Title className={styles.title} />
        <div className={styles.logo}>
          <img src="logo.svg" />
        </div>
      </div>
  
      <Header />
  
      <main className={styles.socpost}>
 

<nav className={styles.socnav}>
<Link href={"/Soc"} className={styles.soclink}><div>Что такое социальный контракт</div></Link>
<Link href={"/Soc/2"} className={styles.soclink}><div>Виды социальных контрактов</div></Link>
</nav>
<div className={styles.socdesk}>
<div>ПО ПОИСКУ РАБОТЫ<br/><br/></div>

<div>Главное условие: найти работу, пройти обучение или переобучение. Государственная программа социального контракта предусматривает выплату стипендии во время обучения, оплату стажировки у потенциального работодателя, либо оплату образовательных курсов, стоимостью до 30 тысяч рублей.<br/><br/><br/><br/></div>

<div>ОСУЩЕТСВЛЕНИЕ ПРЕДПРИНИМАТЕЛЬСКОЙ ДЕЯТЕЛЬНОСТИ<br/><br/></div>
     
<div>Единовременная денежная выплата в размере стоимости необходимых для ведения предпринимательской деятельности товаров, но не более 350 тысяч рублей, с обязательной регистрацией в налоговом органе гражданина в качестве индивидуального предпринимателя или самозанятого гражданина. Срок действия социального контракта до 12 месяцев.<br/><br/><br/><br/></div>    

<div>ВЕДЕНИЕ ЛИЧНОГО ПОДСОБНОГО ХОЗЯЙСТВА<br/><br/></div>

<div>Обязательное условие: наличие земельного участка. Единовременная денежная выплата в размере стоимости необходимых для ведения личного подсобного хозяйства, но не более 200 тысяч рублей, с обязательной регистрацией в налоговом органе гражданина в качестве самозанятого<br/><br/><br/><br/></div>
</div>  </main>
      <Footer className={styles.footer} />
    </div>
  )
}
  
  
  
  
 
  

  
  
  
  

  

  
  
  
  
 
  
  
  
  