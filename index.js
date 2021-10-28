import { criarBotao, concluirTarefa, deletarTarefa } from "./components/botao.js";

const criarTarefa = (evento) => {
    evento.preventDefault();

    const input = document.querySelector("[data-form-input");

    const valor = input.value;
    
    const tarefa = document.createElement("li");
    tarefa.classList.add("task");

    const conteudo = `<p class="content">${valor}</p>`;
    
    tarefa.innerHTML = conteudo
    tarefa.appendChild(criarBotao("Concluir", "check-button", concluirTarefa));
    tarefa.appendChild(criarBotao("Deletar", null, deletarTarefa));

    const lista = document.querySelector("[data-list");
    
    lista.appendChild(tarefa);
}

const novaTarefa = document.querySelector("[data-form-button]")
novaTarefa.addEventListener("click", criarTarefa);