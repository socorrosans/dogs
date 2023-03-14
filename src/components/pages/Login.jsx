import Subscribe from '../organisms/Subscribe';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import Form from '../organisms/Form';
import './login.css';

export default function Login(){
  return(
    <>
      <Header/>
        <section>
          <div className="login-data">
            <Form/>
            <Subscribe/>
          </div>
        </section>
      <Footer/>
    </>
  )
}