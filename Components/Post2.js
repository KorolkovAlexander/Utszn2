import Image from "next/image";
import styles from "../styles/post2.module.css";

const Post = (props) => {


    return (
     <div>
         
         
<div><Image 
            src={props.src}
            width={900}
            height={600}
            alt="Picture of the author"
      
      /></div>
      <div className={styles.title2}>{props.title}</div>
      <div className={styles.text2}>{props.text}</div>
         </div>
         
    );
  };
  export default Post