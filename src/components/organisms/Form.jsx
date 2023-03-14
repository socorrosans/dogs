import {UserData} from '../molecules';
import {Button, Title} from '../atoms';
import {api} from '../../service/api';
import { useState } from 'react';
import './form.css';

export default function Form(){

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  async function fetchData(){
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
      .then(json => setToken(json.token));
  }
  
  const getPassword = (event) => setPassword(event.target.value);
  const getUser = (event) => setUser(event.target.value);
  const submitData = (event) => {event.preventDefault(); fetchData()};

  return(
    <form className="form-login" onSubmit={submitData}>
      <Title name="Login"/>
      <UserData name="Usuário" labelFor="user" inputType="text" onchange={getUser}/>
      <UserData name="Senha" labelFor="password" inputType="password" onchange={getPassword}/>
      <Button type="submit" name="Entrar"/>
    </form>
  )
}