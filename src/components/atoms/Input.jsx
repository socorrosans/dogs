import styles from './Input.module.css';

export default function Input({type, id, onchange}){
  return (
  <input type={type} className={styles.formInput} id={id} onChange={onchange}/>
  )
}