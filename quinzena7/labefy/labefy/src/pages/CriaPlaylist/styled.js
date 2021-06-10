import styled from 'styled-components'

export const ContainerCriaPlaylist = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8%;
    justify-content: space-evenly;
    gap: 10vh;

    input{
        width: 25vw;
        border-radius: 50px;
        border: none;
        text-align: center;
        font-size: 1.1rem;
    }
    input:active{
        border-radius: 50px;
    }

    button {
        background-color: black;
        color: gray;
        border: 1px solid lightgray;
        width: 20vw;
        margin-left: 3%;
    }

    section {
        display:flex;
        flex-direction: row;
    }
`