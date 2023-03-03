import Logo from '../molecules/Logo';
import NavItem from '../atoms/NavItem';
import './nav.css';

export default function Nav(){
  return(
    <nav className="h-nav">
      <Logo color="#333333"/>
      <NavItem name="Login / Criar"/>
    </nav>
  )
}