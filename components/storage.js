import { handleValores, renderizaTarefa } from "./tarefas.js"
//Este arquivo lida com toda o armazenamento e busca de novas informações

const armazenarValores = () => {

    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

    tarefas.push(handleValores());
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
    
}

const carregarValores = () => {
    
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
    
    tarefas.forEach(tarefa => {renderizaTarefa(tarefa)});
   
}
export { armazenarValores, carregarValores}