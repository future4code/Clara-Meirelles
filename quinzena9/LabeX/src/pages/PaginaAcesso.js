import {useInputControlado} from '../constants/input-controlado.js'


export default function PaginaPrincipal() {

const [valorLogin, onChangeLogin] = useInputControlado()
const [valorSenha, onChangeSenha] = useInputControlado()

  return (
    <div>
      Página Acesso
      <input value={valorLogin} onChange={onChangeLogin} placeholder={"Nome ou e-mail de login"} />
      <input value={valorSenha} onChange={onChangeSenha} placeholder={"Senha"} />
    </div>
  );
}