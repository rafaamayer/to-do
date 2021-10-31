import { criarBotao, concluirTarefa, deletarTarefa } from "./components/botao.js";

const handleValores = () => {

    const input = document.querySelector("[data-form-input]");
    const data = document.querySelector("[data-form-date]");

    const valor = input.value;
    const valorData = moment(data.value).format('DD/MM/YYYY HH:mm');

    const informacoes = {
        'valor': valor,
        'data': valorData
    }

    return informacoes
}

const criarTarefa = (evento) => {
    evento.preventDefault();

    const novosValores = handleValores()
    const {valor, data} = novosValores

    const tarefa = document.createElement("li");
    tarefa.classList.add("task");
    
    const conteudo = `<p class="content">${data} ° ${valor}</p>`;

    tarefa.innerHTML = conteudo

    tarefa.appendChild(criarBotao("Concluir", "check-button", concluirTarefa));
    tarefa.appendChild(criarBotao("Deletar", null, deletarTarefa));

    const lista = document.querySelector("[data-list]");
    
    lista.appendChild(tarefa);
}

const novaTarefa = document.querySelector("[data-form-button]")
novaTarefa.addEventListener("click", criarTarefa);