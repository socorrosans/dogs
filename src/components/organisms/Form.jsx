import {UserData} from '../molecules';
import {Button, Title} from '../atoms';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TOKEN_POST, USER_GET } from '../../service/api';
import { useEffect } from 'react';
import styles from './Form.module.css';

export default function Form(){

  const {user, password} = useSelector((state) => state.user);
  const navigate = useNavigate();

  async function fetchData(){
    if(user && password){
      const {url, options} = TOKEN_POST({username: user, password: password});
      const response = await fetch(url, options);
      const json = await response.json();

      if(json.token) localStorage.setItem('token', json.token);
      if(localStorage.token) navigate('/conta');
      getUser(json.token);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token) getUser(token);
  }, []);

  async function getUser(token){
    const {url, options} = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
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