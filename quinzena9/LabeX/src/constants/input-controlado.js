import React, {useState} from 'react'

export const useInputControlado = () => {
    const [valorInput, setValorInput] = useState()
    const onChangeInput = (e) => {
        setValorInput(e.target.value)
    }
    return [valorInput, onChangeInput]
}