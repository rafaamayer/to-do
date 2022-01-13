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

    if (informacoes.data === 'Invalid date') {        
        return alert("Insert a valid date")
    } else {
        return informacoes
    }
}


const criaTarefa = (evento) => {    
    evento.preventDefault();

    const novosValores = handleValores();

    renderizaTarefa(novosValores)
    armazenarValores();
}

// TODO if deletar tarefa then remove from local
const renderizaTarefa = ({data, valor}) => {
    const tarefa = document.createElement("li");  
    tarefa.classList.add("task");
    
    const conteudo = `<p class="content">${data} ° ${valor}</p>`;

    tarefa.innerHTML = conteudo

    tarefa.appendChild(criarBotao("Concluir", "check-button", concluirTarefa));
    tarefa.appendChild(criarBotao("Deletar", null, deletarTarefa));

    const lista = document.querySelector("[data-list]");

    lista.appendChild(tarefa);
}

export { criaTarefa, handleValores, renderizaTarefa }