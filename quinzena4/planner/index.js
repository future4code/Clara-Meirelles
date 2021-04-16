let contadorTarefas = 0

function criarTarefa() {
    const diasDaSemana = document.getElementById("dias-semana").value
    let tarefa = document.getElementById("tarefa")
    let selecaoDia = document.getElementById(diasDaSemana)
    const idTarefa = `tarefa-${contadorTarefas}`

    //desafio 1
    if (tarefa.value === "") {
        alert("Digite no espaço de texto a tarefa a ser realizada")
        return
    }
    //fim do desafio 1

    selecaoDia.innerHTML += `<div id=${idTarefa} onclick='marcarTarefa("${idTarefa}")'>-` + tarefa.value + "</div>"
    contadorTarefas++
    tarefa.value = ""
}
//Quando eu pus o document.getElementById("tarefa").value , na linha 17 ele não apagava o valor depois de a tarefa ter sido "registrada".

//desafio 2
function marcarTarefa(id) {
    const tarefaRealizada = document.getElementById(id)
    tarefaRealizada.innerHTML = `<p class="tarefa-realizada">${tarefaRealizada.innerHTML}</p>`
}

//desafio 3 - não funciona, não apaguei pra entender o erro perguntando depois.
function limparTudo() {
    const limparTarefas = document.querySelectorAll(".semana>div")

    limparTarefas.innerHTML = ""
    console.log(limparTarefas)
}
