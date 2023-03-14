import {UserData} from '../molecules';
import {Button, Title} from '../atoms';
import './form.css';

export default function Form(){
  return(
    <form className="form-login">
      <Title name="Login"/>
      <UserData name="Usuário" labelFor="user" inputType="text"/>
      <UserData name="Senha" labelFor="password" inputType="password"/>
      <Button type="submit" name="Entrar"/>
    </form>
  )
}