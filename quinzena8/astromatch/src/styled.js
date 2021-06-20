import styled from 'styled-components'

export const FundoPagina = styled.main`
background-color: aliceblue;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

button{
position:fixed;
bottom:10px;
}
`

export const AstroMatch = styled.section`
background-color: white;
min-height: 600px;
height: 80vh;
max-height: 100vh;
min-width: 400px;
width: 25vw;
max-width: 100vw;
border-radius: 10px;
border: 1px solid black;
display: grid;
grid-template-rows: 10vh 1fr 15vh;
`
