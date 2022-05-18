import { useInputControlado } from "../constants/input-controlado";
import Header from '../components/Header.js'


export default function PaginaInscricaoViagem() {
  const [valorNome, onChangeNome] = useInputControlado()
  const [valorIdade, onChangeIdade] = useInputControlado()
  const [valorTexto, onChangeTexto] = useInputControlado()
  const [valorProfissao, onChangeProfissao] = useInputControlado()
  const [valorPais, onChangePais] = useInputControlado()

  return (
    <div className="App">
      <Header />
      <h1>Inscreva-se para uma viagem</h1>
      <input type='text'value={valorNome} onChange={onChangeNome} placeholder={'Nome'} />
      <input type='number'value={valorIdade} onChange={onChangeIdade} placeholder={'Idade'} />
      <input type='text'value={valorTexto} onChange={onChangeTexto} placeholder={'Texto de aplicação'} />
      <input type='text'value={valorProfissao} onChange={onChangeProfissao} placeholder={'Profissão'} />
      <input type='text'value={valorPais} onChange={onChangePais} placeholder={'País de origem'} />
    </div>
  );
}