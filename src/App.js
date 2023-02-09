import {React, useState} from "react";
import { GlobalStyle } from "./Components/GlobalStyle";
import Cabecalho from "./Components/Cabecalho";
import Card from "./Components/Card";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaEscuro } from "./Components/UI/temas";
import { BtnTema } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema"


function App() {

  const [tema, setTema] = useState(true);
  const trocaTema = () => {
    setTema((tema => !tema))
  }


  return (
    <ThemeProvider theme={tema?temaClaro:temaEscuro}>
      <GlobalStyle />
      <BtnTema onClick={trocaTema}>
        <SwitcherTema tema={tema}/>
      </BtnTema>
      <Cabecalho />
      <Card />
    </ThemeProvider>
  );
}

export default App;
