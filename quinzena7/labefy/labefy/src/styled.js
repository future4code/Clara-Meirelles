import styled from "styled-components"

export const PaginaInicial = styled.main`
  display: grid;
  grid-template-columns: 20vw 1fr;
  grid-template-rows: 10vh 1fr 10vh;
  background-color:black;
  color: lightgray;
  min-height: 100vh;
  justify-items: center;

  h1{
    text-align: center;
  }

  button{
    background-color: black;
    border: none;
    border-radius: 50px;
    color: lightgray;
    width: fit-content;
  }
  
  button:hover{
    background-color: darkgray;
  }

  section{
    display: flex;
    flex-direction: column;
    padding-top: 3vh;
  }

  aside{
    border-right: 1px darkgray solid;
    display: flex;
    flex-direction: column;
    padding: 5%;
  }

  h2:hover{
    color: orange;
    text-decoration: underline;
  }

  input{
    outline: none;
  }
`