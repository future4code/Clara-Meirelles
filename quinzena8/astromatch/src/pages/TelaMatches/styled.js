import styled from 'styled-components'

export const TelaExibeMatch = styled.div`
    overflow-y: scroll;
    height: 100%;
`

export const CardMatch = styled.section`
    display: flex;
    padding: 8px;
    align-items: center;

    :hover{
        background-color: lightgray;
    }

    :active{
        background-color: darkgray;
    }
`
export const ImagemMatch = styled.img`
    height: 64px;
    width: 64px;
    border-radius: 50px;
    margin-right: 16px;
    object-fit: cover;
`