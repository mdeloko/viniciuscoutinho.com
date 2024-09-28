import Contacts from "../../components/Contacts/contacts";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar/NavBar";
import "./home.css";

export default function Home() {
	return (
		<div className="App">
			<NavBar />
			<div id="foto">A</div>
			<h1 id="home-title">Home</h1>
			<div className="container">
				<p>
					Confira o trabalho de um arquiteto autônomo a mais de xx anos no ramo!
					Posso fazer projetos comerciais, residenciais e industriais!
					Fazemos elétricos, hidráulicos, prevenção de incêndios, habite-se e toda burocracia…
					Venha orçar o preço do seu sonho comigo!
				</p>
				<Contacts/>
			</div>
			<Footer />
		</div>
	);
}
