import { criarTarefa, handleValores, renderizaTarefa } from "./components/tarefas.js"
import { carregarValores } from './components/storage.js'

const novaTarefa = document.querySelector("[data-form-button]")
novaTarefa.addEventListener("click", criarTarefa);
carregarValores()