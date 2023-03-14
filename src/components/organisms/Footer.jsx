import {Logo} from '../molecules';
import {Text} from '../atoms';
import './footer.css';

export default function Footer(){
  return(
    <footer className="footer">
      <Logo color="#764701"/>
      <Text content="Dogs. Alguns direitos reservados." classname="copyright"/>
    </footer>
  )
}