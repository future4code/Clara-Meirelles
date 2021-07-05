import Header from '../components/Header/Header.js'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useForm } from '../constants/useForm.js'
import { CorpoPagina, LayoutLogin, Botao } from '../components/styled.js'
import { api_url } from '../constants/api-data.js'

export default function PaginaAcesso() {

  const history = useHistory()
  const { form, onChangeForm } = useForm({
    email: '',
    password: ''
  })

  const onClickEntrar = (event) => {
    event.preventDefault()
    axios.post(`${api_url}/login`, form)
      .then((resposta) => {
        localStorage.setItem('token', resposta.data.token)
        history.replace('/pagina-admin')
      })
      .catch((erro) => {
        console.log('erro', erro)
        window.alert('usuário ou senha incorretos, tente novamente')
      })
  }

  return (
    <CorpoPagina>
      <Header />
      <h1>Página de acesso</h1>
      <LayoutLogin>

          <h1>Login</h1>
          <form onSubmit={onClickEntrar}>
            <input
              name='email'
              type='email'
              value={form.email}
              onChange={onChangeForm}
              placeholder={"E-mail de login"}
              required
            />
            <input
              name='password'
              type='password'
              value={form.password}
              onChange={onChangeForm}
              placeholder={"Senha"}
              required
            />
            <Botao>Entrar</Botao>
          </form>
      </LayoutLogin>
    </CorpoPagina>
  );
}