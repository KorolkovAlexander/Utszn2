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
      
    <Post title={"О предоставлении государственной социальной помощи на основании социального контракта"}  src={"/16.jpg"} l={"Pay/1"}/> 
    <Post title={"Порядок предоставления компенсационных выплат на оплату жилищно-коммунальных услуг"}  src={"/17.jpg"} l={"Pay/2"}/> 
    <Post title={"Кто имеет право на компенсационную выплату (субсидию)"}  src={"/18.jpg"} l={"Pay/3"}/> 
    <Post title={"Порядок предоставления ежемесячной денежной выплаты лицам, которым присвоено звание Героя Луганской Народной Республики"}  src={"/19.jpg"} l={"Pay/4"}/>
    <Post title={"Порядок предоставления ежемесячной денежной компенсации на приобретение продуктов питания лицам, которые пострадали вследствие Чернобыльской катастрофы"}  src={"/20.jpg"} l={"Pay/5"}/>
    <Post title={"Порядок оказания единовременной денежной помощи в связи с утратой имущества первой необходимости"}  src={"/21.jpg"} l={"Pay/6"}/>
    <Post title={"Порядок осуществления ежегодной денежной выплаты лицам, награжденным нагрудным знаком «Почетный донор Луганской Народной Республики»"}  src={"/22.jpg"} l={"Pay/7"}/>
    <Post title={"Порядок оплаты дополнительного оплачиваемого отпуска лицам, которые пострадали вследствие Чернобыльской катастрофы"}  src={"/20.jpg"} l={"Pay/8"}/>
     
      </main>
      <Footer className={styles.footer} />
    </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
 
  
  
  
  )}