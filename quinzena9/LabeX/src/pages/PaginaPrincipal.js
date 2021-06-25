import CriarViagem from './PaginaCriarViagem.js'
import PaginaAcesso from './PaginaAcesso.js'
import PaginaViagens from './PaginaViagens.js'
import Header from '../components/Header.js'

export default function PaginaPrincipal() {
  // const [pagina, setPagina] = useState('')

  return (
    <div>
      <Header />

      <h1>LabeX</h1>
      <p>Explore o site e conheça nossas viagens!</p>
    </div>
  );
}