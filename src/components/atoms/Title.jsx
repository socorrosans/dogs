import styles from './Title.module.css';

export default function Title({name}){
  return (
    <h1 className={styles.title}>{name}</h1>
  )
}