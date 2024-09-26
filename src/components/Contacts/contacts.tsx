import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./contacts.css";
export default function Contacts(){
    return(
        <section id="contacts">
            <h2 id="my-contacts-title">Meus Contatos:</h2>
            <div id="contacts-line">
                <span id="insta">
                    <a href="https://instagram.com" target="_blank" rel="noreferrer">
                        <FaInstagram id="insta-icon"/>
                    </a>
                </span>
                <span id="whats">
                    <a href="https://wa.link/qwawm5" target="_blank" rel="noreferrer">
                        <FaWhatsapp id="whats-icon"/>
                    </a>
                </span>
            </div>
        </section>
    );
}