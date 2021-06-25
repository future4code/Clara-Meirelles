import { useInputControlado } from "../constants/input-controlado";
import styled from "styled-components";
import axios from "axios";
import Header from '../components/Header.js'

const Formulario = styled.div`
    display: flex;
    flex-direction: column;
    /* width: 40vw; */
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;

    input, select{
        width: 50vw;
        height: 48px;
        margin-bottom: 8px;
        border-radius:  16px;
    }
`


export default function CriarViagem() {
    const [valorTitulo, onChangeTitulo] = useInputControlado('')
    const [valorPlaneta, onChangePlaneta] = useInputControlado('')
    const [valorData, onChangeData] = useInputControlado('')
    const [valorDescricao, onChangeDescricao] = useInputControlado('')
    const [valorDuracao, onChangeDuracao] = useInputControlado('')

    const onClickEnviar = () => {
        const body = {
            name: valorTitulo,
            planet: valorPlaneta,
            date: valorData,
            description: valorDescricao,
            durationInDays: valorDuracao
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/clara-meirelles-munoz/trips', body, {
            headers:{
                auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InJkRUkxVjNDWWpUYkdTcHdTRlEyIiwiZW1haWwiOiJjbGFyYV9tZWlyZWxsZXNAaG90bWFpbC5jb20iLCJpYXQiOjE2MjQ1NzgwNzR9.Z3J4hAGoSgiRm3lV6nMpNfVWg4cI4FMCj9UoftWP3f4'
            }
        })
        .then((resposta) => console.log('foi', resposta))
        .catch((erro)=> console.log('não foi', erro))
    }

    return (
        <>
        <Header />
        <Formulario>
            <h1>Criar Viagem</h1>
            <input value={valorTitulo} onChange={onChangeTitulo} placeholder={"Titulo da Viagem"} />
            <select value={valorPlaneta} onChange={onChangePlaneta} placeholder={"Planeta"} >
                <option value={''}>Selecione um Planeta</option>
                <option value={'Júpiter'}>Júpiter</option>
                <option value={'Marte'}>Marte</option>
                <option value={'Mercúrio'}>Mercúrio</option>
                <option value={'Netuno'}>Netuno</option>
                <option value={'Plutão'}>Plutão</option>
                <option value={'Saturno'}>Saturno</option>
                <option value={'Terra'}>Terra</option>
                <option value={'Urano'}>Urano</option>
                <option value={'Vênus'}>Vênus</option>
            </select>
            <input type="date" value={valorData} onChange={onChangeData} />
            <input value={valorDescricao} onChange={onChangeDescricao} placeholder={'Descrição'} />
            <input type='number' value={valorDuracao} onChange={onChangeDuracao} placeholder={'Duração em dias'} />
            <button onClick={onClickEnviar}>Enviar</button>
        </Formulario>
        </>
    );
}