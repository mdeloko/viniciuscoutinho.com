import Contacts from "../../components/Contacts/contacts";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar/NavBar";
import "./aboutme.css";

export default function AboutMe() {
	return (
		<div className="App">
			<NavBar />
			<div className="container">
				<div className="pfp"></div>
				<img
					src=""
					alt="Foto Perfil"
					className="pfp"
				/>
				<h1 id="aboutme-title">Sobre mim:</h1>
				<p>
					Olá, sou Vinicius Coutinho, tenho xx anos, já fui construtor de aeromodelos,
					dono de academia, fundador de eventos do meio fisiculturista em Londrina, e
					após formado em Arquitetura e Urbanismo pela UEL (Universidade Estadual de Londrina)
					em xxxx, exerço a profissão de forma autônoma, desde então. Já trabalhei em grandes
					reformas da cidade como em xxxx, grandes comércios como xxxx e indústrias como xxxx.
				</p>
			</div>
			<Contacts/>
			<Footer />
		</div>
	);
}
