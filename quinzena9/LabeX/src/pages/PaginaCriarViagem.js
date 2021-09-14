import { useForm } from "../constants/useForm";
import axios from "axios";
import Header from '../components/Header/Header.js'
import { useAutenticacaoDeUsuario } from "../constants/useAutenticacaoUsuario";
import { api_url } from "../constants/api-data";
import { Formulario, CorpoPagina } from "../components/styled";

export default function CriarViagem() {
    const { form, onChangeForm, limpaFormulario } = useForm({
        name: '',
        planet: '',
        date: '',
        description: '',
        durationInDays: '',
    })

    useAutenticacaoDeUsuario()

    const criarViagem = (event) => {
        event.preventDefault()
        const body = form
        const token = localStorage.getItem('token')
        axios.post(`${api_url}/trips`, body, {
            headers: {
                auth: token
            }
        })
            .then(() => {
                limpaFormulario()
            })
            .catch((erro) => {
                window.alert('Um erro ocorreu!', erro)
            })

    }

    return (
        <CorpoPagina>
            <Header />
            <h1>Criar Viagem</h1>
            <Formulario onSubmit={criarViagem}>
                <input
                    name='name'
                    value={form.name}
                    onChange={onChangeForm}
                    placeholder={"Titulo da Viagem"}
                    pattern='[A-Z a-z áàâãéèêíïóôõöúçñ]{5,}'
                    title={'O título da viagem deve ter ao menos 5 caracteres'}
                    required
                />
                <select name='planet'
                    value={form.planet}
                    onChange={onChangeForm}
                    placeholder={"Planeta"}
                    required
                >
                    <option>Selecione um Planeta</option>
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

                <input
                    name='date'
                    type="date"
                    value={form.date}
                    onChange={onChangeForm}
                    min={Date.now()}

                    required
                />

                <input
                    name='description'
                    value={form.description}
                    onChange={onChangeForm}
                    placeholder={'Descrição'}
                    required
                />

                <input
                    name='durationInDays'
                    type='number'
                    value={form.durationInDays}
                    onChange={onChangeForm}
                    placeholder={'Duração em dias'}
                    min={50}
                    title={'A viagem deve durar ao menos 50 dias'}
                    required
                />

                <button>Enviar</button>
            </Formulario>
        </CorpoPagina>
    );
}