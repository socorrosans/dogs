import {Logo} from '../molecules';
import {NavItem} from '../atoms';
import './nav.css';

export default function Nav(){
  return(
    <nav className="nav">
      <Logo color="#333333"/>
      <NavItem name="Login / Criar"/>
    </nav>
  )
}