import { useState } from 'react'

export const useForm = (estadoInicial) => {
    const [form, setForm] = useState(estadoInicial)
    const onChangeForm = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const limpaFormulario = () => {
        setForm(estadoInicial)
    }
    return { form, onChangeForm, limpaFormulario }
}