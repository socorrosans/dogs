import Logo from '../molecules/Logo';
import Copyright from '../atoms/Copyright';
import './footer.css';

export default function Footer(){
  return(
    <footer className="footer">
      <Logo color="#764701"/>
      <Copyright/>
    </footer>
  )
}