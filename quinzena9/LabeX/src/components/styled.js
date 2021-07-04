import styled from "styled-components"
import '../fonts/style.css'



export const CorpoPagina = styled.main`
    min-height: 100vh;
    display: grid;
    grid-template-rows: 10vh 20vh 1fr;
    align-items: center;
    justify-items: center;
    nav{
      display: flex;
      justify-content: space-evenly;
    }

`

export const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    margin: 0 auto;
    padding: 0 auto;

    input, select{
        width: 50vw;
        height: 48px;
        margin-bottom: 8px;
        border-radius:  16px;
    }
`

export const Botao = styled.button`
    border-radius: 16px;
    background-color: rgba(154, 131, 219, 1);
    border-color: rgba(145, 122, 210, 1);
    color: white;
    height: 4vh;

    :hover{
        background-color: rgba(145, 122, 210, 1);
        border-color: rgba(154, 131, 211, 1);
    }
`

export const CardViagem = styled.article`
  justify-self: center;
  min-height: 35vh;
  height: fit-content;
  width: 40vw;
  margin: 3%;
  padding: 8px;
  display: flex;
  flex-direction: column;
  border: 3px solid rgba(187, 140, 209, 1);

  header{
    background-color: rgba(187, 140, 209, 1);
    color: white;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    
    h3{
      text-align: center;
      align-self: center;
    }
  }

  p{
    margin-left: 16px;

    :nth-child(3){
      flex-grow:1;
    }
  }
`

export const BotaoGrande = styled.button`
  background-color: rgba(154, 131, 219, 1);
  border-color: rgba(145, 122, 210, 1);
  border-radius: 13px;
  color:white;
  height: 30vh;
  width: 20vw;

  

  :hover{
    background-color: rgb(175 150 247);
    :active{
      background-color: rgb(136 116 194);
    }
  }
  
`
export const DisplayBotoesGrandes = styled.nav`
  display: grid;
  width: 80%;
  grid-template-columns: 1fr 1fr;
  justify-content: center; 
`

export const FonteLabeX = styled.h1`
  font-family: 'Tourney', 'Zen Tokyo Zoo', Arial, Helvetica, sans-serif;
  font-weight: 300;
  font-size: 4rem;
  align-self: center;
  text-align: center;
  background: -webkit-linear-gradient(45deg, rgb(105 89 148), rgba(187, 140, 209, 1));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`