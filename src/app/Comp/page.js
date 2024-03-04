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
      
    <Post title={"Единовременную компенсацию за вред жизни и здоровью"}  src={"/1.jpg"} l={"/Comp/1"}/> 

       
      </main>
      <Footer className={styles.footer} />
    </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
 
  
  
  
  )}