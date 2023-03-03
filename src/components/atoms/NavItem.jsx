import { NavLink } from 'react-router-dom';

export default function NavItem({name}){
  return(
    <NavLink to="/login" className="nav-item">{name}</NavLink>
  )
}