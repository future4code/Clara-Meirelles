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
	}


	onChangeComentario = (event) => {
		console.log(event.target.value)
		this.setState({ textoComentario: event.target.value })
	}

	render() {
		return <CommentContainer>
			<InputComentario
				name={"input-comentario"}
				placeholder={'Comentário'}
				onChange={this.onChangeComentario}
				value={this.state.textoComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>

		</CommentContainer>
	}
}