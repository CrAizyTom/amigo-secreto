// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigo =  document.getElementById("amigo")
let listaAmigos = document.getElementById("listaAmigos")
let resultado = document.getElementById("resultado")
let amigos = []

function agregarAmigo() {
    // Agrega el nombre de un amigo nuevo al array "amigos"
    let nombre = amigo.value.toLowerCase()
    if(amigos.includes(nombre) == true || nombre == ""){
        amigo.placeholder = "NOMBRE REPETIDO O INVÁLIDO"
    } else{
        amigos.push(nombre)
        listaAmigos.innerHTML += `<li>${nombre}</li>`
        amigo.value = ""
    }
}

function sortearAmigo() {
    // reordena el array "amigos" de forma aleatoria y devuelve el primer elemento del array
    if(amigos== 0){
        alert("No hay amigos para sortear")
    } else if(amigos.length == 1){ 
        resultado.innerHTML = `Ha salido sorteado ${amigos[0]}`
    } else{
        let ganador = amigos[Math.floor(Math.random() * amigos.length)]
        resultado.innerHTML = `Ha salido sorteado ${ganador}`
        }
}