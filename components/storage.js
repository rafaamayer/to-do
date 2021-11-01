import { handleValores } from "./tarefas.js"

//Este arquivo lida com toda o armazenamento e busca de novas informações

const tarefas = []

const armazenarValores = () => {

    tarefas.push(handleValores())
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
}

export { armazenarValores }