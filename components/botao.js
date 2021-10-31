const criarBotao = (tipo, classe, metodo) => {
    const botao = document.createElement("button");

    botao.addEventListener("click", metodo)

    botao.classList.add(classe);
    botao.innerHTML = tipo

    return botao;
}

const concluirTarefa = (evento) => {
    const botaoClicado = evento.target
        
    const tarefaMarcada = botaoClicado.parentElement
    
    tarefaMarcada.classList.toggle("done")
}

const deletarTarefa = (evento) => {
    const botaoClicado = evento.target

    const tarefaMarcada = botaoClicado.parentElement
    
    tarefaMarcada.remove()
}

export { criarBotao, concluirTarefa, deletarTarefa }