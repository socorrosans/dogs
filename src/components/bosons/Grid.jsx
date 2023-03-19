import styles from './Grid.module.css';

export default function Grid(props){
  return(
    <section className={styles.gridHome}>
      {props.children}
    </section>
  )
}