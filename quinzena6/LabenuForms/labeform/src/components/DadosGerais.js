import React from 'react'

export default class DadosGerais extends React.Component {
  state = {
    nome: "",
    idade: "",
    email: ""
  }

  onChangeNome = (e) => {
    this.setState({ nome: e.target.value }) 
  }


  onChangeIdade = (e) => {
    this.setState({ idade: e.target.value })
  }

  onChangeEmail = (e) => {
    this.setState({ email: e.target.value })
    if(this.state.nome !== "" && this.state.idade !=="" && this.state.email !== "") {
      this.props.passarFormulario()
     }
  }

 
render() {
  
  return (
    <>
      <h1>Etapa 1 - DADOS GERAIS</h1>
      <p>1. Qual o seu nome?</p>
      <input type="text" onChange={this.onChangeNome} />
      <p>2. Qual a sua idade?</p>
      <input type="text" onChange={this.onChangeIdade} />
      <p>3. Qual o seu e-mail?</p>
      <input type="text" onChange={this.onChangeEmail} />
      <p>4. Qual a sua escolaridade?</p>
      <select onChange={this.props.selecionaEscolaridade} >
        <option value={0}>Selecione</option>
        <option value={1}>Ensino Médio incompleto</option>
        <option value={2}>Ensino Médio completo</option>
        <option value={3}>Ensino Superior incompleto</option>
        <option value={4}>Ensino Superior completo</option>
      </select>
    </>
  );
}
}