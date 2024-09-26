import { useEffect, useState } from 'react';
import './carousel.css';
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

const img = [
    'https://images.homify.com/v1464986821/p/photo/image/1535150/IMG_2384.jpg',
    'https://b6d3c5t3.rocketcdn.me/wp-content/uploads/2024/03/Casa-de-luxo-a-80-m-da-praia-a-venda-Guarajuba-44-1240x720.jpg',
    'https://www.lopes.com.br/blog/wp-content/uploads/2017/12/123.jpg',
    'https://casa.abril.com.br/wp-content/uploads/2023/05/casa-campo-vista-natureza-todos-ambientes-gilda-meirelles-credito-rafael-renzo-16.jpg?crop=1&resize=1212,909',
    'https://b6d3c5t3.rocketcdn.me/wp-content/uploads/2022/09/Casa-aconchegante-e-ampla-a-100-m-da-praia-de-Guarajuba-18.jpg',
    'https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg',
    'https://projeto8.arilimacursos.com.br/wp-content/uploads/jet-form-builder/24cceab7ffc1118f5daaace13c670885/2024/01/casa-pequena-planta-baixa-0.png',
    'https://conteudos.quintoandar.com.br/wp-content/uploads/2023/11/como-comprar-uma-casa.webp'
];

export default function Carousel(){

    const [currentSlide,setCurrentSlide] = useState(0);

    const next = ()=>{
        setCurrentSlide(currentSlide == img.length-1 ? 0 : currentSlide+1);
    };
    const previous = ()=>{
        setCurrentSlide(currentSlide == 0 ? img.length-1 : currentSlide-1);
    };

    useEffect(()=>{
        const interval = setInterval(next,10000);
        return ()=>{clearInterval(interval)};
    });

    return (
        <div id="carousel">
            <span className='arrow' id="left" onClick={previous}><FaCircleChevronLeft /></span>
                {
                    img.map((src,idx)=>(
                        <img key={idx} src={src} alt='Fotos do carrossel.' className={currentSlide === idx ? 'slide':'slide slide-hidden'}/>
                    ))
                }
            <span className='arrow' id="right" onClick={next}><FaCircleChevronRight /></span>
            <section className='thumbs'>
                {
                    img.map((src,idx)=>(
                        <img src={src} key={idx} onClick={()=>{setCurrentSlide(idx)}} className={currentSlide === idx ? 'thumb':'thumb thumb-inactive'}></img>
                    ))
                }
            </section>
        </div>
    );
}