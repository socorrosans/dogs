import {Nav} from '../molecules';
import styles from './Header.module.css';

export default function Header(){
  return(
    <header className={styles.header}>
      <Nav/>
    </header>
  )
}