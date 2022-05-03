import styled from 'styled-components'
import './index.css';
import James from './Images/EU2.jpg';
import { Ajust } from "./styles";

const Eu = styled.img`
    border-radius: 100px;
`

 export default function About() {
    return (
      <>
        <Ajust>
            <h1>OI</h1>
            <Eu src={James} width="200px"/>
        </Ajust>
      </>
    );
  }