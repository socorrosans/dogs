import {Logo} from '../molecules';
import {NavItem} from '../atoms';
import styles from './Nav.module.css';

export default function Nav(){
  return(
    <nav className={styles.nav}>
      <Logo color="#333333"/>
      <NavItem name="Login / Criar"/>
    </nav>
  )
}