import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

const ContainerTarefa = styled.section`
display: flex;
align-items: center;
`



class App extends React.Component {
  state = {
    tarefas: [],
    inputValue: '',
    filtro: ''
  }

  componentDidUpdate() {
    const armazenaTarefas = JSON.stringify(this.state)
    localStorage.setItem("tarefas", armazenaTarefas)
  };

  componentDidMount() {

    const acessaTarefasString = localStorage.getItem("tarefas")

    if (acessaTarefasString) {
      const acessaTarefas = JSON.parse(acessaTarefasString)
      this.setState(acessaTarefas)
    }

  };

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false,
    }

    const adicionaNovaTarefa = [...this.state.tarefas, novaTarefa]
    this.setState({
      tarefas: adicionaNovaTarefa,
      inputValue: ""
    })

  }

  selectTarefa = (id) => {
    const novaListaDeTarefas = this.state.tarefas.map((tarefa) => {
      if (id === tarefa.id) {
        const alteraStatusDaTarefa = {
          ...tarefa,
          completa: !tarefa.completa
        }
        return alteraStatusDaTarefa
      } else {
        return tarefa
      }
    })
    this.setState({ tarefas: novaListaDeTarefas })
  }

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value })
  }

  limparTarefasRealizadas = () => {
    const tarefasConcluidas = [...this.state.tarefas]
    const novaListaNaoConcluidas = tarefasConcluidas.filter(tarefa => {
      if (tarefa.completa === false) {
        return true
      }
    })

    this.setState({ tarefas: novaListaNaoConcluidas })
  }

  deletaTarefa = (id) => {
    const novaListaDeTarefas = this.state.tarefas.filter((tarefa) => {
      if (id === tarefa.id) {
        return false
      } else {
        return tarefa
      }
    })
    this.setState({ tarefas: novaListaDeTarefas })
  }

  limparTodasTarefas = () => {
    this.setState({tarefas:[]})
  }

  enviarComEnter = (event) => {
    if (event.key === "Enter"){
      this.criaTarefa()
    }
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }

    })
    

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onKeyDown={this.enviarComEnter} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <ContainerTarefa key={tarefa.id}>
                <Tarefa
                  completa={tarefa.completa}
                >
                  {tarefa.texto}

                </Tarefa>
                <p
                  onClick={() => this.selectTarefa(tarefa.id)}>✔️</p>
                <p onClick={() => { this.deletaTarefa(tarefa.id) }}>❌</p>

              </ContainerTarefa>
            )
          })}
        </TarefaList>
        <button onClick={this.limparTarefasRealizadas}>Limpar tarefas concluidas</button>
        <hr/>
        <button onClick={this.limparTodasTarefas}>Limpar todas as tarefas</button>
      </div>
    )
  }
}

export default App
