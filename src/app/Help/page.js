import styles from "../page.module.css";
import Title from "../../../Components/Title";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import Post from "../../../Components/Post"

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
  
      <main className={styles.mainpost}>
      
    <Post title={"Луганский  центр социальной реабилитации детей-инвалидов «Возрождение» приглашает"}  src={"/23.jpg"} l={"/Help/1"}/> 
    <Post title={"ДОМА-ИНТЕРНАТЫ ДЛЯ ГРАЖДАН ПРЕКЛОННОГО ВОЗРАСТА И ИНВАЛИДОВ"}  src={"/24.jpg"} l={"/Help/2"}/>
    <Post title={"Санаторно-курортное лечение в ГУ ЛНР «Республиканская здравница»"}  src={"/25.jpg"} l={"/Help/3"}/>     
    <Post title={"ЛУГАНСКИЙ ЦЕНТР КОМПЛЕКСНОЙ РЕАБИЛИТАЦИИ ИНВАЛИДОВ ПРИГЛАШАЕТ НА МЕДИКО-ФИЗИЧЕСКУЮ РЕАБИЛИТАЦИЮ»"}  src={"/28.jpg"} l={"/Help/4"}/>  
    <Post title={"Порядок предоставления материальной помощи в денежном выражении"}  src={"/31.jpg"} l={"/Help/5"}/> 
    <Post title={"Региональное обеспечение техническими и другими средствами реабилитации инвалидов"}  src={"/34.jpg"} l={"/Help/6"}/> 
    <Post title={"Порядок замены удостоверений, выданных до 01 марта 2023 года, на удостоверения ветерана Великой Отечественной войны"}  src={"/41.jpg"} l={"/Help/7"}/>
      </main>
      <Footer className={styles.footer} />
    </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
 
  
  
  
  )}