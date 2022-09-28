document.getElementById("submit").onclick = async () =>{
    var username = document.getElementById("username").value;
    /*fetch('https://api.github.com/users/'+username).then(response => {
        response.json().then((x) => {
            console.log(x)
        })
    })*/

    var response = await fetch('https://api.github.com/users/'+username);
    var user = await response.json()
    
   /* const obj ={
        nome: 'Breno'
    }*/

    localStorage.setItem("user", JSON.stringify(user))
    window.location.href = './index2.html'

    //document.getElementById("image").src = user.avatar_url
    
}

//() =>{} -- arrow function / funcao anonima
// function (){} => arrow function / funcao anonima

/*function soma(n1,n2){
    n1 + n2
}*/

/*var nome = 'vinicius'

if(nome === 'vinivius'){
    let sobrenome = 'schiffler'   
}

console.log(nome)
console.log(sobrenome)*/

/*const dias = ['seg', 'ter', 'qua'];
console.log(dias)

dias.push('qui')
dias.pop()//tira atributos
console.log(dias)*/