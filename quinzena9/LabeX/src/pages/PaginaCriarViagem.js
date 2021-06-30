import { useInputControlado } from "../constants/input-controlado";
import styled from "styled-components";
import axios from "axios";
import Header from '../components/Header.js'
import { useAutenticacaoDeUsuario } from "../constants/useAutenticacaoUsuario";

const Formulario = styled.div`
    display: flex;
    flex-direction: column;
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
    const [valorTitulo, onChangeTitulo, setValorTitulo] = useInputControlado()
    const [valorPlaneta, onChangePlaneta, setValorPlaneta] = useInputControlado()
    const [valorData, onChangeData, setValorData] = useInputControlado()
    const [valorDescricao, onChangeDescricao, setValorDescricao] = useInputControlado()
    const [valorDuracao, onChangeDuracao, setValorDuracao] = useInputControlado()

    useAutenticacaoDeUsuario()

    const onClickEnviar = () => {
        const body = {
            name: valorTitulo,
            planet: valorPlaneta,
            date: valorData,
            description: valorDescricao,
            durationInDays: valorDuracao
        }
        const token = localStorage.getItem('token')
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/clara-meirelles-munoz/trips', body, {
            headers: {
                auth: token
            }
        })
            .then((resposta) =>{
                setValorTitulo('')
                setValorPlaneta('')
                setValorData('')
                setValorDescricao('')
                setValorDuracao('')
            })
            .catch((erro) => console.log('não foi', erro))
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