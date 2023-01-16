import { useState } from "react";

import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";

import "./Formulario.css";

const Formulario = (props) => {

	// Hook para alterar o estado dos componentes
	const [nome, setNome] = useState("");
	const [cargo, setCargo] = useState("");
	const [imagem, setImagem] = useState("");
	const [time, setTime] = useState("");

	const aoSalvar = (evento) => {
		evento.preventDefault();
		// console.log("Formulario foi submetido: ", nome, cargo, imagem, time);
		props.aoColaboradorCadastrado({
			nome: nome,
			cargo: cargo,
			imagem: imagem,
			time: time});

			// Limpando campos após inclusão
			setNome("");
			setCargo("");
			setImagem("");
			setTime("");

	}

	return (
		<section className="formulario">
			<form onSubmit={aoSalvar}>
				<h2>Preencha os dados criar o card do colaborador</h2>

				<CampoTexto 
				obrigatorio={true}
				label="Nome"
				placeholder="Digite seu nome"
				valor={nome}
				aoAlterado={valor => setNome(valor)}/>

				<CampoTexto
				obrigatorio={true}
				label="Cargo"
				placeholder="Digite seu cargo"
				valor={cargo}
				aoAlterado={valor => setCargo(valor)}/>

				<CampoTexto
				label="Imagem"
				placeholder="Digite o endereço da imagem"
				valor={imagem}
				aoAlterado={valor => setImagem(valor)}/>

				<ListaSuspensa
				obrigatorio={true}
				label="Time"
				itens={props.times}
				valor={time}
				aoAlterado={valor => setTime(valor)}/>

				<Botao>
					Criar Card
				</Botao>
				
			</form>
		</section>
		)
}

export default Formulario