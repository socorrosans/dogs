import {Subtitle, Text} from '../atoms';
import {Link} from 'react-router-dom';
import './subscribe.css';

export default function Subscribe(){
  return(
    <div className="subscribe-container">
      <Link to="/login/perdeu" className="link-password">Perdeu a Senha?</Link>
      <Subtitle name="Cadastre-se"/>
      <Text content="Ainda não possui conta? Cadastre-se no site."/>
      <Link to="/login/criar" className="btn-subscribe">Cadastro</Link>
    </div>
  )
}