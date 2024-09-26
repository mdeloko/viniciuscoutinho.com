import Carousel from '../../components/Carousel/carousel';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar/NavBar';

import './photos.css'

export default function Photos(){

    return(
    <div className='App'>
        <NavBar/>
        <h1>Fotos:</h1>
        <Carousel/>
        <Footer/>
    </div>
    );
}