//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let nomes = document.getElementById('amigo').value;
    if (nomes == "") {
        alert("Por favor, insira um nome.");
    } else {
        amigos.push(nomes);
        console.log(amigos);
       
    }
     limparAmigos();
     atualizarLista();
}

function limparAmigos() {
    nomes = document.getElementById('amigo');
    nomes.value = "";
}

function atualizarLista() {
            const lista = document.getElementById("listaAmigos");

            // Limpa a lista antes de adicionar novos elementos
            lista.innerHTML = "";

            // Percorre o array e cria um <li> para cada amigo
            amigos.forEach(amigo => {
                const li = document.createElement("li");
                li.textContent = amigo;
                lista.appendChild(li);
            });
        }
function sortearAmigo(){    

    if (amigos == 0){
        alert(`Digite o nome dos amigos. `)
    } else {
    sorteio = Math.floor(Math.random() * amigos.length);
    amigoSorteado = amigos[sorteio];
    document.getElementById('resultado').innerHTML = `Amigo sorteado:${amigoSorteado}`
    }

    
}
