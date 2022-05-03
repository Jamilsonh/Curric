import styled from 'styled-components'
import './index.css';
import Html from './Images/Html2.png';
import Css from './Images/CSS2.png';
import React from './Images/react.png';
import Type from './Images/Type.png';
import Node from './Images/Node.png';
import Js from './Images/Js.png';

const AjustTecno = styled.div`
    display : flex;
    justify-content: space-between;
    background-color: none;
    align-items: center;
    width: 900px;
    height: 450px;
    flex-direction: row;
    margin-right: auto;
    margin-left: auto;
    margin-top: 20px;
    flex-wrap: wrap;
`
const Img = styled.img`
`
const Submenu = styled.div`
    width: 280px;
    height: 200px;
    background-color: #5D5F9A;
    justify-content: space-between;
    display: flex;
    align-items: center;
    margin-left: 8px;
    margin-right: 8px;
    flex-direction: column;
    border-style: solid;
    border-width: 3px;
    border-radius: 20px;
`
const Titulo = styled.h1`
    font-size: 30px;
    font-family: 'Orelega One', cursive;
`

const SubTitulo = styled.h1`
    font-size: 25px;
    margin-bottom: 10px;
    font-family: 'Inconsolata', monospace;
`


 export default function Tecno() {
    return (
      <>
        <AjustTecno>
            <Submenu>
              <Titulo>HTML</Titulo>
              <Img src={Html} width="60px"/>
              <SubTitulo>Intermediário</SubTitulo>
            </Submenu>
            <Submenu>
              <Titulo>CSS</Titulo>
              <Img src={Css} width="60px"/>
              <SubTitulo>Intermediário</SubTitulo>
            </Submenu>
            <Submenu>
              <Titulo>JavaScript</Titulo>
              <Img src={Js} width="60px"/>
              <SubTitulo>Intermediário</SubTitulo>
            </Submenu>
            <Submenu>
              <Titulo>TypeScript</Titulo>
              <Img src={Type} width="60px"/>
              <SubTitulo>Intermediário</SubTitulo>
            </Submenu>
            <Submenu>
              <Titulo>React</Titulo>
              <Img src={React} width="60px"/>
              <SubTitulo>Intermediário</SubTitulo>
            </Submenu>
            <Submenu>
              <Titulo>Node</Titulo>
              <Img src={Node} width="60px"/>
              <SubTitulo>Básico</SubTitulo>
            </Submenu>            
        </AjustTecno>
      </>
    );
  }