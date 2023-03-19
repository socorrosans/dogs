import { NavLink } from 'react-router-dom';
import styles from './NavItem.module.css';

export default function NavItem({name}){
  return(
    <NavLink to="/login" className={styles.navItem}>{name}</NavLink>
  )
}