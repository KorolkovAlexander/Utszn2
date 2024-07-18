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
      
    <Post title={"О выездном приеме граждан в пгт. Новодарьевка"}  src={"/32.jpg"} l={"/News/1"}/> 
    <Post title={"Выездной прием граждан в пгт Ясеновский"}  src={"/35.jpg"} l={"/News/2"}/>
    <Post title={"Прием граждан в пгт. Кленовый"}  src={"/36.jpg"} l={"/News/3"}/>
    <Post title={"Прием граждан в пгт Ясеновский"}  src={"/37.jpg"} l={"/News/4"}/>
      </main>
      <Footer className={styles.footer} />
    </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
 
  
  
  
  )}