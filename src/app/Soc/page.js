

import styles from "../page.module.css";
import Title from "../../../Components/Title";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import Post from "../../../Components/Post";

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


<div className={styles.socdesk}>Социальный контракт – это соглашение, которое заключается органами социальной защиты с малоимущими семьями, малоимущими одиноко проживающими гражданами, доход у которых ниже величины прожиточного минимума, установленного в соответствующем субъекте Российской Федерации, в соответствии с которым орган социальной защиты обязуется оказать гражданину помощь, а гражданин – мероприятия, предусмотренные программой социальной адаптации. <br/>При расчете среднедушевого дохода семьи учитываются доходы всех, кто проживает вместе с заявителем и ведет с ним совместное хозяйство. <br/></div>
     
     
      </main>
      <Footer className={styles.footer} />
    </div>
  )
}
  
  
  
  
 
  

  
  
  
  

  

  
  
  
  
 
  
  
  
  