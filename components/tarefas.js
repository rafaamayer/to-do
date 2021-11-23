import { criarBotao, concluirTarefa, deletarTarefa } from "./botao.js";
import { armazenarValores } from "./storage.js";

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

// TODO create a step verifie if has task
const criarTarefa = (evento) => {    
    evento.preventDefault();

    const novosValores = handleValores();
    const {valor, data} = novosValores;

    const tarefa = document.createElement("li");
    tarefa.classList.add("task");
    
    const conteudo = `<p class="content">${data} ° ${valor}</p>`;

    tarefa.innerHTML = conteudo

    tarefa.appendChild(criarBotao("Concluir", "check-button", concluirTarefa));
    tarefa.appendChild(criarBotao("Deletar", null, deletarTarefa));

    const lista = document.querySelector("[data-list]");
    
    armazenarValores();

    lista.appendChild(tarefa);
}

export { criarTarefa, handleValores }