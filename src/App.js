//import logo from "./logo.svg";

import "./App.css";
import Header from "./component/Header";
import Cards from "./component/Cards";
import Footer from './component/Footer';
import { Alert } from 'react-bootstrap';



function App() {
  return (
    <div>
      <div className='container-main'>
        <header className='header m-3'>
          <Header/>
        </header>
        <div className='alert'>
          <Alert variant='warning'>Galerias de lugares turísticos a nivel mundial</Alert>
        </div>
        <div className="container-card">

          <Cards 
            imag='https://cdn.pixabay.com/photo/2018/08/16/08/39/hallstatt-3609863_960_720.jpg'
            title='Lago en la Montaña'
            pais='Australia'
          />

          <Cards 
            imag='https://cdn.pixabay.com/photo/2015/03/22/23/07/bora-bora-685303_960_720.jpg'
            title='Atardecer en el Oceano'
            pais='Polinesia Francesa'
          />

          <Cards
            imag='https://cdn.pixabay.com/photo/2014/08/12/00/01/santorini-416136_960_720.jpg'
            title='Ciudad de Santorini'
            pais='Grecia'
          /> 
           <Cards 
            imag='https://cdn.pixabay.com/photo/2018/08/16/08/39/hallstatt-3609863_960_720.jpg'
            title='Lago en la Montaña'
            pais='Australia'
          />

          <Cards 
            imag='https://cdn.pixabay.com/photo/2015/03/22/23/07/bora-bora-685303_960_720.jpg'
            title='Atardecer en el Oceano'
            pais='Polinesia Francesa'
          />

          <Cards
            imag='https://cdn.pixabay.com/photo/2014/08/12/00/01/santorini-416136_960_720.jpg'
            title='Ciudad de Santorini'
            pais='Grecia'
          />

          <Cards 
            imag='https://cdn.pixabay.com/photo/2018/08/16/08/39/hallstatt-3609863_960_720.jpg'
            title='Lago en la Montaña'
            pais='Australia'
          />

          <Cards 
            imag='https://cdn.pixabay.com/photo/2015/03/22/23/07/bora-bora-685303_960_720.jpg'
            title='Atardecer en el Oceano'
            pais='Polinesia Francesa'
          />

          <Cards
            imag='https://cdn.pixabay.com/photo/2014/08/12/00/01/santorini-416136_960_720.jpg'
            title='Ciudad de Santorini'
            pais='Grecia'
          /> 
           <Cards 
            imag='https://cdn.pixabay.com/photo/2018/08/16/08/39/hallstatt-3609863_960_720.jpg'
            title='Lago en la Montaña'
            pais='Australia'
          />

          <Cards 
            imag='https://cdn.pixabay.com/photo/2015/03/22/23/07/bora-bora-685303_960_720.jpg'
            title='Atardecer en el Oceano'
            pais='Polinesia Francesa'
          />

          <Cards
            imag='https://cdn.pixabay.com/photo/2014/08/12/00/01/santorini-416136_960_720.jpg'
            title='Ciudad de Santorini'
            pais='Grecia'
          />
        </div>

        <footer className='footer-main m-2'>
          <Footer/>
        </footer>

      </div>
    </div>
  );
}

export default App;
