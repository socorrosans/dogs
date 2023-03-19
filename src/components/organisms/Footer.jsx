import {Logo} from '../molecules';
import {Text} from '../atoms';
import styles from './Footer.module.css';

export default function Footer(){
  return(
    <footer className={styles.footer}>
      <Logo color="#764701"/>
      <Text content="Dogs. Alguns direitos reservados." classname={styles.copyright}/>
    </footer>
  )
}