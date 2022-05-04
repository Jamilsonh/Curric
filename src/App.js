import { GlobalStyle } from "./global";
import { Component, Escolhas, Header } from "./styles";
import { Routes, Route, NavLink } from "react-router-dom";
import styled from 'styled-components'
import Home from "./Home";
import Tecno from "./Tecno";
import James from './Images/EU2.jpg';
import Insta from './Images/Ins.png';
import Linkedin from './Images/Lnk.png';
import GitHub from './Images/Ghub.png';
import Projetos from "./Projetos.js";


const Navegation = styled.div`
    display : flex;
    font-size: 50px;
    justify-content: space-around;
    align-items: space-between;
    width: 900px;
    border-radius: 20px;
    background-color: #5D5F9A;
    border-style: solid;
    border-color: black;
    border-width: 3px;
    padding-left: 30px;
    padding-right: 30px;

`
const Eu = styled.img`
    border-radius: 100px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
`

const Redes = styled.div`
    width: 150px;
    height: 60px;
    display: flex;
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`

const Rotas = styled(NavLink)`
    text-decoration: none;
    color: black;
    opacity: 60%;
    &:hover {
    transition: color 0.15s ease-out 50ms;
    opacity: 80%;
  }
    &.active {
    color: white;
    opacity: 100%;
  }
`
const Profissao = styled.h1`
    color: white;
    font-size: 25px;
    opacity: 40%;
`

const ImagesRedes = styled.img`
    &:hover {
      transform: scale(1.2);
    }
`

const ImgLink = styled.a`
    Text-decoration: none;
    color: white;
    &:hover {
    opacity: 70%;
    }
`


function App() {
  return (
    <div>
      <Header>
        <Eu src={James} width="200px" />
        <Component>
          <h1>JAMILSON HENRIQUE</h1>
        </Component>
        <Component>
          <Profissao>Desenvolvedor Web</Profissao>
        </Component>
        <Redes>
          <ImgLink href="https://www.instagram.com/jamilson__/" title="Projeto calculador github"><ImagesRedes src={Insta} width="40px" height="30px" /></ImgLink>
          <ImgLink href="https://www.linkedin.com/in/jamilsonh/" title="Projeto calculador github"><ImagesRedes src={Linkedin} width="30px" height="30px" /></ImgLink>
          <ImgLink href="https://github.com/Jamilsonh" title="Projeto calculador github"><ImagesRedes src={GitHub} width="40px" height="30px" /></ImgLink>
        </Redes>
        <Escolhas>
          <Navegation>
            <Rotas to="/Projetos">PROJETOS</Rotas>
            <Rotas to="/Tecno">TECNOLOGIAS</Rotas>
          </Navegation>
          <Routes>
            <Route path="/" element={<Projetos />} />
            <Route path="Projetos" element={<Projetos />} />
            <Route path="Tecno" element={<Tecno />} />
          </Routes>
        </Escolhas>
      </Header>
      <GlobalStyle />
    </div>
  );
}



export default App;