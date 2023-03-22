import styles from './Input.module.css';
import { useDispatch } from 'react-redux';
import { getInputUser, getInputPassword, getInputValue } from '../../store/reducers/userInput';
import { useState } from 'react';

export default function Input({type, id}){

  const dispatch = useDispatch();
  const [emptyError, setEmptyError] = useState();

  function handleChange({target}){
    if(target.id === 'user'){
      dispatch(getInputUser(target.value));
    } else if(target.id === 'password') {
      dispatch(getInputPassword(target.value));
    } else {
      dispatch(getInputValue(target.value))
    }
    setEmptyError("");
  }

  function handleBlur({target}){
    if(target.value.length === 0){setEmptyError("Preencha um valor.")};
  }

  return (
    <>
      <input type={type} className={styles.formInput} id={id} onChange={handleChange} onBlur={handleBlur}/>
      {emptyError && <span>{emptyError}</span>}
    </>
  )
}