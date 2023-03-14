import {Subscribe, Header, Footer, Form} from '../organisms';
import './login.css';

export default function Login(){
  return(
    <>
      <Header/>
        <section className="login-content">
          <div className="login-banner"></div>
          <div className="login-data">
            <Form/>
            <Subscribe/>
          </div>
        </section>
      <Footer/>
    </>
  )
}