var user = JSON.parse(localStorage.getItem("user"))
console.log(user)

document.getElementById('image').src = user.avatar_url
document.getElementById('name').innerText = user.name


async function pegarRepos(){
    var response = await fetch(user.repos_url)
    var repos = await response.json()
    console.log(repos)

    var main = document.getElementById('main')

    //var nome = 'FrontEnd Essencial'
    //var linguagem = 'javascript/css/hyml'

    //for(var i = 0; i < repos.lenght; i++){ }

    repos.forEach((repositorio) => {
        main.innerHTML += 
        `<div class="card_container"><strong>${repositorio.name}</strong> 
        <span>${repositorio.language}</span></div>`
    })
        
       
}

pegarRepos()