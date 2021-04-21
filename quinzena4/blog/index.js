const postagem = {}
const arrayDePosts = []

function enviarPost() {

    postagem.titulo = document.getElementById("titulo-post").value
    postagem.autor = document.getElementById("autor-post").value
    postagem.texto = document.getElementById("conteudo-post").value
    let img = document.getElementById("imagem-post").value
    postagem.imagem = img
    publicacao = document.getElementById("container-de-posts")
    let i = 0


    if (img.includes("http") && (img.toLowerCase().includes(".jpg") || img.toLowerCase().includes(".png"))) {
        publicacao.innerHTML += `<h1 class="post${i}">${postagem.titulo}</h1>
        <h4  class="post${i}">Escrito por: ${postagem.autor} </h4> 
        <img src=${postagem.imagem}>
        <p class="post${i}">${postagem.texto}</p>`
    } else {
        alert("seu post será enviado sem imagem!")

        publicacao.innerHTML += `<h1 class="post${i}">${postagem.titulo}</h1>
        <h4  class="post${i}">Escrito por: ${postagem.autor} </h4> 
        <p class="post${i}">${postagem.texto}</p>`

    }



i++

document.getElementById("titulo-post").value = ""
document.getElementById("autor-post").value = ""
document.getElementById("conteudo-post").value = ""
document.getElementById("imagem-post").value = ""

arrayDePosts.push(postagem)

}

// const localStoragePosts = JSON.stringfy(localStorage.getItem('arrayDePosts')) //declara a local storage