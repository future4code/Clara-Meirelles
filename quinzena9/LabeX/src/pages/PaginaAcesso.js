import { useInputControlado } from '../constants/input-controlado.js'
import Header from '../components/Header.js'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

export default function PaginaAcesso() {

  const [valorLogin, onChangeLogin] = useInputControlado()
  const [valorSenha, onChangeSenha] = useInputControlado()
  const history = useHistory()

  const onClickEntrar = () => {
    const body = {
      email: valorLogin,
      password: valorSenha
    }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/clara-meirelles-munoz/login', body)
    .then((resposta) => {
      console.log('token', resposta.data.token)
      history.replace('/pagina-admin')
    })
    .catch((erro) =>{
       console.log('erro', erro)
      window.alert('usuário ou senha incorretos, tente novamente')})
  }

  return (
    <div>
      <Header/>
      <h1>Página Acesso</h1>
      <input value={valorLogin} onChange={onChangeLogin} placeholder={"Nome ou e-mail de login"} />
      <input value={valorSenha} onChange={onChangeSenha} placeholder={"Senha"} />
      <button onClick={onClickEntrar}>Entrar</button>
    </div>
  );
}