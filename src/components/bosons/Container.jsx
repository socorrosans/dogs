import styles from './Container.module.css';

export default function Container(props){
  return (
    <main className={styles.containerMain}>{props.children}</main>
  )
}