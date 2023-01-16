import "./CampoTexto.css"

// Componente com Arrows Function
const CampoTexto = (props) => {

	const placeholerModificada = `${props.placeholder}...`;

	// Capturando o valor do campo
	const aoDigitado = (evento) => {
		props.aoAlterado(evento.target.value);
	}

	return (
		<div className="campo-texto">
			<label>
				{props.label}
			</label>
			<input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholerModificada} />
		</div>
		)
}

export default CampoTexto