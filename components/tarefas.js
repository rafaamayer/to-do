import { criarBotao, concluirTarefa, deletarTarefa } from "./botao.js";
import { armazenarValores } from "./storage.js";

const handleValores = () => {

    const input = document.querySelector("[data-form-input]");
    const data = document.querySelector("[data-form-date]");

    const valor = input.value;
    const valorData = moment(data.value).format('DD/MM/YYYY');

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

    criaData(novosValores)
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

    const lista = document.querySelectorAll("[data-order]");
    const validacaoData = data

    lista.forEach(item => {

        const dataSelecionada = item.innerHTML

        if (dataSelecionada == validacaoData){
            item.appendChild(tarefa);
        } else{
            return
        }
    
    })
    //
}

const criaData = ({data, valor}) => {
    const dataList = document.createElement("li"); 
    const conteudo = `<p class="content-data" data-order>${data}</p>`;

    dataList.innerHTML = conteudo

    const lista = document.querySelector("[data-list]");

    lista.appendChild(dataList);

    renderizaTarefa({data, valor})
}

export { criaTarefa, handleValores, renderizaTarefa, criaData }