import styles from './Subtitle.module.css';

export default function Subtitle({name}){
  return(
    <h2 className={styles.subtitle}>{name}</h2>
  )
}