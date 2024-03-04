import styles from "../styles/header.module.css";
import Link from "next/link";
import {FaListUl} from "react-icons/fa";
import {RiFileListLine} from "react-icons/ri"

const HeaderNew = () => {


  return (
    <header className={styles.header}>
     
      <nav>
        <ul className={styles.ul}>
        <Link legacyBehavior href={`/`}><a className={styles.link}>
          <li className={styles.li}>Главная</li>
          </a></Link>
          <Link legacyBehavior href={`/News`}><a className={styles.link}>
          <li className={styles.li}>Новости</li>
          </a></Link>
          <Link legacyBehavior href={`/Pay`}><a className={styles.link}>
          <li className={styles.li}>Выплаты</li>
          </a></Link>
          <Link legacyBehavior href={`/Comp`}><a className={styles.link}>
          <li className={styles.li}>Компенсация</li>
          </a></Link>
          <Link legacyBehavior href={`/Help`}><a className={styles.link}>
          <li className={styles.li}>Помощь</li>
          </a></Link>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderNew;