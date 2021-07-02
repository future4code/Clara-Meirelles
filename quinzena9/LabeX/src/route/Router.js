import { Route, Switch, BrowserRouter } from 'react-router-dom'
import PaginaPrincipal from '../pages/PaginaPrincipal.js'
import PaginaViagens from '../pages/PaginaViagens.js'
import PaginaInscricaoViagem from '../pages/PaginaInscricaoViagem'
import PaginaAcesso from '../pages/PaginaAcesso.js'
import PaginaCriarViagem from '../pages/PaginaCriarViagem.js'
import PaginaAdmin from '../pages/PaginaAdmin.js'
import PaginaDetalhesViagem from '../pages/PaginaDetalhesViagem.js'


export function Router() {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <PaginaPrincipal />
                </Route>
                <Route exact path={"/viagens"}>
                    <PaginaViagens />
                </Route>
                <Route exact path={'/inscricao-viagem/:id'}>
                    <PaginaInscricaoViagem/>
                </Route>
                <Route exact path={"/login"}>
                    <PaginaAcesso />
                </Route>
                <Route exact path={"/pagina-admin"}>
                    <PaginaAdmin />
                </Route>
                <Route exact path={"/criar-viagem"}>
                    <PaginaCriarViagem />
                </Route>
                <Route exact path={'/detalhes-viagem/:id'}>
                    <PaginaDetalhesViagem/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}