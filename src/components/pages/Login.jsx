import {Subscribe, Header, Footer, Form} from '../organisms';
import {Head} from '../bosons';
import './login.css';

export default function Login(){
  return(
    <>
      <Head title="Login | Dogs"/>
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