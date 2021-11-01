import { criarTarefa, handleValores } from "./components/tarefas.js"

const novaTarefa = document.querySelector("[data-form-button]")
novaTarefa.addEventListener("click", criarTarefa);