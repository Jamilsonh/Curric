import styled from 'styled-components'
import './index.css';
import img from './Images/Code.jpg'

const AjustTecno = styled.div`
    display : flex;
    justify-content: space-between;
    background-color: none;
    align-items: center;
    width: 900px;
    height: 480px;
    flex-direction: row;
    margin-right: auto;
    margin-left: auto;
    margin-top: 20px;
    flex-wrap: wrap;
`

const Submenu = styled.div`
    width: 430px;
    height: 220px;
    background-color: #5D5F9A;
    justify-content: space-between;
    display: flex;
    align-items: center;
    margin-left: 8px;
    margin-right: 8px;
    flex-direction: column;
    border-style: solid;
    border-width: 2px;
    border-radius: 20px;
    background-image: url(${img});
`

const TopoMenu = styled.div`
    width: 430px;
    height: 50px;
    background-color: black;
    border-radius: 20px 20px 0px 0px;
    justify-content: center;
    align-items: center;
    display: flex;
`

const TituloProjeto = styled.h1`
    Color: white;
    font-family: 'Orelega One', cursive;
    font-size: 25px ;
`

const TituloLink = styled.a`
    Text-decoration: none;
    color: white;
    &:hover {
    opacity: 70%;
    }
`

 export default function Projetos() {
    return (
      <>
        <AjustTecno>
            <Submenu>
            <TopoMenu>
                <TituloProjeto><TituloLink href="https://github.com/Jamilsonh/Pokedex" title="Projeto calculador github">POKEDEX</TituloLink></TituloProjeto>
            </TopoMenu>
            </Submenu>
            <Submenu>
            <TopoMenu>
                <TituloProjeto><TituloLink href="https://starwars-react-omega.vercel.app/" title="Projeto calculador github">STAR WARS</TituloLink></TituloProjeto>
            </TopoMenu>
            </Submenu>
            <Submenu>
            <TopoMenu>
                <TituloProjeto><TituloLink href="https://github.com/Jamilsonh/netflixclone" title="Projeto calculador github">NETFLIX CLONE</TituloLink></TituloProjeto>
            </TopoMenu>
            </Submenu>
            <Submenu>
            <TopoMenu>
                <TituloProjeto><TituloLink href="https://github.com/Jamilsonh/webSpotify-Clone" title="Projeto calculador github">SPOTIFY CLONE</TituloLink></TituloProjeto>
            </TopoMenu>
            </Submenu>
        </AjustTecno>
      </>
    );
  }