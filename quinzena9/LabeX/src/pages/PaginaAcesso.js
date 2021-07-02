import Header from '../components/Header.js'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useForm } from '../constants/useForm.js'

export default function PaginaAcesso() {

  const history = useHistory()

  const { form, onChangeForm} = useForm({
    email: '',
    password: ''
  })

  const onClickEntrar = (event) => {
    event.preventDefault()
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/clara-meirelles-munoz/login', form)
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
    <div>
      <Header />
      <h1>Página Acesso</h1>
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
        <button>Entrar</button>
      </form>

    </div>
  );
}