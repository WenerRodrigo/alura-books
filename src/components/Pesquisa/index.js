import Input from "../Input";
import styled from "styled-components";
import { useState } from "react";
import { livros } from "./dadosPesquisa";

const PesquisaContainer = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`;

const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const Subtitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

const Resultado = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;

  p {
    width: 200px;
  }

  img {
    width: 100px;
  }

  &:hover {
    border: 1px solid white;
  }
`

function Pesquisa() {
  const [livrosPesquisados, setLivrosDigitados] = useState([]);

  return (
    <PesquisaContainer>
      <Titulo>Already know where to start?</Titulo>
      <Subtitulo>Find your book on our shelf...</Subtitulo>
      <Input
        placeholder="Write your next read.."
        onBlur={evento => {
          const textoDigitado = evento.target.value;
          const resultadoPesquisa = livros.filter(livro =>
            livro.nome.includes(textoDigitado)
          );
          setLivrosDigitados(resultadoPesquisa);
        }}
      />
      { livrosPesquisados.map( livro => (
        <Resultado>
          <p>{livro.nome}</p>
          <img src={livro.src} />
        </Resultado>
      ) ) }
    </PesquisaContainer>
  );
}

export default Pesquisa;
