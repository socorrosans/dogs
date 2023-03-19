import {Subscribe, Header, Footer, Form} from '../organisms';
import {Head} from '../bosons';
import styles from './Login.module.css';

export default function Login(){
  return(
    <>
      <Head title="Login | Dogs"/>
      <Header/>
        <section className={styles.loginContent}>
          <div className={styles.loginBanner}></div>
          <div className={styles.loginData}>
            <Form/>
            <Subscribe/>
          </div>
        </section>
      <Footer/>
    </>
  )
}