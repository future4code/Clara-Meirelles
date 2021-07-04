import styled from 'styled-components'

export const HeaderStyle = styled.header`
display: flex;
justify-content: flex-end;
/* background-color: rgba(187, 140, 209, 1); */
background: -webkit-linear-gradient(45deg,rgb(105 89 148), rgb(187, 140, 209));
height: 100%;
width: 100%;
align-items: center;
margin: 0;

button{
    margin-right: 1vw;
    background-color: transparent;
    border: none;
    color: white;
    font-weight: bold;
    font-size: 1rem;
    :hover{
        border-bottom: 1px solid white;
    }
}
`

