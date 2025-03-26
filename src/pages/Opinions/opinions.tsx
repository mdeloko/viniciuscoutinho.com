import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer";
import Contacts from "../../components/Contacts/contacts";
export default function Opinions() {
	return (
		<div className="App">
			<NavBar />
			<div className="container">
				<h1>Depoimentos de clientes!</h1>
			</div>
			<Contacts/>
			<Footer />
		</div>
	);
}
