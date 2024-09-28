import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./contacts.css";
export default function Contacts(){
    return(
        <section id="contacts">
            <h2 id="my-contacts-title">Meus Contatos:</h2>
            <div id="contacts-line">
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                    <span id="insta">
                        <FaInstagram id="insta-icon"/>
                    </span>
                </a>
                <a href="https://wa.link/qwawm5" target="_blank" rel="noreferrer">
                    <span id="whats">
                        <FaWhatsapp id="whats-icon"/>
                    </span>
                </a>
            </div>
        </section>
    );
}