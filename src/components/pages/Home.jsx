import {Container, Head, Grid} from '../bosons';
import {Header, Footer} from '../organisms';
import { useState, useEffect } from 'react';
import {api} from '../../service/api';
import styles from './Home.module.css';

export default function Home(){

  const [photos, setPhotos] = useState([]);

  async function getPhotos(){
    await fetch(`${api}/api/photo`, {
      method: 'GET'
    }).then(response => response.json())
      .then(json => setPhotos(json));
  }

  useEffect(() => {
    getPhotos();
  }, []);

  return(
   <>
    <Head title="Fotos | Dogs"/>
    <Header/>
    <Container>
      <Grid>
        {
          (photos.length !== 0) ? photos.map(photo => {
            return <div key={photo.id} className={styles.imgContainer}><img src={photo.src} alt={`Foto de ${photo.title}`}/></div>
          }) : null
        }
      </Grid>
    </Container>
    <Footer/>
   </>
  )
}