import {Subtitle, Text} from '../atoms';
import {Link} from 'react-router-dom';
import styles from './Subscribe.module.css';

export default function Subscribe(){
  return(
    <div className={styles.subscribeContainer}>
      <Link to="/login/perdeu" className={styles.linkPassword}>Perdeu a Senha?</Link>
      <Subtitle name="Cadastre-se"/>
      <Text content="Ainda não possui conta? Cadastre-se no site."/>
      <Link to="/login/criar" className={styles.btnSubscribe}>Cadastro</Link>
    </div>
  )
}