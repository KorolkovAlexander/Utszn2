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
    <Post title={"Выездной прием граждан в пгт Михайловка"}  src={"/38.jpg"} l={"/News/5"}/>
    <Post title={"Важная информация для инвалидов"}  src={"/39.jpg"} l={"/News/6"}/>
    <Post title={"Получение гражданства РФ"}  src={"/40.jpg"} l={"/News/7"}/>
    <Post title={"Порядок замены удостоверений, выданных до 01 марта 2023 года, на удостоверения ветерана Великой Отечественной войны"}  src={"/41.jpg"} l={"/News/8"}/>
    <Post title={"Выездной прием граждан в пгт Нагольно-Тарасовка"}  src={"/42.jpg"} l={"/News/9"}/>
    <Post title={"Порядок замены удостоверений, выданных до 01 марта 2023 года, на удостоверения о праве на меры социальной поддержки, установленные для бывших несовершеннолетних узников концлагерей, гетто и других мест принудительного содержания"}  src={"/43.jpg"} l={"/News/10"}/>
    <Post title={"Порядок замены удостоверений, выданных до 01 марта 2023 года, на удостоверения  члена семьи погибшего (умершего) инвалида войны, участника Великой Отечественной войны и ветерана боевых действий"}  src={"/44.jpg"} l={"/News/11"}/>  
      </main>
      <Footer className={styles.footer} />
    </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
 
  
  
  
  )}