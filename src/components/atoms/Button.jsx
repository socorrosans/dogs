import styles from './Button.module.css';

export default function Button({type, name, ...props}){
  return (
    <button type={type} className={styles.btn}>{name}</button>
  )
}