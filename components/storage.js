import { handleValores } from "./tarefas.js"
import { criarTarefa } from "./tarefas.js";
//Este arquivo lida com toda o armazenamento e busca de novas informações

const armazenarValores = () => {

    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

    tarefas.push(handleValores());
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
    
}

const carregarValores = () => {
    
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

    tarefas.forEach(tarefa => {
        console.log(tarefa)
        /*TODO => mudar os argumentos da função criar tarefa
        para que ela receba meu objeto e seja executada
        */
    });
   
}

carregarValores()

export { armazenarValores }