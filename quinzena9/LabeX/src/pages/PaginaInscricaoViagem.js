import { useForm } from "../constants/useForm";
import Header from '../components/Header.js'
import axios from "axios";
import { useParams } from "react-router-dom";


export default function PaginaInscricaoViagem() {
  const { form, onChangeForm, limpaFormulario } = useForm({
    name: '',
    age: 0,
    applicationText: '',
    profession: '',
    country: ''
  })

  const pathParams = useParams()

  const onClickInscricao = (event) => {
    event.preventDefault()
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/clara-meirelles-munoz/trips/${pathParams.id}/apply`, form)
      .then(() => {
        limpaFormulario()
      })
      .catch((erro) => window.confirm('Um erro ocorreu', erro))
  }
  return (
    <div className="App">
      <Header />
      <h1>Inscreva-se para uma viagem</h1>
      <form onSubmit={onClickInscricao}>
        <input
          name='name'
          type='text'
          value={form.name}
          onChange={onChangeForm}
          placeholder={'Nome'}
          pattern={'[A-Z a-z áàâãéèêíïóôõöúçñ]{3,}'}
          title='O nome deve ter pelo menos três letras'
          required
        />
        <input
          name='age'
          min={18}
          type='number'
          value={form.age}
          onChange={onChangeForm}
          placeholder={'Idade'}
          title='A idade mínima para poder se candidatar é 18 anos.'
          required
        />
        <input
          name='applicationText'
          type='text'
          value={form.applicationText}
          onChange={onChangeForm}
          placeholder={'Texto de aplicação'}
          pattern={'^.{30,}'}
          title='O texto para a candidatura deve ter pelo menos 30 caracteres.'
          required
        />
        <input
          name='profession'
          type='text'
          value={form.profession}
          onChange={onChangeForm}
          placeholder={'Profissão'}
          pattern={'^[A-Z a-z áàâãéèêíïóôõöúçñ]{10,}'}
          title='Este campo deve ter pelo menos 10 caracteres.'
          required
        />
        {/* trocar para select - fazer um array e um .map pra n ficar enorme*/}
        <input
          name='country'
          type='text'
          value={form.country}
          onChange={onChangeForm}
          placeholder={'País de origem'}
          required
        />
        <button>Enviar Inscrição</button>
      </form>
    </div>
  );
}