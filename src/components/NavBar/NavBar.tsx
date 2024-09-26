import React from "react";
import './NavBar.css';
import { Link } from "react-router-dom";
import { MdGite, MdOutlineCancel } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
export default function NavBar(){
    const linksRef = React.useRef<HTMLDivElement>(null);
    
    function alternateMenu():void{
        // @ts-ignore: Object is possibly 'null'.
        linksRef.current.classList.toggle("hidden");     
    };
    return (
        <nav>
            <div id="logo">
                <MdGite id="house"/>
                <h3 id="title">Vinicius<br/>Coutinho</h3>
            </div>
            <button type="button" id="menu-btn" onClick={alternateMenu}>
                <RxHamburgerMenu/>
            </button>
            <div ref={linksRef} id="links-mobile" className="links-mobile hidden" >
                <button id="close-btn"type="button" onClick={alternateMenu}><MdOutlineCancel/></button>
                <Link to="/">Home</Link>
                <Link to="/sobremim">Sobre Mim</Link>
                <Link to="/depoimentos">Depoimentos</Link>
                <Link to="/fotos">Fotos</Link>
            </div>
            <div id="links" className="links-desktop hidden" >
                <Link to="/">Home</Link>
                <Link to="/sobremim">Sobre Mim</Link>
                <Link to="/depoimentos">Depoimentos</Link>
                <Link to="/fotos">Fotos</Link>
            </div>
        </nav>
);
}