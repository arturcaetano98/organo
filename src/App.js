import { useState } from "react";

// Import do meu componente
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import Rodape from "./componentes/Rodape";

function App() {

  const times = [{
    nome: "Programação",
    corPrimaria: "#57C278",
    corSecundaria: "#D9F7C9"
  },
  {
    nome: "Front-End",
    corPrimaria: "#82CFFA",
    corSecundaria: "#E8F8FF"
  },
  {
    nome: "Data Science",
    corPrimaria: "#A6D157",
    corSecundaria: "#F0F8E2"
  },
  {
    nome: "Devops",
    corPrimaria: "#E06B69",
    corSecundaria: "#FDE7E8"
  },
  {
    nome: "UX e Design",
    corPrimaria: "#D86EBF",
    corSecundaria: "#FAE9F5"
  },
  {
    nome: "Mobile",
    corPrimaria: "#FEBA05",
    corSecundaria: "#FFF5D9"
  },
  {
    nome: "Inovação e Gestão",
    corPrimaria: "#FF8A29",
    corSecundaria: "#FFEEDF"
  }]

  // Lista de colaboradores
  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
    console.log(colaboradores);
  }

  return (
    <div className="App">

      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      
      {times.map(time => 
        <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria} 
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} // Pessoas do time
        />)}

        <Rodape />

    </div>
  );
}

export default App;