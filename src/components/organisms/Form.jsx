import {UserData} from '../molecules';
import {Button, Title} from '../atoms';
import {api} from '../../service/api';
import { useSelector } from 'react-redux';
import styles from './Form.module.css';

export default function Form(){

  const {user, password} = useSelector((state) => state.user);

  async function fetchData(){
    if(user && password){
      await fetch(`${api}/jwt-auth/v1/token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: user,
          password: password,
        })
      }).then(response => response.json())
        .then(json => localStorage.token = json.token)
    }
  }

  const submitData = (event) => {event.preventDefault(); fetchData();};
  return(
    <form className={styles.formLogin} onSubmit={submitData}>
      <Title name="Login"/>
      <UserData name="Usuário" labelFor="user" inputType="text"/>
      <UserData name="Senha" labelFor="password" inputType="password"/>
      <Button type="submit" name="Entrar"/>
    </form>
  )
}