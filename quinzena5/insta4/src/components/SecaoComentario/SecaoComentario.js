import React, { Component } from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`

export class SecaoComentario extends Component {
	state = {
		textoComentario: "",
		arrayComentarios: [""],
	}


	onChangeComentario = (event) => {
		this.setState({ textoComentario: event.target.value })
	}

	criarArrayComentarios = () => {
		this.setState(arrayComentarios.push({ textoComentario }))
	}

	render() {
		return <CommentContainer>
			<p>{arrayComentarios.map((comentario) => {
				return <p>{comentario}</p>
			})}</p>
			<InputComentario
				name={"input-comentario"}
				placeholder={'Comentário'}
				onChange={onChangeComentario}
				value={this.state.textoComentario}
			/>
			<button onClick={this.props.aoEnviarComentario}>Enviar</button>

		</CommentContainer>
	}
}
/**

import React, { useState } from 'react'

function App() {
  const [arrayMensagens, setArray] = useState([])
  const [input, setInput] = useState("")

  function adicionarMensagemNoArray() {
	setArray([...arrayMensagens, { input, usuario }])
	setInput("")
  }

  function stringState(e) {
	setInput(e.target.value)
  }


  return (
	<div className="App">
	  {arrayMensagens.map((mensagem) => {
		return <p>{mensagem.usuario} diz: {mensagem.input}</p>
	  })}
	  <button onClick={adicionarMensagemNoArray}>clique</button>
	  <input type="text" value={input} onChange={stringState}></input>
	  <input type="text" value={usuario} onChange={nomearUsuario}></input>
	</div>
  );
}
 */