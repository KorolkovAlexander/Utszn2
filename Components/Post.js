import Image from "next/image";
import styles from "../styles/post.module.css";
import Link from "next/link";

const Post = (props) => {

    return (
      
      <Link href={props.l}><div>
         <div className={styles.title}>{props.title}</div>
         
<div><Image 
            src={props.src}
            width={400}
            height={300}
            alt="Picture of the author"
      
      /></div>
         </div>
         </Link>
    );
  };
  export default Post