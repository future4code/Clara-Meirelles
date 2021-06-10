import styled from 'styled-components'

export const TelaMusicas = styled.div`
    display:grid;
    grid-template-rows:10vh 1fr 25vh;
    align-items: center;
    justify-items: center;
    min-height: 50vh;
    border: 1px solid orange;
    width: 50vw;

    button{
        border: 1px gray solid;
    }
`
export const ExibePlaylist = styled.div`
    align-self: start;
`

export const CardMusica = styled.div`
    border: 1px darkgray solid;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1%;
    margin-top: 1%;
    width: 40vw;
`