import TabelaIMC from "./components/TabelaIMC";
import Peso from "./components/Peso";
import Altura from "./components/Altura";
import CalcularIMC from "./components/CalcularIMC";
import ResultadoIMC from "./components/ResultadoIMC";
import { useState } from "react";

import styles from './components/Styles/Styles.module.css'


function App() {
  const [peso,setPeso] = useState();
  const [altura,setAltura] = useState();
  const [resultado,setResultado] = useState(0)

  return (
    <div className={styles.container}>
    <Peso peso={peso} setPeso={setPeso}/>
    <Altura altura={altura} setAltura={setAltura}/>
    <CalcularIMC  peso={peso} altura={altura} setResultado={setResultado}/>
    <ResultadoIMC resultado= {resultado}/>
    <TabelaIMC />
    </div>
  )
}

export default App
